/// <reference types="node" />

import { PassThrough } from "stream";
import * as semver from "semver";
import * as compat from "winston-compat";

if (semver.major(winston.version) === 2) {
    import * as Transport from "winston-transport";
} else {
    import * as Transport from compat.Transport;
}

declare module 'winston-daily-rotate-file' {

    declare interface LoggerDefaults {
        [x: string]: any;
        json: boolean;
        colorice: boolean;
        eol: string;
        logstash: any;
        prettyPrint: boolean;
        label: string;
        stringify: boolean;
        depth: any;
        showLevel: boolean;
        timestamp(): string;
    }

    declare class DailyRotateFile extends Transport {
        name: string;
        options: any;
        logStream?: PassThrough;
        filename?: string;
        dirname?: string;
    
        constructor(options: any);
    
        close(): void;
        query(options, callback): void;
    }

    export = DailyRotateFile;
}
