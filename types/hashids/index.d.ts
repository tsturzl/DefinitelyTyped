// Type definitions for Hashids.js 1.x
// Project: https://github.com/ivanakimov/hashids.node.js
// Definitions by: Paulo Cesar <https://github.com/pocesar/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'hashids' {

    export class Hashids {
        constructor(salt: string, minHashLength?: number, alphabet?: string);
        version: string;
        minAlphabetLength: number;
        sepDiv: number;
        guardDiv: number;
        errorAlphabetLength: string;
        errorAlphabetSpace: string;
        alphabet: string[];
        seps: string;
        minHashLength: number;
        salt: string;
        decode(hash: string): number[];
        encode(arg: number): string;
        encode(arg: number[]): string;
        encode(...args: number[]): string;
        encodeHex(str: string): string;
        decodeHex(hash: string): string;
        hash(input: number, alphabet: string): string;
        unhash(input: string[], alphabet: string): number;
    }
}
