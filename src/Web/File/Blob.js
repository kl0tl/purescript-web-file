"use strict";

export var typeImpl = function (blob) { return blob.type; };

export var blobImpl = function (args) {
  return function (mediaType) {
    return new Blob(args, {type: mediaType});
  };
};

export var size = function (blob) { return blob.size; };

export var slice = function (contentType) {
  return function (start) {
    return function (end) {
      return function (blob) {
        return blob.slice(start, end, contentType);
      };
    };
  };
};
