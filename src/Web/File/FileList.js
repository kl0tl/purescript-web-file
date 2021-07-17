"use strict";

export var length = function (fileList) { return fileList.length; };

export var _item = function (index) {
  return function (fileList) {
    return fileList.item(index);
  };
};
