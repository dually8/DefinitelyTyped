// Type definitions for jsSHA
// Project: https://github.com/Caligatio/jsSHA
// Definitions by: David Li <https://github.com/randombk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module jsSHA {
    export interface OutputFormatOptions {
        outputUpper : boolean;
        b64Pad : string;
    }

    export interface jsSHA {
        /**
         * jsSHA is the workhorse of the library.  Instantiate it with the string to
         * be hashed as the parameter
         *
         * @constructor
         * @this {jsSHA}
         * @param {string} srcString The string to be hashed
         * @param {string} inputFormat The format of srcString, HEX, TEXT, B64, or BYTES
         * @param {string=} encoding The text encoding to use to encode the source
         *   string
         */
        new (srcString:string, inputFormat:string, options?:any):jsSHA;

        /**
         * Returns the desired SHA hash of the string specified at instantiation
         * using the specified parameters
         *
         * @param {string} variant The desired SHA variant (SHA-1, SHA-224,
         *   SHA-256, SHA-384, or SHA-512)
         * @param {string} format The desired output formatting (B64, HEX, or BYTES)
         * @param {number=} numRounds The number of rounds of hashing to be
         *   executed
         * @param {{outputUpper : boolean, b64Pad : string}=} outputFormatOpts
         *   Hash list of output formatting options
         * @return {string} The string representation of the hash in the format
         *   specified
         */
        getHash(variant:string, format:string, numRounds?:number, outputFormatOpts?:OutputFormatOptions):string;

        /**
         * Returns the desired HMAC of the string specified at instantiation
         * using the key and variant parameter
         *
         * @param {string} key The key used to calculate the HMAC
         * @param {string} inputFormat The format of key, HEX, TEXT, B64, or BYTES
         * @param {string} variant The desired SHA variant (SHA-1, SHA-224,
         *   SHA-256, SHA-384, or SHA-512)
         * @param {string} outputFormat The desired output formatting
         *   (B64, HEX, or BYTES)
         * @param {{outputUpper : boolean, b64Pad : string}=} outputFormatOpts
         *   associative array of output formatting options
         * @return {string} The string representation of the hash in the format
         *   specified
         */
        getHMAC(key:string, inputFormat:string, variant:string, outputFormat:string, outputFormatOpts?:OutputFormatOptions):string;

        /**
         *      BELOW ARE THE UPDATED TYPED DEFINITIONS AS OF 06/15/2015
         *      YOU'RE WELCOME :)
         *      - CJ Coffey
         *
         *      PS: Feel free to add to it/update the rest.
         *      https://github.com/Caligatio/jsSHA
         */

        /**
         * @constructor
         * @this{jsSHA}
         * @param {string} variant The desired SHA variant (SHA-1, SHA-224,
         *   SHA-256, SHA-384, or SHA-512)
         * @param {string} inputFormat The format of key, HEX, TEXT, B64, or BYTES
         */
        new (variant: string, inputFormat: string): jsSHA;

        /**
         * Gives jsSHA object a string to work on.
         * @param {string} srcString The string to be hashed
         */
        update(srcString: string);

        /**
         * Returns the desired SHA hash of the string specified at instantiation
         * using the specified parameters
         *
         * @param {string} outputFormat The format of key, HEX, B64, or BYTES
         * @return {string} The string representation of the hash in the format
         *   specified
         */
        getHash(outputFormat: string): string;
    }
}

declare var jsSHA: jsSHA.jsSHA;
declare module 'jssha' {
    export = jsSHA;
}
