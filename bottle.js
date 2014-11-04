var crypto = require("crypto");
var Ink    = require("./ink").Ink;

/**
 * The object to store and return the objects.
 *
 * @param String key, is the passphrase.
 * @param boolean log, enable errors log.
 */
var Bottle   = function(key){
  this.cipher   = crypto.createCipher("aes256", key);
  this.decipher = crypto.createDecipher("aes256", key);
  this.TYPES = {
    OBJECT: "object",
    ARRAY:   "array",
    NUMBER:  "number",
    BOOLEAN: "boolean",
    NULL :   "null"
  };
};

/**
 * @param String text, text to crypt.
 * @return String draft, the crypted text.
 */
Bottle.prototype.Push = function(obj){
  var draft = [];
  try{
    draft.push(this.cipher.update(obj, "utf8", "hex"));
    draft.push(this.cipher.final("hex"));
  }catch(e){
    return "Error: " + e;
  }
  return draft.join("");
};

/**
 * @param String text, text to crypt.
 * @return String draft, the crypted text.
 */
Bottle.prototype.Pull = function(text){
  var draft = [];
  try{
    draft.push(this.decipher.update(text, "hex", "utf8"));
    draft.push(this.decipher.final("utf8"));
  }catch(e){
    return "Error: " + e;
  }
  return draft.join("");
};


module.exports.Bottle = Bottle;
