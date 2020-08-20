import { expect } from 'chai'

import { TypeUtils } from '@beautiful-code/type-utils'
import { StringUtils } from '../src/StringUtils'

describe('StringUtils', () => {
	describe('#contains', () => {
		const TEST = {
			STRING: 'this is a test!',
			NUMBER: 'The #1 number, 2.0',
			BOOLEAN: 'this is true!'
		}
		
		const THROWS = [
			undefined, null
		]

		function testContains(string: string, phrase: string | number | boolean, expected = true){
			let type = TypeUtils.getType(phrase)
			let desc = expected ? 'contains\t' : 'does not contain'

			// 'this is a string' contains 			'string' 	{string}
			// 'this is a string' does not contain 	'thing' 	{string}
			it(`'${string}'\t${desc}\t'${phrase}'\t{${type}}: `, () => expect(StringUtils.contains(string, phrase)).equals(expected))
		}

		describe('returns true if', () => {
			testContains(TEST.STRING, 			'test')
			testContains(TEST.NUMBER, 			1)
			testContains(TEST.NUMBER, 			2.0)
			testContains(TEST.BOOLEAN,			true)
		})

		describe('returns false if', () => {
			testContains(TEST.STRING, 			'thing',		false)
			testContains(TEST.NUMBER, 			3,				false)
			testContains(TEST.NUMBER, 			7.5,			false)
			testContains(TEST.BOOLEAN, 			false,			false)
		})

		describe('throws an error if', () => {
			it(`'string' is undefined or null`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.capitalize(element as any)).throws()
				}
			})
		})
	})

	describe('#capitalize', () => {
		const TEST = {
			STRING: 'string',
			SENTENCE: 'this is a string',

			CAPITALIZED: 'String',
			SPACE: ' string',
			NUMBER: '1string',
			PERIOD: '.string'

		}
		const EXPECTED = {
			STRING: 'String',
			SENTENCE: 'This is a string',

			CAPITALIZED: 'String',
			SPACE: ' string',
			NUMBER: '1string',
			PERIOD: '.string'
		}
		const THROWS = [
			1, function(){}, [], {}, new Object(), undefined, null
		]

		function testCapitalize(string: string, expected: string){
			// 'string'
			it(`'${string}'`, () => expect(StringUtils.capitalize(string)).equals(expected))
		}

		describe('capitalizes first letter of', () => {
			testCapitalize(TEST.STRING, EXPECTED.STRING)
			testCapitalize(TEST.SENTENCE, EXPECTED.SENTENCE)

		})

		describe('has no effect on', () => {
			testCapitalize(TEST.CAPITALIZED, EXPECTED.CAPITALIZED)
			testCapitalize(TEST.SPACE, EXPECTED.SPACE)
			testCapitalize(TEST.NUMBER, EXPECTED.NUMBER)
			testCapitalize(TEST.PERIOD, EXPECTED.PERIOD)

		})

		describe('throws an error if', () => {
			it(`'string' is not a string`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.capitalize(element as any)).throws()
				}
			})
		})
	})

	describe('#toCamelCase', () => {
		const TEST = {
			SPACE: 'this is a string',
			COMMA: 'this, is, a, string',
			SNAKECASE: 'this_is_a_string',
			KEBABCASE: 'this-is-a-string'
		}
		const EXPECTED = {
			LOWERCASE: 'thisIsAString',
			UPPERCASE: 'ThisIsAString',
		}
		const THROWS = [
			1, function(){}, [], {}, new Object(), undefined, null
		]

		function testToCamelCase(string: string, expected: string, capitalize = false){
			// 'a string' to 'aString'
			it(`'${string}'\tto\t'${expected}'`, () => expect(StringUtils.toCamelCase(string, capitalize)).equals(expected))
		}

		describe('converts', () => {
			testToCamelCase(TEST.SPACE, EXPECTED.LOWERCASE)
			testToCamelCase(TEST.COMMA, EXPECTED.LOWERCASE)
			testToCamelCase(TEST.KEBABCASE, EXPECTED.LOWERCASE)
			testToCamelCase(TEST.SNAKECASE, EXPECTED.LOWERCASE)
		})
		describe('converts and capitalizes first letter', () => {
			testToCamelCase(TEST.SPACE, EXPECTED.UPPERCASE, true)
			testToCamelCase(TEST.COMMA, EXPECTED.UPPERCASE, true)
			testToCamelCase(TEST.KEBABCASE, EXPECTED.UPPERCASE, true)
			testToCamelCase(TEST.SNAKECASE, EXPECTED.UPPERCASE, true)
		})
		describe('throws an error if', () => {
			it(`'string' is not a string`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.toCamelCase(element as any)).throws()
				}
			})
		})
	})

	describe('#toKebabCase', () => {
		const TEST = {
			SPACE: 'this is a string',
			COMMA: 'this, is, a, string',
			CAMELCASE: 'thisIsAString ',
			SNAKECASE: 'this_is_a_string'
		}
		const EXPECTED = {
			LOWERCASE: 'this-is-a-string',
			UPPERCASE: 'This-Is-A-String'
		}
		const THROWS = [
			1, function(){}, [], {}, new Object(), undefined, null
		]

		function testToKebabCase(string: string, expected: string, capitalize = false){
			// 'a string' to 'a-string'
			it(`'${string}'\tto\t'${expected}'`, () => expect(StringUtils.toKebabCase(string, capitalize)).equals(expected))
		}
		describe('converts', () => {
			testToKebabCase(TEST.SPACE, EXPECTED.LOWERCASE)
			testToKebabCase(TEST.COMMA, EXPECTED.LOWERCASE)
			testToKebabCase(TEST.CAMELCASE, EXPECTED.LOWERCASE)
			testToKebabCase(TEST.SNAKECASE, EXPECTED.LOWERCASE)
		})
		describe('converts and capitalizes each word', () => {
			testToKebabCase(TEST.SPACE, EXPECTED.UPPERCASE, true)
			testToKebabCase(TEST.COMMA, EXPECTED.UPPERCASE, true)
			testToKebabCase(TEST.CAMELCASE, EXPECTED.UPPERCASE, true)
			testToKebabCase(TEST.SNAKECASE, EXPECTED.UPPERCASE, true)
		})
		describe('throws an error if', () => {
			it(`'string' is not a string`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.toKebabCase(element as any)).throws()
				}
			})
		})
	})

	describe('#toSnakeCase', () => {
		const TEST = {
			SPACE: 'this is a string',
			COMMA: 'this, is, a, string',
			CAMELCASE: 'thisIsAString ',
			KEBABCASE: 'this-is-a-string'
		}
		const EXPECTED = {
			LOWERCASE: 'this_is_a_string',
			UPPERCASE: 'This_Is_A_String'
		}
		const THROWS = [
			1, function(){}, [], {}, new Object(), undefined, null
		]

		function testToSnakeCase(string: string, expected: string, capitalize = false){
			// 'a string' to 'a_string'
			it(`'${string}'\tto\t'${expected}'`, () => expect(StringUtils.toSnakeCase(string, capitalize)).equals(expected))
		}

		describe('converts', () => {
			testToSnakeCase(TEST.SPACE, EXPECTED.LOWERCASE)
			testToSnakeCase(TEST.COMMA, EXPECTED.LOWERCASE)
			testToSnakeCase(TEST.CAMELCASE, EXPECTED.LOWERCASE)
			testToSnakeCase(TEST.KEBABCASE, EXPECTED.LOWERCASE)
		})
		describe('converts and capitalizes each word', () => {
			testToSnakeCase(TEST.SPACE, EXPECTED.UPPERCASE, true)
			testToSnakeCase(TEST.COMMA, EXPECTED.UPPERCASE, true)
			testToSnakeCase(TEST.CAMELCASE, EXPECTED.UPPERCASE, true)
			testToSnakeCase(TEST.KEBABCASE, EXPECTED.UPPERCASE, true)
		})
		describe('throws an error if', () => {
			it(`'string' is not a string`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.toSnakeCase(element as any)).throws()
				}
			})
		})
	})
	
	describe('#toReadable', () => {
		const TEST = {
			COMMA: 'this, is, a, string',
			CAMELCASE: 'thisIsAString ',
			KEBABCASE: 'this-is-a-string',
			SNAKECASE: 'this_is_a_string',
			TAB: 'this\tis\ta\tstring'
		}
		
		const EXPECTED = {
			SPACE: 'this is a string',
			COMMA: 'this,is,a,string',
			TAB: 'this\tis\ta\tstring'
		}
		
		const THROWS = [
			1, function(){}, [], {}, new Object(), null
		]
		function testToReadable(string: string, expected: string, separator?: Optional<string>){
			// 'a_string' to 'a string'
			it(`'${string}'\tto\t'${expected}'`, () => expect(StringUtils.toReadable(string, separator)).equals(expected))
		}
		
		describe('converts (separated by a space)', () => {
			testToReadable(TEST.COMMA, EXPECTED.SPACE)
			testToReadable(TEST.CAMELCASE, EXPECTED.SPACE)
			testToReadable(TEST.KEBABCASE, EXPECTED.SPACE)
			testToReadable(TEST.SNAKECASE, EXPECTED.SPACE)
			testToReadable(TEST.TAB, EXPECTED.SPACE)
		})
		
		describe('converts (separated by a comma)', () => {
			testToReadable(TEST.COMMA, EXPECTED.COMMA, ',')
			testToReadable(TEST.CAMELCASE, EXPECTED.COMMA, ',')
			testToReadable(TEST.KEBABCASE, EXPECTED.COMMA, ',')
			testToReadable(TEST.SNAKECASE, EXPECTED.COMMA, ',')
			testToReadable(TEST.TAB, EXPECTED.COMMA, ',')
		})
		
		describe('converts (separated by a tab)', () => {
			testToReadable(TEST.COMMA, EXPECTED.TAB, '\t')
			testToReadable(TEST.CAMELCASE, EXPECTED.TAB, '\t')
			testToReadable(TEST.KEBABCASE, EXPECTED.TAB, '\t')
			testToReadable(TEST.SNAKECASE, EXPECTED.TAB, '\t')
			testToReadable(TEST.TAB, EXPECTED.TAB, '\t')
		})
		
		describe('converts (undefined will be converted to space)', () => {
			testToReadable(TEST.COMMA, EXPECTED.SPACE, undefined)
			testToReadable(TEST.CAMELCASE, EXPECTED.SPACE, undefined)
			testToReadable(TEST.KEBABCASE, EXPECTED.SPACE, undefined)
			testToReadable(TEST.SNAKECASE, EXPECTED.SPACE, undefined)
			testToReadable(TEST.TAB, EXPECTED.SPACE, undefined)
		})
		
		describe('throws an error if', () => {
			it(`'string' is not a string`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.toReadable(element as any)).throws()
				}
			})
			
			it(`'separator' is not a string, (excluding undefined)`, () => {
				for(let element of THROWS){
					expect(() => StringUtils.toReadable(TEST.COMMA, element as any)).throws()
				}
			})
		})
	})
	
	describe('#toWordArray', () => {
		const TEST = {
			ONE: 'This             ',
			TWO: 'This is          ',
			THREE: 'This is a       ',
			FOUR: 'This is a string',
			
			SPACE: 'this is a string',
			COMMA: 'this, is, a, string',
			CAMELCASE: 'thisIsAString ',
			KEBABCASE: 'this-is-a-string',
			SNAKECASE: 'this_is_a_string',
			TAB: 'this\tis\ta\tstring'
		}
		
		const EXPECTED = {
			ONE: ['This'],
			TWO: ['This', 'is'],
			THREE: ['This', 'is', 'a'],
			FOUR: ['This', 'is', 'a', 'string'],
			
			ARRAY: ['this', 'is', 'a', 'string'],
			CAMELCASE: ['this', 'Is', 'A', 'String']
		}
		
		function testToWordArray(string: string, expected: string[]){
			let expectedStr = expected.reduce((string, element) => {
				return string += `'${element}', `
			}, '')
			
			expectedStr = expectedStr.slice(0, expectedStr.length - 2)
			
			it(`'${string}'\tto\t'[${expectedStr}]' (of length '${expected.length}')`, () => {
				let test = StringUtils.toWordArray(string)
				expect(test.length).equals(expected.length)
				expect(test).deep.equals(expected)
				
			})
		}
		
		describe('handles different lengths', () => {
			testToWordArray(TEST.ONE, EXPECTED.ONE)
			testToWordArray(TEST.TWO, EXPECTED.TWO)
			testToWordArray(TEST.THREE, EXPECTED.THREE)
			testToWordArray(TEST.FOUR, EXPECTED.FOUR)
		})
		
		describe('handles different separators', () => {
			testToWordArray(TEST.SPACE, EXPECTED.ARRAY)
			testToWordArray(TEST.COMMA, EXPECTED.ARRAY)
			testToWordArray(TEST.CAMELCASE, EXPECTED.CAMELCASE)
			testToWordArray(TEST.KEBABCASE, EXPECTED.ARRAY)
			testToWordArray(TEST.SNAKECASE, EXPECTED.ARRAY)
			testToWordArray(TEST.TAB, EXPECTED.ARRAY)
		})
	})
})