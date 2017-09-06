/* ##########################
  Imports
########################## */

import { StringUtils } from './StringUtils'

/* ##########################
  Class Definition
########################## */

class StringStream {
	static stream(string){
		return new StringStream(string)
	}
	
	constructor(string){
		this.s = string
	}
	/**
	 * Returns the current instance value as a string
	 * @returns {string} Current instance value
	 */
	get(){
		return this.s + ''
	}
	/**
	 * Returns if instance value contains a specific phrase
	 * @param   {string}  phrase Needle
	 * @returns {boolean} If 'this.value' contains 'phrase'
	 */
	contains(phrase){
		return StringUtils.contains(this.s, phrase)
	}
	capitalize(){
		this.s = StringUtils.capitalize(this.s)
		return this
	}
	toCamelCase(){
		this.s = StringUtils.toCamelCase(this.s)
		return this
	}
	toKebabCase(){
		this.s = StringUtils.toKebabCase(this.s)
		return this
	}
	toSnakeCase(){
		this.s = StringUtils.toSnakeCase(this.s)
		return this
	}
	toReadable(separator = ' '){
		this.s = StringUtils.toReadable(this.s, separator)
		return this
	}
	toWordArray(pattern = /(?=[A-Z ])/g){
		this.s = StringUtils.toWordArray(this.s, pattern)
		return this
	}
}

let stringStream = StringStream.stream

export default StringStream
export {
	StringStream,
	stream
}