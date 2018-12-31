"use strict";

var hello = {
  wow: helloWorld = function (_helloWorld) {
    function helloWorld() {
      return _helloWorld.apply(this, arguments);
    }

    helloWorld.toString = function () {
      return _helloWorld.toString();
    };

    return helloWorld;
  }(function () {
    return helloWorld();
  })

};
module.exports = hello;