"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookResolvers = void 0;
exports.bookResolvers = {
    Query: {
        book: async (_source, { isbn }, { dataSources }) => {
            return dataSources.openLibraryAPI.getBookByISBN(isbn);
        },
    },
};
