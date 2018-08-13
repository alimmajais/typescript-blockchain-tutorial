"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blockchain = /** @class */ (function () {
    //public genesisBlock: BlockData;
    function Blockchain(genesisBlock) {
        this.blocks = [];
        this.addBlock(genesisBlock);
    }
    Blockchain.prototype.addBlock = function (block) {
        //if genesis block
        if (this.blocks.length === 0) {
            block.previousHash = "0000000000";
            block.hash = this.generateHash(block);
        }
        this.blocks = this.blocks.concat([block]);
    };
    Blockchain.prototype.generateHash = function (block) {
        return '';
    };
    return Blockchain;
}());
exports.default = Blockchain;
