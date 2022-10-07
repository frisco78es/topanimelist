import { gql } from 'apollo-server';

const list_schema = gql`
    type Query {
        getList(name: String!): List
    }

    type List {
        id: Int!        
    }
`

export { list_schema }