import _Promise from "@babel/runtime/core-js/promise";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.string.includes";
// import '@babel/polyfill'
"foobar".includes("foo");

var Person = function Person() {
  _classCallCheck(this, Person);
};

var a = new _Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});
a.then(function () {
  console.log('resolved.');
});
console.log('Hi');
