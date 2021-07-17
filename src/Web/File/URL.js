"use strict";

export var createObjectURL = function (blob) {
  return function () {
    return URL.createObjectURL(blob);
  };
};

export var revokeObjectURL = function (url) {
  return function () {
    URL.revokeObjectURL(url);
  };
};
