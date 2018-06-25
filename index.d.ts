/// <reference types="node" />

import { PassThrough } from "stream";
import * as TransportStream from "winston-transport";
import { LoggerOptions } from "winston";

declare namespace winston {

    interface DailyRotateFileOptions extends LoggerOptions {
        filename: string;
        datePattern: string;
        maxSize: string;
        maxFiles: string;
        zippedArchive: boolean;
    }

    interface DailyRotateFile extends TransportStream {
        name: string;
        options: any;
        logStream?: PassThrough;
        filename?: string;
        dirname?: string;
    
        new(options: winston.DailyRotateFileOptions): DailyRotateFile;
    }


    interface Transports {
        DailyRotateFile: DailyRotateFile;
    }
}

declare const winston: winston.Transports;
export = winston;