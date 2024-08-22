export const bookTypeDefs = `#graphql
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
