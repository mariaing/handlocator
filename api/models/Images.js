const moment = require('moment');

module.exports = {

    attributes: {
        path: {type: 'string' },
        fecha: {type: 'datetime', defaultsTo: () => moment().format('YYYY-MM-DD HH:mm') },
        type: {type: 'string' },
        duracion_in_moment : {type: 'integer', defaultsTo: 0  },

        asignacion: {
            model: 'asignaciones'
        },
    },

    autoCreatedAt: true,
};