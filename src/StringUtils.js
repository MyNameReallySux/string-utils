/* ##########################
  Imports
########################## */

import { TypeUtils } from 'type-utils'
import { StringStream } from './StringStream'

/* ##########################
  Class Definition
########################## */

class StringUtils {
	static modifyPrototype() {
		StringUtils.STRING_PROTOTYPE = StringUtils.STRING_PROTOTYPE || String.prototype
		
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
		
		String.prototype.contains = function(test){
			return StringUtils.contains(this, test)
		}

		String.prototype.capitalize = function(){
			return StringUtils.capitalize(this)
		}

		String.prototype.toCamelCase = function(){
			return StringUtils.toCamelCase(this)
		}

		String.prototype.toSnakeCase = function(){
			return StringUtils.toSnakeCase(this)
		}

		String.prototype.toReadable = function(){
			return StringUtils.toReadable(this)
		}

		String.prototype.toWordArray = function(){
			return StringUtils.toWordArray(this)
		}
	}

	static resetPrototype() {
		String.prototype = StringUtils.STRING_PROTOTYPE
	}
	/**
	 * Returns if given string contains a specific phrase
	 * @param   {string}  string Haystack
	 * @param   {string}  phrase Needle
	 * @returns {boolean} If 'str' contains 'phrase'
	 */
	static contains(string, phrase){
		if(TypeUtils.isNull(string) || TypeUtils.isUndefined(string))
			throw Error('StringUtils.contains can not accept null or undefined values')
		return string.indexOf(phrase) > -1
	}
	static capitalize(string){
		if(!TypeUtils.isString(string)) 
			throw Error('StringUtils.capitalize can only accept strings')
		return string.charAt(0).toUpperCase() + string.substr(1)
	}
	static toCamelCase(string, capitalize = false){
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word, i) => {
				if(capitalize || i != 0){
					return StringUtils.capitalize(word)
				} else {
					return word.toLowerCase()
				}
			})
			.join('')
	}
	static toKebabCase(string, capitalize = false){
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word) => capitalize
				 ? StringUtils.capitalize(word)
				 : word.toLowerCase())
			.join('-')
	}
	static toSnakeCase(string, capitalize = false){
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word) => capitalize
				 ? StringUtils.capitalize(word)
				 : word.toLowerCase())
			.join('_')
	}
	static toReadable(string, separator = ' ', capitalize = false){
		if(!TypeUtils.isString(string))
			throw Error('StringUtils.toReadable\'s \'string\' property must be a string')
		if(!TypeUtils.isString(separator))
			throw Error('StringUtils.toReadable\'s \'separator\' property must be a string')
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word) => capitalize
				 ? StringUtils.capitalize(word)
				 : word.toLowerCase())
			.join(separator)
	}
	static toWordArray(string, pattern = /(?=[A-Z\s])/g){
		return string
			.replace(/[,:;_-]/g, ' ')
			.split(pattern)
			.map((word) => word.trim())
			.filter((word) => !TypeUtils.isEmptyString(word))
	}
}

let contains = 		StringUtils.contains,
	capitalize = 	StringUtils.capitalize,
	toCamelCase = 	StringUtils.toCamelCase,
	toSnakeCase = 	StringUtils.toSnakeCase,
	toReadable = 	StringUtils.toReadable,
	toWordArray = 	StringUtils.toWordArray

export default StringUtils
export {
	StringUtils, StringStream,
	contains, capitalize, toCamelCase, toSnakeCase, toReadable, toWordArray
}