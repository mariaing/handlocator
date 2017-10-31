/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username  : { type: 'string', required: true, unique: true},
    password  : { type: 'string', required: true },
    email     : { type: 'email', size: 40 },
    rol       : { type: 'string', required: true },
    reg_id    : { type: 'string'},

    toJSON() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
  },

  autoCreatedAt: true,
  autoUpdatedAt: true,

  beforeUpdate(values, next) {
    if (false === values.hasOwnProperty('password')) return next();
    if (/^\$2[aby]\$[0-9]{2}\$.{53}$/.test(values.password)) return next();

    return HashService.bcrypt.hash(values.password)
      .then(hash => {
        values.password = hash;
        next();
      })
      .catch(next);
  },

  beforeCreate(values, next) {
    if (false === values.hasOwnProperty('password')) return next();
    return HashService.bcrypt.hash(values.password)
      .then(hash => {
        values.password = hash;
        next();
      })
      .catch(next);
  }
};

