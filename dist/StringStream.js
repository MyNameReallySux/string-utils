"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stream = exports.StringStream = void 0;

var _StringUtils = require("./StringUtils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* ##########################
  Class Definition
########################## */
var StringStream = /*#__PURE__*/function () {
  _createClass(StringStream, null, [{
    key: "stream",

    /**
     * An alias that creates a new {@link StringStream} instance.
     * @param string string to start streaming
     */
    value: function stream(string) {
      return new StringStream(string);
    }
  }]);

  function StringStream(string) {
    _classCallCheck(this, StringStream);

    _defineProperty(this, "s", void 0);

    this.s = string;
  }
  /**
   * Returns the current instance value as a string.
   * @returns Current instance value
   */


  _createClass(StringStream, [{
    key: "get",
    value: function get() {
      return this.s + '';
    }
    /**
     * Capitalizes the first letter of the instance value and returns the instance.
     */

  }, {
    key: "capitalize",
    value: function capitalize() {
      this.s = _StringUtils.StringUtils.capitalize(this.s);
      return this;
    }
    /**
     * Converts the instance value to camel case and returns the instance.
     */

  }, {
    key: "toCamelCase",
    value: function toCamelCase() {
      this.s = _StringUtils.StringUtils.toCamelCase(this.s);
      return this;
    }
    /**
     * Converts the instance value to kebab case and returns the instance.
     */

  }, {
    key: "toKebabCase",
    value: function toKebabCase() {
      this.s = _StringUtils.StringUtils.toKebabCase(this.s);
      return this;
    }
    /**
     * Converts the instance value to snake case and returns the instance.
     */

  }, {
    key: "toSnakeCase",
    value: function toSnakeCase() {
      this.s = _StringUtils.StringUtils.toSnakeCase(this.s);
      return this;
    }
    /**
     * Converts the instance value to a readable string and returns the instance.
     */

  }, {
    key: "toReadable",
    value: function toReadable() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
      this.s = _StringUtils.StringUtils.toReadable(this.s, separator);
      return this;
    }
  }]);

  return StringStream;
}();

exports.StringStream = StringStream;
var stream = StringStream.stream;
exports.stream = stream;