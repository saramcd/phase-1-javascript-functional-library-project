// Collection Functions (Arrays or Objects)

const myEach = function (collection, callback) {
  const values = Object.values(collection);
  for (const item of values) {
    callback(item);
  }
  return collection;
};

const myMap = function (collection, callback) {
  const values = Object.values(collection);
  const newArr = [];

  for (const element of values) {
    newArr.push(callback(element));
  }

  return newArr;
};

const myReduce = function (collection, callback, acc) {
  const values = Object.values(collection);
  let accum;
  if (!acc) {
    accum = values[0];
    for (let i = 1; i < values.length; i++) {
      accum = callback(accum, values[i], values);
    }
    return accum;
  } else {
    accum = acc;
    for (const element of values) {
      accum = callback(accum, element, values);
    }
    return accum;
  }
};

const myFind = (collection, predicate) => {
  const values = Object.values(collection);
  for (const value of values) {
    if (predicate(value)) {
      return value;
    }
  }
};

const myFilter = (collection, predicate) => {
  const values = Object.values(collection);
  const newArr = [];
  for (const value of values) {
    if (predicate(value)) {
      newArr.push(value);
    }
  }
  return newArr;
};

const mySize = (collection) => {
  const values = Object.values(collection);
  let len = 0;
  for (const value of values) {
    len += 1;
  }
  return len;
};

// Array Functions

const myFirst = (array, n) => {
  if (!n) {
    return array[0];
  } else return array.slice(0, n);
};

const myLast = (array, n) => {
  if (!n) {
    return array[array.length - 1];
  } else return array.slice(array.length - n, array.length);
};

// Object Functions
const myKeys = (object) => {
  let keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
};

const myValues = (object) => {
  let vals = [];
  for (const key in object) {
    vals.push(object[key]);
  }
  return vals;
};
