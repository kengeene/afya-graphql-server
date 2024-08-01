import {
  analyticMetrics,
  footfallMetrics,
  locations,
  npsMetrics,
  visits,
  keyIssues,
} from '../data/index';
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

export const resolvers = {
  Query: {
    analyticMetrics: () => analyticMetrics,
    footfallMetrics: () => footfallMetrics,
    locations: () => locations,
    npsMetrics: () => npsMetrics,
    visits: () => visits,
    keyIssues: () => keyIssues,
  },
};
