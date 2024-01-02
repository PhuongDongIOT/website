import * as winston from 'winston';
import chalk from 'chalk';
import * as util from 'util';
import { formatDate } from '~/utils/excute_type/date.utils';

import { transports, format } from "winston";

export class Logger {

    myFormat:any  = winston.format.printf((info) => {
        return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
    });

    options: winston.LoggerOptions = {
        exitOnError: false,
        level: 'debug',
    };
    nowDate = new Date();
    stringToDate = formatDate(this.nowDate.toLocaleString(), '_');
    folderName: string = 'logs';
    fileName: string = `winston_log_${this.stringToDate}.log`;
    serviceName: string = 'WinstonLogFile';

    logger: winston.Logger;

    private name: string;

    private : any = {
        debug: chalk.gray,
        info: chalk.cyan, // (msg: string):string => { return msg; },
        warn: chalk.magenta,
        error: chalk.red
    };

    constructor(name: string) {
        this.options.format = winston.format.combine(
            winston.format((info) => {
                info.level = info.level.toUpperCase();

                return info;
            })(),
            // winston.format.colorize({ all: true }),
            winston.format.timestamp({ format: 'MMM DD hh:mm:ss' }),
            winston.format.label({ label: name }),
            winston.format.printf((info) => {
                return this.logprint(info);
            })
        );
        this.options.transports = [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf((info) => {
                    return this.logprint(info);
                })
            ),
        }),
        new transports.File({
            dirname: this.folderName,
            filename: this.fileName,
            format: format.combine(format.json()),
        }),
    ],

        this.logger = winston.createLogger(this.options);
        this.name = name;
    }

    static toString(msgs: any): string {
        if (typeof msgs === 'string') {
            return msgs;
        }

        const mm: any[] = [];

        for (const m of msgs) {
            mm.push(util.format(m));
        }

        return mm.join(' ');
    }

    public logprint(info: any): string {

        const colorize: any = chalk.bgCyan('Level');

        let logmsg: string = `${chalk.blue(`${info.timestamp}`)} [${chalk.blue(`${info.label}`)}] ${colorize}:: `;

        logmsg += chalk.blue(Logger.toString(info.label));

        return logmsg;
    }

    public static getLogger(name: string): Logger {
        return new Logger(name);
    }

    get logopts(): any {
        return this.options;
    }

    debug(format: any, ...params: any[]): void {
        this.logger.debug([format].concat(params));
    }

    info(format: any, ...params: any[]): void {
        this.logger.info([format].concat(params));
    }

    warn(format: any, ...params: any[]): void {
        this.logger.warn([format].concat(params));
    }

    error(format: any, ...params: any[]): void {
        this.logger.error([format].concat(params));
    }
}