// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "AnalyticMetric" type defines the queryable fields for every analytic metric in our data source.
  type AnalyticMetric {
    id: ID!
    name: String!
    data: [AnalyticMetricData!]!
    unit: String
  }

  type AnalyticMetricData {
    month: String!
    value: Int!
  }

  type Location {
    id: ID!
    name: String!
    visits: Int!
    keyIssues: [String!]!
    npsData: [String!]!
  }

  type npsMetric {
    id: ID!
    location: String!
    staffName: String!
    efficiencyDelta: Float!
    npsDelta: Float!
    efficiency: Float!
    reportedIssues: Int!
    npsScore: Int!
  }

  type visit {
    id: ID!
    location: String!
    count: Int!
    date: String!
  }

  type keyIssue {
    id: ID!
    type: String!
    location: String!
    count: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    analyticMetrics: [AnalyticMetric!]!
    locations: [Location!]!
    npsMetrics: [npsMetric!]!
    visits: [visit!]!
    keyIssues: [keyIssue!]!
  }
`;
