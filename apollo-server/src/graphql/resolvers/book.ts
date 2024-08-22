export const bookResolvers = {
    Query: {
      book: async (_source, { isbn }, { dataSources }) => {
        return dataSources.openLibraryAPI.getBookByISBN(isbn);
      },
    },
  };
  