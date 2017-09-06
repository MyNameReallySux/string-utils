'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toWordArray = exports.toReadable = exports.toSnakeCase = exports.toCamelCase = exports.capitalize = exports.contains = exports.StringStream = exports.StringUtils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* ##########################
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Imports
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ########################## */

var _typeUtils = require('@beautiful-code/type-utils');

var _StringStream = require('./StringStream');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ##########################
  Class Definition
########################## */

var StringUtils = function () {
	function StringUtils() {
		_classCallCheck(this, StringUtils);
	}

	_createClass(StringUtils, null, [{
		key: 'modifyPrototype',
		value: function modifyPrototype() {
			StringUtils.STRING_PROTOTYPE = StringUtils.STRING_PROTOTYPE || String.prototype;

			/*
   let staticMethods = Object.getOwnPropertyNames(StringUtils)
   for(let { key, value } of staticMethods){
   	console.log(`${key}: ${value}`)
   }
   
   let classMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(StringUtils))
   for(let { key, value } of classMethods){
   	console.log(`${key}: ${value}`)
   }
   */

			String.prototype.contains = function (test) {
				return StringUtils.contains(this, test);
			};

			String.prototype.capitalize = function () {
				return StringUtils.capitalize(this);
			};

			String.prototype.toCamelCase = function () {
				return StringUtils.toCamelCase(this);
			};

			String.prototype.toSnakeCase = function () {
				return StringUtils.toSnakeCase(this);
			};

			String.prototype.toReadable = function () {
				return StringUtils.toReadable(this);
			};

			String.prototype.toWordArray = function () {
				return StringUtils.toWordArray(this);
			};
		}
	}, {
		key: 'resetPrototype',
		value: function resetPrototype() {
			String.prototype = StringUtils.STRING_PROTOTYPE;
		}
		/**
   * Returns if given string contains a specific phrase
   * @param   {string}  string Haystack
   * @param   {string}  phrase Needle
   * @returns {boolean} If 'str' contains 'phrase'
   */

	}, {
		key: 'contains',
		value: function contains(string, phrase) {
			if (_typeUtils.TypeUtils.isNull(string) || _typeUtils.TypeUtils.isUndefined(string)) throw Error('StringUtils.contains can not accept null or undefined values');
			return string.indexOf(phrase) > -1;
		}
	}, {
		key: 'capitalize',
		value: function capitalize(string) {
			if (!_typeUtils.TypeUtils.isString(string)) throw Error('StringUtils.capitalize can only accept strings');
			return string.charAt(0).toUpperCase() + string.substr(1);
		}
	}, {
		key: 'toCamelCase',
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
	}, {
		key: 'toKebabCase',
		value: function toKebabCase(string) {
			var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			return StringUtils.toWordArray(string).map(function (word) {
				return word.trim();
			}).map(function (word) {
				return capitalize ? StringUtils.capitalize(word) : word.toLowerCase();
			}).join('-');
		}
	}, {
		key: 'toSnakeCase',
		value: function toSnakeCase(string) {
			var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			return StringUtils.toWordArray(string).map(function (word) {
				return word.trim();
			}).map(function (word) {
				return capitalize ? StringUtils.capitalize(word) : word.toLowerCase();
			}).join('_');
		}
	}, {
		key: 'toReadable',
		value: function toReadable(string) {
			var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
			var capitalize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (!_typeUtils.TypeUtils.isString(string)) throw Error('StringUtils.toReadable\'s \'string\' property must be a string');
			if (!_typeUtils.TypeUtils.isString(separator)) throw Error('StringUtils.toReadable\'s \'separator\' property must be a string');
			return StringUtils.toWordArray(string).map(function (word) {
				return word.trim();
			}).map(function (word) {
				return capitalize ? StringUtils.capitalize(word) : word.toLowerCase();
			}).join(separator);
		}
	}, {
		key: 'toWordArray',
		value: function toWordArray(string) {
			var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /(?=[A-Z\s])/g;

			return string.replace(/[,:;_-]/g, ' ').split(pattern).map(function (word) {
				return word.trim();
			}).filter(function (word) {
				return !_typeUtils.TypeUtils.isEmptyString(word);
			});
		}
	}]);

	return StringUtils;
}();

var contains = StringUtils.contains,
    capitalize = StringUtils.capitalize,
    toCamelCase = StringUtils.toCamelCase,
    toSnakeCase = StringUtils.toSnakeCase,
    toReadable = StringUtils.toReadable,
    toWordArray = StringUtils.toWordArray;

exports.default = StringUtils;
exports.StringUtils = StringUtils;
exports.StringStream = _StringStream.StringStream;
exports.contains = contains;
exports.capitalize = capitalize;
exports.toCamelCase = toCamelCase;
exports.toSnakeCase = toSnakeCase;
exports.toReadable = toReadable;
exports.toWordArray = toWordArray;