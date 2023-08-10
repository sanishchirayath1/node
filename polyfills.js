/* Polyfills for ES6 array methods */

// Nullify the forEach method to test the polyfill
Array.prototype.forEach = null;

const array = [1, 2, 3];

array.forEach((item, index) => {
    console.log(item, index);
}); /* TypeError: array.forEach is not a function */

// Polyfill for ForEach
Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

array.forEach((item, index) => {
  console.log(item, index);
}); 
// 1 0
// 2 1
// 3 2


Array.prototype.map = null;
Array.prototype.filter = null;
Array.prototype.reduce = null;
Array.prototype.every = null;
Array.prototype.some = null;
Array.prototype.find = null;

// Polyfill for map
Array.prototype.map = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Polyfill for filter
Array.prototype.filter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// Polyfill for reduce
Array.prototype.reduce = function (callback, initialValue) {
  let accumulator = initialValue || 0;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Polyfill for every
Array.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// Polyfill for some
Array.prototype.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// Polyfill for find
Array.prototype.find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
