var assert = require("assert");
var Bottle = require("../bottle").Bottle;
var key    = "d4d0bb98-b1f5-4b8f-a138-eb05a7c1497c";

describe('Bottle', function() {
  describe('Pull', function() {
    describe('string', function() {
      it('should return hex when have an empty key', function() {
        var pusher = new Bottle("");
        var puller = new Bottle("");
        var value  = "some important text";
        var push   = pusher.Push(value);
        var pull   = puller.Pull(push);
        assert.strictEqual( push, "033034a80a4409defbe0a2a02c7584b0f04f85fa17a28deef452ee09b752207e" );
        assert.strictEqual( pull, value);
      })
      it('should return hex when have a text', function() {
        var pusher = new Bottle(key);
        var puller = new Bottle(key);
        var value  = "some important text";
        var push   = pusher.Push(value);
        var pull   = puller.Pull(push);
        assert.strictEqual( push, "f907f317065f247544ab556dbb2338653f160c42f72f1dd7c515668be297a249" );
        assert.strictEqual( pull, value);
      })
      it('should return hex when have a large text', function() {
        var pusher = new Bottle(key);
        var puller = new Bottle(key);
        var value  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        var push   = pusher.Push(value);
        var pull   = puller.Pull(push);
        assert.strictEqual( push, "4e077497084a831bf11a0377c7cf6bc6574fbbfa6420a65339cd61bf0ef35d63576ab64b1c67d9e6aa21cd3b0647fc17fcb2249068e6aa193a5bcdf74ed5f57b59100ba18262df5341dde10f10b3226f3a050db0c80d1f59099089802995928e4f7ff6f244a2f960f5e78a50d3834beb246941378020ee090bc365f060301e12937c44771660e331e5ebbdd0efb1ddb09d38783a889595bd014962631a77d9a9e8f8cd887df59b6685f294d3dc8986a69a5fe73a0ef63c7e7a62dc18a7ed77bf5bebb57f277d18e92c77d4a776851bbdefb1aa796e2f2103d7593d2582fd511daf8f98ad1769998086ee99ce265b29f944e1edb40c7a0c129f60c20721b36e5719d086e901af7c649574729229b9b1631822742bff7821bf6eb2ad3a2a58ae1e909f134d420e4f7c3c328698eb08665e917f5fba0c80cf38ca1d35033d935d989f4841315076d811571603f5aab63af066da58c97871a166a90542e091bb991e3f4b3145375c85975a94b27a6e5fdd554e33170873a24f31556783b5ab7b5a38e38ad950e9ae92f70ce3a90ad48e03fd4b4c292483eae7fca3efcfcf0e5f1c4a7c3e81f5d4d4435503068346fcb9a7e064755a842e083494a93c498185b23a67" );
        assert.strictEqual( pull, value);
      })
    })
    describe('array', function() {
      it('should return hex when have an array', function() {
        var pusher = new Bottle(key);
        var value  = [];
        var push   = pusher.Push(value);
        assert.equal( push.match("Error: TypeError:")[0], "Error: TypeError:" );
      })
    })
    describe('boolean true', function() {
      it('should fail when have a true boolean', function() {
        var pusher = new Bottle(key);
        var value  = true;
        var push   = pusher.Push(value);
        assert.equal( push.match("Error: TypeError:")[0], "Error: TypeError:" );
      })
    })
    describe('boolean false', function() {
      it('should fail when have a false boolean', function() {
        var pusher = new Bottle(key);
        var value  = true;
        var push   = pusher.Push(value);
        assert.equal( push, "Error: TypeError: Not a string or buffer" );
      })
    })
    describe('number', function() {
      it('should fail when have a number', function() {
        var pusher = new Bottle(key);
        var value  = 0;
        var push   = pusher.Push(value);
        assert.equal( push.match("Error: TypeError:")[0], "Error: TypeError:" );
      })
    })
    describe('null', function() {
      it('should fail when have a null', function() {
        var pusher = new Bottle(key);
        var value  = null;
        var push   = pusher.Push(value);
        assert.equal( push, "Error: TypeError: Not a string or buffer" );
      })
    })
  })
})
