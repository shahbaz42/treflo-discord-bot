"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOT_MANAGER_SERVER_API_KEY = exports.BOT_MANAGER_SERVER_ENDPOINT = exports.DISCORD_BOT_SERVER_API_KEY = exports.PUBLIC_KEY = exports.DISCORD_TOKEN = exports.APP_ID = exports.PORT = void 0;
const dotEnv = __importStar(require("dotenv"));
if (process.env.NODE_ENV !== "prod") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
}
else {
    dotEnv.config();
}
exports.PORT = process.env.PORT || 3000;
exports.APP_ID = process.env.APP_ID;
exports.DISCORD_TOKEN = process.env.DISCORD_TOKEN;
exports.PUBLIC_KEY = process.env.PUBLIC_KEY;
exports.DISCORD_BOT_SERVER_API_KEY = process.env.DISCORD_BOT_SERVER_API_KEY;
exports.BOT_MANAGER_SERVER_ENDPOINT = process.env.BOT_MANAGER_SERVER_ENDPOINT;
exports.BOT_MANAGER_SERVER_API_KEY = process.env.BOT_MANAGER_SERVER_API_KEY;
//# sourceMappingURL=index.js.map