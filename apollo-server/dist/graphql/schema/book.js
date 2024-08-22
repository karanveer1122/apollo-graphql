"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookTypeDefs = void 0;
exports.bookTypeDefs = `#graphql
  type Book {
    title: String
    authors: [String]
    publishers: [String]
    publish_date: String
    cover: String
  }

  type Query {
    book(isbn: String!): Book
  }
`;
