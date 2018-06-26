/// <reference types="node" />

import { PassThrough } from "stream";
import * as TransportStream from "winston-transport";
import { LoggerOptions } from "winston";


export interface DailyRotateFileOptions extends LoggerOptions {
    filename: string;
    datePattern: string;
    maxSize: string;
    maxFiles: string;
    zippedArchive: boolean;
}

export class DailyRotateFile extends TransportStream {
    name: string;
    options: any;
    logStream?: PassThrough;
    filename?: string;
    dirname?: string;

    constructor(options: DailyRotateFileOptions);
}