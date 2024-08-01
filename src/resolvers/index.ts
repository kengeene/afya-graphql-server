import {
  analyticMetrics,
  locations,
  npsMetrics,
  visits,
  keyIssues,
} from '../data/index';
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
import { assignId } from '../utils/array';

export const resolvers = {
  Query: {
    analyticMetrics: () => analyticMetrics,
    locations: () => locations,
    npsMetrics: () => npsMetrics,
    visits: () => visits,
    keyIssues: () =>
      assignId(keyIssues).map((issue) => {
        const location = locations.find((loc) => loc.id === issue.location);
        return {
          ...issue,
          location: location ? location.name : "unknown",
        };
      }),
  },
};
