"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const resolvers = {
    Query: {
        ...book_1.bookResolvers.Query,
        // add other resolvers here
    },
};
exports.default = resolvers;
