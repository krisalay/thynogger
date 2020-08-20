/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import { config as configureEnv } from "dotenv";
configureEnv();

import { logger } from "./settings/winston";

interface IInfoObj {
  data: any;
}

interface IErrorObj {
  data?: any;
  error: any;
}

interface IWarnObj {
  data: any;
}
interface IDebugObj {
  data: any;
}

export class Thynogger {
  static info(message: string, obj?: IInfoObj): void {
    if (obj) {
      logger.log("info", message, { data: obj.data || null });
    } else {
      logger.log("info", message);
    }
  }
  static error(message: string, obj?: IErrorObj): void {
    if (obj) {
      logger.log("error", message, { error: obj.error || null, data: obj.data || null });
    } else {
      logger.log("error", message);
    }
  }

  static warn(message: string, obj?: IWarnObj): void {
    if (obj) {
      logger.log("warn", message, { data: obj.data || null });
    } else {
      logger.log("warn", message);
    }
  }

  static debug(message: string, obj?: IDebugObj): void {
    if (obj) {
      logger.log("debug", message, { data: obj.data || null });
    } else {
      logger.log("debug", message);
    }
  }
}
