"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toWordArray = exports.toReadable = exports.toSnakeCase = exports.toKebabCase = exports.toCamelCase = exports.capitalize = exports.contains = exports.StringUtils = void 0;

var _typeUtils = require("@beautiful-code/type-utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ##########################
  Class Definition
########################## */
var StringUtils = /*#__PURE__*/function () {
  function StringUtils() {
    _classCallCheck(this, StringUtils);
  }

  _createClass(StringUtils, null, [{
    key: "contains",

    /**
     * Returns if given string contains a specific phrase.
     * @param string Haystack
     * @param phrase Needle
     * @returns If 'str' contains 'phrase'
     */
    value: function contains(string, phrase) {
      if (_typeUtils.TypeUtils.isNull(string) || _typeUtils.TypeUtils.isUndefined(string)) throw Error('StringUtils.contains can not accept null or undefined values');
      return string.indexOf(phrase.toString()) > -1;
    }
    /**
     * Returns string with the first letter capitalized.
     * @param string String to be capitalized
     */

  }, {
    key: "capitalize",
    value: function capitalize(string) {
      if (!_typeUtils.TypeUtils.isString(string)) throw Error('StringUtils.capitalize can only accept strings');
      return string.charAt(0).toUpperCase() + string.substr(1);
    }
    /**
     * Converts the passed in string into a camel case string.
     * @param string string to convert
     * @param capitalize should capitalize words
     */

  }, {
    key: "toCamelCase",
    value: function toCamelCase(string) {
      var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return StringUtils.toWordArray(string).map(function (word) {
        return word.trim();
      }).map(function (word, i) {
        if (capitalize || i != 0) {
          return StringUtils.capitalize(word);
        } else {
          return word.toLowerCase();
        }
      }).join('');
    }
    /**
     * Converts the passed in string into a kebab case string.
     * @param string string to convert
     * @param capitalize should capitalize words
     */

  }, {
    key: "toKebabCase",
    value: function toKebabCase(string) {
      var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return StringUtils.toWordArray(string).map(function (word) {
        return word.trim();
      }).map(function (word) {
        return capitalize ? StringUtils.capitalize(word) : word.toLowerCase();
      }).join('-');
    }
    /**
     * Converts the passed in string into a snake case string.
     * @param string string to convert
     * @param capitalize should capitalize words
     */

  }, {
    key: "toSnakeCase",
    value: function toSnakeCase(string) {
      var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return StringUtils.toWordArray(string).map(function (word) {
        return word.trim();
      }).map(function (word) {
        return capitalize ? StringUtils.capitalize(word) : word.toLowerCase();
      }).join('_');
    }
    /**
     * Converts the passed in string into a readable string. This will attempt to remove
     * any formatting from camel case, snake case, or kebab case strings; and create a
     * set of words separated by spaces.
     * @param string string to convert
     * @param separator word separator, defaults to an empty space
     * @param capitalize should capitalize words
     */

  }, {
    key: "toReadable",
    value: function toReadable(string) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
      var capitalize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!_typeUtils.TypeUtils.isString(string)) throw Error('StringUtils.toReadable\'s \'string\' property must be a string');
      if (!_typeUtils.TypeUtils.isString(separator)) throw Error('StringUtils.toReadable\'s \'separator\' property must be a string');
      console.log(StringUtils.toWordArray(string));
      return StringUtils.toWordArray(string).map(function (word) {
        return word.trim();
      }).map(function (word) {
        return capitalize ? StringUtils.capitalize(word) : word.toLowerCase();
      }).join(separator);
    }
    /**
     * Converts the passed in string into a list of words. This will attempt to remove
     * any formatting from camel case, snake case, or kebab case strings; and create a
     * list of words.
     * @param string string to convert
     * @param pattern regex pattern to split words by
     */

  }, {
    key: "toWordArray",
    value: function toWordArray(string) {
      var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[\s]/g;
      var a = string.replace(/[,:;_-]/g, ' ');
      var b = a.replace(/([a-z])([A-Z])/g, '$1 $2');
      var c = b.replace(/([A-Z])([A-Z])/, '$1 $2');
      var d = c.split(pattern);
      var e = d.map(function (word) {
        return word.trim();
      });
      return string.trim().replace(/[,:;_-]/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z])/, '$1 $2').split(pattern).map(function (word) {
        return word.trim();
      }).filter(function (word) {
        return !_typeUtils.TypeUtils.isEmptyString(word);
      });
    }
  }]);

  return StringUtils;
}();

exports.StringUtils = StringUtils;
var contains = StringUtils.contains;
exports.contains = contains;
var capitalize = StringUtils.capitalize;
exports.capitalize = capitalize;
var toCamelCase = StringUtils.toCamelCase;
exports.toCamelCase = toCamelCase;
var toKebabCase = StringUtils.toKebabCase;
exports.toKebabCase = toKebabCase;
var toSnakeCase = StringUtils.toSnakeCase;
exports.toSnakeCase = toSnakeCase;
var toReadable = StringUtils.toReadable;
exports.toReadable = toReadable;
var toWordArray = StringUtils.toWordArray;
exports.toWordArray = toWordArray;