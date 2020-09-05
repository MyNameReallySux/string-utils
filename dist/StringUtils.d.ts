export declare class StringUtils {
    /**
     * Returns if given string contains a specific phrase.
     * @param string Haystack
     * @param phrase Needle
     * @returns If 'str' contains 'phrase'
     */
    static contains(string: string, phrase: string | number | boolean): boolean;
    /**
     * Returns string with the first letter capitalized.
     * @param string String to be capitalized
     */
    static capitalize(string: string): string;
    /**
     * Converts the passed in string into a camel case string.
     * @param string string to convert
     * @param capitalize should capitalize words
     */
    static toCamelCase(string: string, capitalize?: boolean): string;
    /**
     * Converts the passed in string into a kebab case string.
     * @param string string to convert
     * @param capitalize should capitalize words
     */
    static toKebabCase(string: string, capitalize?: boolean): string;
    /**
     * Converts the passed in string into a snake case string.
     * @param string string to convert
     * @param capitalize should capitalize words
     */
    static toSnakeCase(string: string, capitalize?: boolean): string;
    /**
     * Converts the passed in string into a readable string. This will attempt to remove
     * any formatting from camel case, snake case, or kebab case strings; and create a
     * set of words separated by spaces.
     * @param string string to convert
     * @param separator word separator, defaults to an empty space
     * @param capitalize should capitalize words
     */
    static toReadable(string: string, separator?: string, capitalize?: boolean): string;
    /**
     * Converts the passed in string into a list of words. This will attempt to remove
     * any formatting from camel case, snake case, or kebab case strings; and create a
     * list of words.
     * @param string string to convert
     * @param pattern regex pattern to split words by
     */
    static toWordArray(string: string, pattern?: RegExp): string[];
}
export declare const contains: typeof StringUtils.contains;
export declare const capitalize: typeof StringUtils.capitalize;
export declare const toCamelCase: typeof StringUtils.toCamelCase;
export declare const toKebabCase: typeof StringUtils.toKebabCase;
export declare const toSnakeCase: typeof StringUtils.toSnakeCase;
export declare const toReadable: typeof StringUtils.toReadable;
export declare const toWordArray: typeof StringUtils.toWordArray;
