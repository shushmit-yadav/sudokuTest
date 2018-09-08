/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var Controller = require('../base/Controller.js');

module.exports = {
  
    create: function(req, res){
        var requiredParamsError = Controller.checkRequiredParams(req, ['name', 'email', 'password']);
        if(requiredParamsError){
            return res.badRequest(requiredParamsError);
        } else {
            var newUserObj = {
                'name': req.param('name'),
                'email': req.param('email'),
                'password': req.param('password')
            };

            
            sails.models.user.findOne({'email': newUserObj.email})
            .then(function(existingUser){
                if(_.isUndefined(existingUser)){
                    sails.models.user.create(newUserObj)
                    .then(function(newUserCreated){
                        return res.ok(newUserCreated);
                    })
                    .catch(function(err){
                        return res.serverError(err);
                    });
                } else {
                    return res.ok("User already exist with email - "+ newUserObj.email)
                }
            })
            .catch(function(err){
                return res.serverError(err);
            });

        }
    },

    login: function(req, res){

    },

    forgetPassword: function(req, res){

    },

    resetPassword: function(req, res){

    }

};