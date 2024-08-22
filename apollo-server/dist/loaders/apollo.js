"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const book_1 = require("../graphql/schema/book");
const book_2 = require("../graphql/resolvers/book");
const context_1 = require("../graphql/context");
const server = new apollo_server_1.ApolloServer({
    typeDefs: book_1.bookTypeDefs,
    resolvers: book_2.bookResolvers,
    context: context_1.context,
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
