'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stream = exports.StringStream = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* ##########################
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Imports
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ########################## */

var _StringUtils = require('./StringUtils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ##########################
  Class Definition
########################## */

var StringStream = function () {
	_createClass(StringStream, null, [{
		key: 'stream',
		value: function stream(string) {
			return new StringStream(string);
		}
	}]);

	function StringStream(string) {
		_classCallCheck(this, StringStream);

		this.s = string;
	}
	/**
  * Returns the current instance value as a string
  * @returns {string} Current instance value
  */


	_createClass(StringStream, [{
		key: 'get',
		value: function get() {
			return this.s + '';
		}
		/**
   * Returns if instance value contains a specific phrase
   * @param   {string}  phrase Needle
   * @returns {boolean} If 'this.value' contains 'phrase'
   */

	}, {
		key: 'contains',
		value: function contains(phrase) {
			return _StringUtils.StringUtils.contains(this.s, phrase);
		}
	}, {
		key: 'capitalize',
		value: function capitalize() {
			this.s = _StringUtils.StringUtils.capitalize(this.s);
			return this;
		}
	}, {
		key: 'toCamelCase',
		value: function toCamelCase() {
			this.s = _StringUtils.StringUtils.toCamelCase(this.s);
			return this;
		}
	}, {
		key: 'toKebabCase',
		value: function toKebabCase() {
			this.s = _StringUtils.StringUtils.toKebabCase(this.s);
			return this;
		}
	}, {
		key: 'toSnakeCase',
		value: function toSnakeCase() {
			this.s = _StringUtils.StringUtils.toSnakeCase(this.s);
			return this;
		}
	}, {
		key: 'toReadable',
		value: function toReadable() {
			var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';

			this.s = _StringUtils.StringUtils.toReadable(this.s, separator);
			return this;
		}
	}, {
		key: 'toWordArray',
		value: function toWordArray() {
			var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /(?=[A-Z ])/g;

			this.s = _StringUtils.StringUtils.toWordArray(this.s, pattern);
			return this;
		}
	}]);

	return StringStream;
}();

var stream = StringStream.stream;

exports.default = StringStream;
exports.StringStream = StringStream;
exports.stream = stream;