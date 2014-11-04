var Bottle = require('./bottle').Bottle;
var Ink    = require('./ink').Ink;

var Hamper = function(key){
  this.key = key;
  this.TYPES = {
    OBJECT: "object",
    ARRAY:   "array",
    NUMBER:  "number",
    BOOLEAN: "boolean",
    NULL :   "null"
  };
};

/**
 * @param Object doc, the object(key[s],value[s])to crypt.
 * @return Ink document, the crypted text with the type.
 */
Hamper.prototype.Roll = function(obj){
  var ink;
  var valuator = new Bottle(this.key);
  var typer    = new Bottle(this.key);

  if(obj instanceof Array){
    ink = new Ink(valuator.Push(JSON.stringify(obj)), typer.Push(this.TYPES.ARRAY));
  }else if(obj instanceof Number){
    ink = new Ink(valuator.Push(JSON.stringify(obj)), typer.Push(this.TYPES.NUMBER));
  }else if(obj === true || obj === false ){
    ink = new Ink(valuator.Push(obj.toString()), typer.Push(this.TYPES.BOOLEAN));
  }else if(obj === null){
    ink = new Ink(valuator.Push("null"), typer.Push(this.TYPES.NULL));
  }else{
    ink   = new Ink(valuator.Push(JSON.stringify(obj)), typer.Push(this.TYPES.OBJECT));
  }
  
  return ink;
};

/**
 * @param Object doc, the object(key[s],value[s])to crypt.
 * @return Object document, the revealed message.
 */
Hamper.prototype.Show = function(ink){
  var doc;
  var searcher  = new Bottle(this.key);
  var inspector = new Bottle(this.key);
  
  switch(searcher.Pull(ink.type)){
    case this.TYPES.OBJECT:
    case this.TYPES.ARRAY:
      doc = JSON.parse(inspector.Pull(ink.value));
      break;
    case this.TYPES.NUMBER:
      var inspector = new Bottle(this.key);
      doc = parseFloat(JSON.parse(inspector.Pull(ink.value)));
      break;
    case this.TYPES.BOOLEAN:
      switch(inspector.Pull(ink.value)){
        case "true":
          doc = true;
          break;
        case "false":
          doc = false;
          break;
      }
      break;
    case this.TYPES.NULL:
      doc = null;
      break;
  }

  return doc;
};

module.exports.Hamper = Hamper;