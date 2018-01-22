import { expect } from 'chai'

import { TypeUtils } from '@beautiful-code/type-utils'
import { StringStream } from '../src/StringStream'

describe('StringStream', () => {
	describe('#stream', () => {
		describe('handles complex string transformations', () => {
			let stream
			beforeEach(() => {
				stream = StringStream.stream('this is a string')
			})
			it(`#toCamelCase -> #capitalize`, () => expect(stream.toCamelCase().capitalize().get()).equals(`ThisIsAString`))
			it(`#toSnakeCase -> #capitalize`, () => expect(stream.toSnakeCase().capitalize().get()).equals(`This_is_a_string`))
			it(`#toKebabCase -> #capitalize`, () => expect(stream.toKebabCase().capitalize().get()).equals(`This-is-a-string`))
		})
	})
})