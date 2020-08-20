/* ##########################
  Imports
########################## */

import { StringUtils } from './StringUtils'

/* ##########################
  Class Definition
########################## */

export class StringStream {
	/**
	 * An alias that creates a new {@link StringStream} instance.
	 * @param string string to start streaming
	 */
	public static stream(string: string){
		return new StringStream(string)
	}

	private s: string
	
	private constructor(string: string){
		this.s = string
	}

	/**
	 * Returns the current instance value as a string.
	 * @returns Current instance value
	 */
	public get(): string {
		return this.s + ''
	}

	/**
	 * Capitalizes the first letter of the instance value and returns the instance.
	 */
	public capitalize(): this {
		this.s = StringUtils.capitalize(this.s)
		return this
	}

	/**
	 * Converts the instance value to camel case and returns the instance.
	 */
	public toCamelCase(): this {
		this.s = StringUtils.toCamelCase(this.s)
		return this
	}

	/**
	 * Converts the instance value to kebab case and returns the instance.
	 */
	public toKebabCase(): this {
		this.s = StringUtils.toKebabCase(this.s)
		return this
	}

	/**
	 * Converts the instance value to snake case and returns the instance.
	 */
	public toSnakeCase(): this {
		this.s = StringUtils.toSnakeCase(this.s)
		return this
	}

	/**
	 * Converts the instance value to a readable string and returns the instance.
	 */
	public toReadable(separator = ' '): this {
		this.s = StringUtils.toReadable(this.s, separator)
		return this
	}
}

export const stream = StringStream.stream
