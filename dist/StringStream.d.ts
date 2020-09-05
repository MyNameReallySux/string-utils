export declare class StringStream {
    /**
     * An alias that creates a new {@link StringStream} instance.
     * @param string string to start streaming
     */
    static stream(string: string): StringStream;
    private s;
    private constructor();
    /**
     * Returns the current instance value as a string.
     * @returns Current instance value
     */
    get(): string;
    /**
     * Capitalizes the first letter of the instance value and returns the instance.
     */
    capitalize(): this;
    /**
     * Converts the instance value to camel case and returns the instance.
     */
    toCamelCase(): this;
    /**
     * Converts the instance value to kebab case and returns the instance.
     */
    toKebabCase(): this;
    /**
     * Converts the instance value to snake case and returns the instance.
     */
    toSnakeCase(): this;
    /**
     * Converts the instance value to a readable string and returns the instance.
     */
    toReadable(separator?: string): this;
}
export declare const stream: typeof StringStream.stream;
