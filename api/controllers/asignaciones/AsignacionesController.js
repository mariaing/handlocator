/**
 * AsignacionesController
 *
 * @description :: Server-side logic for managing asignaciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const moment = require('moment');
const actionUtil = require('../../blueprints/myActionUtil');
const _ = require('lodash');
var fs = require('fs');
const uid = require('uid-safe');

module.exports = {

    identity: 'Asignaciones',
    /********************************************/
    /* creacion de una asignacion               */
    /********************************************/
    create(req, res) {
        var data = req.allParams();

        async.parallel({
            empresa: cb => {
                Empresas.findOne(req.user.empresa.id).exec(cb);
            }
        }, function (err, result) {
            if (err) return res.negotiate(err);

            data.empresa = result.empresa.id;

            Asignaciones.create(data).then(asignacion => {

                Empleados.update(asignacion.empleado, {
                    estado: 'ocupado'
                }).then(updateRecords => {
                    broadcastAsignacion(asignacion.empleado);
                    return res.ok();
                });
            }).catch(res.negotiate);
        });

        function broadcastAsignacion(data) {
            Empleados.findOne({ id: data }).then((empleado) => {
                User.findOne({ id: empleado.user }).then((user) => {
                    var data = {
                        title: 'Trabajo asignado',
                        type: 'trabajo',
                        body: 'Se te asigno un nuevo trabajo, actualiza para verificarlo.'
                    }
                    PusherService.send(data, user.reg_id);
                    res.ok();
                })
            });
        }
    },

    /********************************************/
    /* confirmar asignacion                     */
    /********************************************/
    confirmAsignacion(req, res) {
        var data = req.allParams();
        Empleados.findOne({ id: data.empleado })
            .then((empleado) => {
                User
                    .findOne({ id: empleado.user }).then((user) => {
                        var data = {
                            title: 'Hola ' + empleado.nombres + ' ' + empleado.apellidos,
                            type: 'confirmacion_verify',
                            body: 'Hemos validado tu servicio, puedes trabajar tranquilamente.'
                        }
                        PusherService.send(data, user.reg_id);
                        res.ok();
                    })
            });
    },

    /********************************************/
    /* cancelar de una asignacion               */
    /********************************************/
    cancelAsignacion(req, res) {

        var data = req.allParams();

        Asignaciones.update(data.id, {
            estado: 'vigente',
            imagen: null
        }).then(updateRecords => {
            broadcastAsignacion(updateRecords);
        })

        function broadcastAsignacion(data) {
            Empleados.findOne({ id: data[0].empleado })
                .then((empleado) => {
                    User.findOne({ id: empleado.user })
                        .then((user) => {
                            var data = {
                                title: 'Hola ' + empleado.nombres + ' ' + empleado.apellidos,
                                type: 'confirmacion_cancel',
                                body: 'No pudimos verificar que seas tu en el trabajo, cancelaremos tu servicio.'
                            }
                            PusherService.send(data, user.reg_id);
                            res.ok();
                        })
                });
        }
    },

    /********************************************/
    /* listar de una asignacion               */
    /********************************************/
    getAsignaciones(req, res) {
        Asignaciones.find({
            empresa: req.allParams().id,
            createdAt: limitFecha(req)
        }).populate('empleado').populate('images').then(asignaciones => {
            return res.ok(asignaciones);
        })
    },

    /********************************************/
    /* actualizar estado                        */
    /********************************************/
    updateEstado(req, res) {
        var asignacion = req.allParams();

        if (asignacion.estado === 'vigente') {

            Asignaciones
                .update(asignacion.id, { estado: asignacion.estado, imagen: null })
                .then(updateRecords => {
                    Empleados.findOne({ id: updateRecords[0].empleado })
                        .then((empleado) => {

                        });
                    return res.ok();
                });

        } else if (asignacion.estado === 'finalizado') {

            var fecha = asignacion.fecha_finalizada ? moment(asignacion.fecha_finalizada) : moment();

            fecha.set('hour', 0).set('minute', 0).set('second', 0);
            fecha.add(1, 'd');

            Asignaciones
                .update(asignacion.id, {
                    estado: asignacion.estado,
                    hora_finalizada: asignacion.hora_finalizada,
                    fecha_finalizada: asignacion.fecha_finalizada,
                    duracion: asignacion.duracion
                }).then(updateRecords => {
                    Empleados.findOne({ id: updateRecords[0].empleado })
                    .then((empleado) => {
                        var data = {
                            empleado: empleado,
                            trabajo: updateRecords[0]
                        };
                        sails.sockets.broadcast('empresa' + empleado.empresa + 'watcher', 'trabajoSocket', data, req);
                    });
                    return res.ok();
                });
        } else {            
            var fecha = moment();
            fecha.add(1, 'd');
            Asignaciones.update(req.allParams().id, {
                estado: req.allParams().estado
            }).then(updateRecords => {
                Empleados.findOne({ id: updateRecords[0].empleado }).then((empleado) => {
                    var data = {
                        empleado: empleado,
                        trabajo: updateRecords[0],
                        fecha_ingreso: fecha
                    };
                    sails.sockets.broadcast('empresa' + empleado.empresa + 'watcher', 'trabajoSocket', data, req);
                });
                return res.ok();
            });
        }
    },

    updateHora(req, res) {
        var asignacion = req.allParams();
        var hora_actual = moment(new Date()).format("hh:mm a");

        if (asignacion.hora_finalizada !== hora_actual) return res.badRequest('Algo paso con las horas');
        
        Asignaciones.update(asignacion.id, {
            hora_finalizada: asignacion.hora_finalizada,
            estado: req.allParams().estado
        }).then(updateRecords => {
            Empleados.findOne({ id: updateRecords[0].empleado }).then((empleado) => {
                var data = {
                    empleado: empleado,
                    trabajo: updateRecords[0]
                };
                sails.sockets.broadcast('empresa' + empleado.empresa + 'watcher', 'trabajoSocket', data, req);
            });
            return res.ok();
        });
    },

    updateTime(req, res) {
        console.log(req.allParams());
        Asignaciones.update(req.allParams().id, {
            duracion: req.allParams().duracion,
        }).then(updateRecords => {
            Empleados.findOne({ id: updateRecords[0].empleado }).then((empleado) => {
                var data = {
                    empleado: empleado,
                    trabajo: updateRecords[0]
                };
                sails.sockets.broadcast('empleado' + empleado.id + 'watcher', 'HoraActualizada', data, req);
                return res.ok(data.trabajo);
            });
            //return res.ok(updateRecords[0]);
        });
    },

    saveImagen(req, res) {
        Asignaciones.findOne({ id: req.params.id })
            .then((asignacion) => {
                if (asignacion) {
                    req.file('file').upload({
                        dirname: sails.config.appPath + '/public/images/confirmaciones',
                        saveAs: function (__newFileStream, cb) {
                            cb(null, uid.sync(18) + asignacion.id + '.' + _.last(__newFileStream.filename.split('.')));
                        },
                        maxBytes: 10000000
                    },
                        (error, uploadedFiles) => {
                            if (error) return res.negotiate(error);
                            if (!uploadedFiles[0]) return res.badRequest('ha ocurrido un error inesperado al almacenar la imagen');
                            const filename = _.last(uploadedFiles[0].fd.split('\\'));
                            // asignacion.imagen = filename;
                            // asignacion.save((err, s) => res.ok('Archivos cargados'));

                            Images.create({
                                path: filename,
                                asignacion: asignacion.id,
                                type: req.allParams().type,
                                duracion_in_moment: req.allParams().duracion_in_moment,
                            }).exec((err, img) => res.ok('ok'));
                        });

                } else {
                    return res.notFound('La asignacion no existe');
                }
            }).catch(res.negotiate);
    },

};



function limitFecha(req, default_dia) {
    var fecha_hasta = req.param('fecha_hasta') ? moment(req.param('fecha_hasta')) : moment();
    if (req.param('fecha_desde')) {
        var fecha_desde = moment(req.param('fecha_desde'));
    } else {
        default_dia || (default_dia = false);
        var fecha_desde = default_dia ? moment() : moment().date(1);
    }
    fecha_desde.set('hour', 0).set('minute', 0).set('second', 0);
    fecha_hasta.set('hour', 0).set('minute', 0).set('second', 0);
    // fecha_desde.add(-1, 'd');
    fecha_hasta.add(1, 'd');

    console.log(fecha_desde.toDate(), '**************');
    console.log(fecha_hasta.toDate(), '**************');
    return {
        '>=': fecha_desde.toDate(),
        '<': fecha_hasta.toDate()
    }
};
