import { ILogger } from "./types";

export const Logger: ILogger = {
  info: (msg, ...meta) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[INFO]", msg, ...meta);
    }
  },

  warn: (msg, ...meta) => {
    console.warn("[WARN]", msg, ...meta);
  },

  error: (msg, ...meta) => {
    console.error("[ERROR]", msg, ...meta);
  },
}