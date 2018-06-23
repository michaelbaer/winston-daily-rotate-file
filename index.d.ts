import { PassThrough } from "stream";
import * as semver from "semver";
import * as compat from "winston-compat";
import * as winston from "winston";

if (semver.major(winston.version) === 2) {
    import * as Transport from "winston-transport";
} else {
    import * as Transport from compat.Transport;
}


declare global {

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

    winston.transports.DailyRotateFile = DailyRotateFile;
}
