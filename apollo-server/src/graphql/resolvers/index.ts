import {bookResolvers} from './book';

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    // add other resolvers here
  },
};

export default resolvers;
