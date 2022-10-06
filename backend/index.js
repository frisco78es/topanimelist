import { ApolloServer } from 'apollo-server';

const SCHEMAS = [
];

const RESOLVERS = [
]

const server = new ApolloServer({ typeDefs: SCHEMAS, resolvers: RESOLVERS });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});