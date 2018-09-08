'use strict';
/**
 * Controller.js
 * Base controller for all sails.js controllers. This just contains some common code
 * that every controller uses
 */

module.exports = {

    checkRequiredParams: function(req, params) {
        for (var i = 0; i < params.length; ++i) {
            var val = (req.param && typeof(req.param) === "function") ? req.param(params[i]) : req[params[i]];
            (typeof val ==='string')? (val = val.trim()):'';
            if (!val || val === '') {
                var err = new Error("Missing input parameter '" + params[i] + "'");
                if(params[i] == "Id" || params[i] == "id"){
                    sails.log.error(err.stack);
                }
                return err;
            }
        }
    }
    
};
