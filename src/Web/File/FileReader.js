"use strict";

export var fileReader = function () {
  return new FileReader();
};

export var error = function (fr) {
  return function () {
    return fr.error;
  };
};

export var readyStateImpl = function (fr) {
  return function () {
    return fr.readyState;
  };
};

export var result = function (fr) {
  return function () {
    return fr.result;
  };
};

export var abort = function (fr) {
  return function () {
    fr.abort();
  };
};

export var readAsText = function (blob) {
  return function (fr) {
    return function () {
      fr.readAsText(blob);
    };
  };
};

export var readAsArrayBuffer = function (blob) {
  return function (fr) {
    return function () {
      fr.readAsArrayBuffer(blob);
    };
  };
};

export var readAsDataURL = function (blob) {
  return function (fr) {
    return function () {
      fr.readAsDataURL(blob);
    };
  };
};
