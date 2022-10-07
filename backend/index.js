import { ApolloServer } from 'apollo-server';
import { list_schema } from "./schemas/anime-schema.js";
import { list_resolver } from "./resolvers/anime-resolver.js"

const SCHEMAS = [
    list_schema
];

const RESOLVERS = [
    list_resolver
]

const server = new ApolloServer({ typeDefs: SCHEMAS, resolvers: RESOLVERS });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});