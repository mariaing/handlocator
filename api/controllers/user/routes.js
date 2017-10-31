/**
 * Route Mappings
 */

module.exports.routes = {

    'POST /user/authentication': {
        controller: 'user/Auth',
        action: 'authenticate',

        swagger: {
            methods: ['POST'],
            summary: 'autenticacion de usuario',
            responses: {
                200: {
                    description: 'OK',
                    schema: {
                        type: 'object',
                        properties: {
                            token: {type: 'string'},
                            user: {type: 'object'}
                        }
                    }
                }
            },
            parameters: [{
                in: 'body',
                name: 'datos de acceso',
                description: 'autenticacionn de usuario',
                required: true,
                schema: {
                    type: 'object',
                    required: ['username', 'password'],
                    properties: {
                        'username': {
                            type: 'string',
                            'format': 'string'
                        },
                        'password': {
                            type: 'string',
                            'format': 'string'
                        }
                    }
                }
            }]
        }
    },

    'GET /user/authentication/refresh': {
        controller: 'user/Auth',
        action: 'refresh_token',

        swagger: {
            methods: ['GET'],
            summary: 'renovar jwt',
            responses: {
                '200': {
                    description: 'OK',
                    schema: {
                        type: 'object',
                        properties: {
                            token: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    },

    'POST /user/registration': {
        controller: 'user/Auth',
        action: 'registro',

        swagger: {
            methods: ['POST'],
            summary: 'registrar usuario',
            responses: {
                201: {
                    description: 'User created',
                    schema: {
                        type: 'object',
                        properties: {
                            token: {type: 'string'},
                            user: {type: 'object'}
                        }
                    }
                }
            },
            parameters: [{
                in: 'body',
                name: 'Usuario',
                description: 'informacion del usuario',
                required: true,
                schema: {
                    type: 'object',
                    required: ['username', 'password', 'email', 'rol'],
                    properties: {
                        username: {type: 'string'},
                        password: {type: 'string'},
                        email: {type: 'string'},
                        rol: {type: 'string'},
                    }
                }
            }]
        }
    },

    'PUT /user/:id/updateContrasena/:password': {
        controller: 'user/Auth',
        action: 'updatePass',

        swagger: {
            methods: ['PUT'],
            summary: 'Actualiza la password del usuario',
            responses: {
                200: {
                    description: 'OK',
                }
            },
        }
    },

    'PUT /user/:id/updateRegId/:reg_id': {
        controller: 'user/Auth',
        action: 'updateRegId',

        swagger: {
            methods: ['PUT'],
            summary: 'Actualiza el reg_id del usuario al iniciar sesion desde la aplicacion movil',
            responses: {
                200: {
                    description: 'OK',
                }
            },
        }
    },

    'GET /empresa/:id/watcher': {
        controller: 'user/Auth',
        action: 'suscribe_watcher',

        swagger: {
            methods: ['GET'],
            summary: 'Suscribe a la escucha',
            responses: {
                200: {
                    description: 'OK',
                }
            },
        }
    },

    'GET /empleado/:id/watcher': {
        controller: 'user/Auth',
        action: 'suscribe_watcher_empleado',

        swagger: {
            methods: ['GET'],
            summary: 'Suscribe a la escucha',
            responses: {
                200: {
                    description: 'OK',
                }
            },
        }
    },
};
