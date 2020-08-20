"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StringUtils = require("./StringUtils");

Object.keys(_StringUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StringUtils[key];
    }
  });
});

var _StringStream = require("./StringStream");

Object.keys(_StringStream).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StringStream[key];
    }
  });
});