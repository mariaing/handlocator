/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const omit = require('lodash').omit;
const pick = require('lodash').pick;
const passport = require('passport');

module.exports = {
    _config: {
        model: 'user'
    },

    authenticate(req, res) {
        passport.authenticate('local', function (error, user, info) {
            if (error || !user) return res.negotiate(error || info);
            async.series([
                    function (callback) {
                        if (user.rol === 'EMPRESA') {
                            Empresas.findOne({user: user.id})
                                .then((empresa)=> {
                                    if (!empresa.activa) return res.unauthorized(sails.config.errors.USER_NOT_INACTIVE);
                                    user.empresa = pick(empresa, [
                                        'id',
                                        'nombre',
                                        'logo'
                                    ]);
                                    callback(user);
                                }).catch(res.negotiate);
                        }
                        else if (user.rol === 'EMPLEADO') {
                            Empleados.findOne({user: user.id})
                                .then((empleado)=> {
                                    if (!empleado.activo) return res.unauthorized(sails.config.errors.USER_NOT_INACTIVE);
                                    user.empleado = pick(empleado, [
                                        'id',
                                        'nombres',
                                        'apellidos',
                                        'imagen',
                                        'empresa',
                                        'email',
                                        'activo',
                                        'estado',
                                        'identificacion',
                                        'movil',
                                        'fecha_nacimiento',
                                        'telefono',
                                        'direccion',
                                        'iddispositivo'
                                    ]);
                                    callback(user);
                                }).catch(res.negotiate);
                        }
                        else if (user.rol === 'ADMINISTRADOR') {
                            Administradores.findOne({user: user.id})
                                .then((Administrador)=> {
                                    if (!Administrador.activo) return res.unauthorized(sails.config.errors.USER_NOT_INACTIVE);
                                    user.Administrador = pick(Administrador, [
                                        'id',
                                        'nombres',
                                        'apellidos',
                                        'imagen',
                                        'empresa',
                                        'identificacion'
                                    ]);
                                    callback(user);
                                }).catch(res.negotiate);
                        }
                        else {
                            callback(user);
                        }
                    }
                ],
                function (user) {
                    return res.ok({
                        token: JWTService.token.encode({id: user.id}),
                        user: user
                    });
                });

        })(req, res);
    },

    registro(req, res) {
        User
            .create(omit(req.allParams(), 'id'))
            .then(function (user) {
                return {
                    token: JWTService.token.encode({id: user.id}),
                    user: user
                }
            })
            .then(res.created)
            .catch(res.negotiate);
    },

    suscribe_watcher(req, res){
        if (!req.isSocket) {
            return res.badRequest();
        }
        sails.sockets.join(req, 'empresa'+req.allParams().id+'watcher', function(err) {
            if (err) {
                return res.serverError(err);
            }
            return res.ok();
        });
    },

    suscribe_watcher_empleado(req, res){
        if (!req.isSocket) {
            return res.badRequest();
        }
        console.log('Me subscribi');
        sails.sockets.join(req, 'empleado'+req.allParams().id+'watcher', function(err) {
            if (err) {
                return res.serverError(err);
            }
            return res.ok();
        });
    },

    refresh_token(req, res) {
        const auth_token = req.headers.authorization.split(' ');
        const oldDecoded = JWTService.token.decode(auth_token[1]);

        res.ok({
            token: JWTService.token.encode({id: oldDecoded.id})
        });
    },

    updatePass(req, res) {
        User.update(req.params.id, {password: req.allParams().password})
            .then(res.ok)
            .catch(res.negotiate);
    },

    updateRegId(req, res){
        User.update(req.params.id, { reg_id: req.allParams().reg_id})
            .then(res.ok)
            .catch(res.negotiate)
    }

};

