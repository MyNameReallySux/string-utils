/* ##########################
  Imports
########################## */

import { TypeUtils } from '@beautiful-code/type-utils'

/* ##########################
  Class Definition
########################## */

export class StringUtils {
	/**
	 * Returns if given string contains a specific phrase.
	 * @param string Haystack
	 * @param phrase Needle
	 * @returns If 'str' contains 'phrase'
	 */
	static contains(string: string, phrase: string | number | boolean): boolean {
		if(TypeUtils.isNull(string) || TypeUtils.isUndefined(string))
			throw Error('StringUtils.contains can not accept null or undefined values')
		return string.indexOf(phrase.toString()) > -1
	}

	/**
	 * Returns string with the first letter capitalized.
	 * @param string String to be capitalized
	 */
	static capitalize(string: string): string {
		if(!TypeUtils.isString(string)) 
			throw Error('StringUtils.capitalize can only accept strings')
		return string.charAt(0).toUpperCase() + string.substr(1)
	}

	/**
	 * Converts the passed in string into a camel case string.
	 * @param string string to convert
	 * @param capitalize should capitalize words
	 */
	static toCamelCase(string: string, capitalize = false): string {
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

	/**
	 * Converts the passed in string into a kebab case string.
	 * @param string string to convert
	 * @param capitalize should capitalize words
	 */
	static toKebabCase(string: string, capitalize = false){
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word) => {
				if(capitalize) return StringUtils.capitalize(word)
				else return word.toLowerCase()
			})
			.join('-')
	}

	/**
	 * Converts the passed in string into a snake case string.
	 * @param string string to convert
	 * @param capitalize should capitalize words
	 */
	static toSnakeCase(string: string, capitalize = false){
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word) => {
				if(capitalize) return StringUtils.capitalize(word)
				else return word.toLowerCase()
			})
			.join('_')
	}

	/**
	 * Converts the passed in string into a readable string. This will attempt to remove
	 * any formatting from camel case, snake case, or kebab case strings; and create a
	 * set of words separated by spaces.
	 * @param string string to convert
	 * @param separator word separator, defaults to an empty space
	 * @param capitalize should capitalize words
	 */
	static toReadable(string: string, separator = ' ', capitalize = false): string {
		if(!TypeUtils.isString(string))
			throw Error('StringUtils.toReadable\'s \'string\' property must be a string')
		if(!TypeUtils.isString(separator))
			throw Error('StringUtils.toReadable\'s \'separator\' property must be a string')
		
		return StringUtils.toWordArray(string)
			.map((word) => word.trim())
			.map((word) => {
				if(capitalize) return StringUtils.capitalize(word)
				else return word.toLowerCase()
			})
			.join(separator)
	}

	/**
	 * Converts the passed in string into a list of words. This will attempt to remove
	 * any formatting from camel case, snake case, or kebab case strings; and create a
	 * list of words.
	 * @param string string to convert
	 * @param pattern regex pattern to split words by
	 */
	static toWordArray(string: string, pattern = /[\s]/g): string[] {
		return string
			.trim()
			.replace(/[,:;_-]/g, ' ')
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			.replace(/([A-Z])([A-Z])/, '$1 $2')
			.split(pattern)
			.map((word) => word.trim())
			.filter((word) => !TypeUtils.isEmptyString(word))
	}
}

export const contains = StringUtils.contains
export const capitalize = StringUtils.capitalize
export const toCamelCase = StringUtils.toCamelCase
export const toKebabCase = StringUtils.toKebabCase
export const toSnakeCase = StringUtils.toSnakeCase
export const toReadable = StringUtils.toReadable
export const toWordArray = StringUtils.toWordArray