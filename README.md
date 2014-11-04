hamper
======

Crypto tool for Javascript Objects

install
====
````js
npm install hamper
````

how it works?
===
Implements 'crypto' module with 'aes256' method.
Keeps properties for string, number, boolean and null.
Just think in a way to send a message in a bottle but encapsulated into an Ink object.
Ink object knows how to return the hidden text.
Hamper uses JSON.stringify for 'object' and 'array'.

why to use this package?
===
-  When you have a text and you want to keep it secret.
-  To send data between servers over http.
-  To crypt your JSON database.

what is the security level?
===
Please read crypto documentation: http://nodejs.org/api/crypto.html

usage
===
````js
var Hamper = require('hamper').Hamper;
var my_key = "my precious key";
...
var my_crypt_function = function(){
  //One instance per task
  var roller = new Hamper(my_key);
  var hide_object = roller.Roll({name: "Hamper", work: "crypt"});
  return hide_object;
}

var my_decrypt_function = function(){
  //One instance per task
  var viewer = new Hamper(key);
  var show_object   = viewer.Show(roll);
  return show_object;
}

````

sample ouputs
===
````json
{"key" :"value"}
````
````js
"7f4eee3c70cb5ed71e0cb08911edb2b3"
````

test
===
````js
mocha
````
