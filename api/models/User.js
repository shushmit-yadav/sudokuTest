'use strict'
/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'user',
    fetchRecordsOnCreate: true,
    fetchRecordsOnUpdate: true,

    attributes: {

        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            isEmail: true,
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        }

    },

};

