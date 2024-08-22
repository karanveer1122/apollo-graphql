"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const book_datasource_1 = __importDefault(require("../datasources/book.datasource"));
const context = () => ({
    dataSources: {
        openLibraryAPI: new book_datasource_1.default(),
    },
});
exports.context = context;
