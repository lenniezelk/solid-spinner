"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
const vite_plugin_solid_1 = __importDefault(require("vite-plugin-solid"));
exports.default = (0, config_1.defineConfig)({
    resolve: {
        conditions: ['development', 'browser'],
    },
    plugins: [(0, vite_plugin_solid_1.default)()],
    test: {
        deps: {
            registerNodeLoader: true,
        },
        environment: 'jsdom',
        globals: true,
        transformMode: {
            web: [/.[jt]sx?$/],
        },
    },
});
