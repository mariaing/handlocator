/**
 * Created by Jose M. Soto on 14/07/2017.
 */
module.exports.routes = {

    'POST /empresas': {
        controller: 'Empresas',
        action: 'create',

        swagger: {
            methods: ['POST'],
            summary: 'Guardado de empresa',
            responses: {
                201: {
                    schema: 'Empresas'
                }
            },
            parameters: [{
                in: 'body',
                name: 'Datos de Guardado',
                description: 'Guarda una empresa',
                required: true,
                schema: {
                    type: 'object',
                    required: ['nit', 'nombre_corto', 'nombre_largo', 'direccion', 'telefono'],
                    properties: {
                        'nit': {type: 'string'},
                        'nombre_corto': {type: 'string'},
                        'nombre_largo': {type: 'string'},
                        'direccion': {type: 'string'},
                        'telefono': {type: 'string'}
                    }
                }
            }]
        }
    },

    'GET /empresas': {
        controller: 'Empresas',
        action: 'find',

        swagger: {
            methods: ['GET'],
            summary: 'Obtiene todas las empresas',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },

    'GET /empresas/:id': {
        controller: 'Empresas',
        action: 'findOne',

        swagger: {
            methods: ['GET'],
            summary: 'Obtiene una empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },

    'GET /empresas/:id/conductores': {
        controller: 'Empresas',
        action: 'findEmpleados',

        swagger: {
            methods: ['GET'],
            summary: 'Obtiene los empleados de una empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },

    'PUT /empresas/:id': {
        controller: 'Empresas',
        action: 'update',

        swagger: {
            methods: ['GET'],
            summary: 'Actualiza una empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },

    'DELETE /empresas/:id':{
        controller: 'Empresas',
        action: 'destroy',

        swagger: {
            methods: ['DELETE'],
            summary: 'Elimina una empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },
    'POST /empresas/:id/logo':{
        controller: 'Empresas',
        action: 'saveLogo',

        swagger: {
            methods: ['POST'],
            summary: 'Guarda el logo de la empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },
    'GET /empresa/mensajes/empleado/:id':{
        controller: 'Empresas',
        action: 'getChatsEmpleado',

        swagger: {
            methods: ['GET'],
            summary: 'Guarda el logo de la empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },
    'POST /empresa/mensajes/empleado':{
        controller: 'Empresas',
        action: 'sendMessageEmpleado',

        swagger: {
            methods: ['POST'],
            summary: 'Guarda el logo de la empresa',
            responses: {
                200: {
                    description: 'OK'
                }
            }
        }
    },
};
