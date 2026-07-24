"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
exports.env = {
  port: Number(process.env.PORT) || 3000,
};
//# sourceMappingURL=env.js.map
