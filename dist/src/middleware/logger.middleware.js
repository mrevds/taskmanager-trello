"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = LoggerMiddleware;
function LoggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} — ${new Date().toISOString()}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map