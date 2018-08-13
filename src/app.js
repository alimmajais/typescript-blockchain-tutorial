"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var blockchain_1 = __importDefault(require("./blockchain"));
var block_1 = __importDefault(require("./block"));
var b = new block_1.default();
var bc = new blockchain_1.default(b);
console.log(bc.blocks);
