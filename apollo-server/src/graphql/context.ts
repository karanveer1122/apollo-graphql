import OpenLibraryAPI from '../datasources/book.datasource';

export interface Context {
  dataSources: {
    openLibraryAPI: OpenLibraryAPI;
  };
}

export const context = (): Context => ({
  dataSources: {
    openLibraryAPI: new OpenLibraryAPI(),
  },
});
