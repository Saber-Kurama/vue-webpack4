// import '@babel/polyfill'
"foobar".includes("foo")
class Person {}

let a = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});

a.then(function () {
  console.log('resolved.');
});

console.log('Hi');
