var assert = require("assert");
var Hamper = require("../hamper").Hamper;
var key    = "d4d0bb98-b1f5-4b8f-a138-eb05a7c1497c";

describe('Hamper', function() {
  describe('Roll', function() {
    describe('object', function() {
      it('should return hex when have an object', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = {key :"value"};
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "7f4eee3c70cb5ed71e0cb08911edb2b3" );
        assert.strictEqual( roll.type, "51135135af296b3e534dac2ba6c0074a" );
        assert.deepEqual( show, value);
      })
    })
    describe('object', function() {
      it('should return hex when have an empty object', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = {};
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "c40f64d0c2b830b6536d358906fa92b8" );
        assert.strictEqual( roll.type, "51135135af296b3e534dac2ba6c0074a" );
        assert.deepEqual( show, value);
      })
    })
    describe('array', function() {
      it('should return hex when have an array', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = [0,1,0,1,0];
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "6a3233766115948141e115da731e28d4" );
        assert.strictEqual( roll.type, "9112ccb88f90d4ca5f1ded327a196904" );
        assert.deepEqual( show, value);
      })
    })
    describe('boolean', function() {
      it('should return hex when have a true boolean', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = true;
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "f7e5aec1182ad04857204519b6e4ec3c" );
        assert.strictEqual( roll.type, "cc9f7ef95fe2dee0c1210f93bb748102" );
        assert.strictEqual( show, value);
      })
    })
    describe('boolean', function() {
      it('should return hex when have a false boolean', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = false;
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "c8418b91d70b56885a90adaf8767b9dc" );
        assert.strictEqual( roll.type, "cc9f7ef95fe2dee0c1210f93bb748102" );
        assert.strictEqual( show, value);
      })
    })
    describe('number', function() {
      it('should return hex when have a number', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = 1;
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "192f2b4b553819b7579dd5cf435c8a7a" );
        assert.strictEqual( roll.type, "51135135af296b3e534dac2ba6c0074a" );
        assert.strictEqual( show, value);
      })
    })
    describe('float', function() {
      it('should return hex when have a number', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = 20.58;
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "9398d2af7e4d06b215e5d98772c36e94" );
        assert.strictEqual( roll.type, "51135135af296b3e534dac2ba6c0074a" );
        assert.strictEqual( show, value);
      })
    })
    describe('null', function() {
      it('should return hex when have a null', function() {
        var roller = new Hamper(key);
        var viewer = new Hamper(key);
        var value  = null;
        var roll   = roller.Roll(value);
        var show   = viewer.Show(roll);
        assert.strictEqual( roll.value, "3fbfdb6d83677063509cd85402e254a2" );
        assert.strictEqual( roll.type, "3fbfdb6d83677063509cd85402e254a2" );
        assert.strictEqual( show, value);
      })
    })
  })
})
