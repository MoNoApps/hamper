/**
 * This is a model to store the value and the type of a crypted object. 
 *
 * @param String value, crypted value.
 * @param String type, crypted type of object
 */
var Ink   = function(value, type){
  this.value = value;
  this.type  = type;
};

module.exports.Ink = Ink;