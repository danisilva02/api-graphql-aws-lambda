import { makeExecutableSchema } from 'graphql-tools'

const hello = [
    {
        hello: "Hello World"
    }
];

const typeDefs = `
    type Hello {
        hello: String!
    }

    type Query {
        hello: [Hello!]!
    }
`;

const resolvers = {
    Query: {
        hello: () => hello
    }
};

export default makeExecutableSchema({
    typeDefs,
    resolvers
});