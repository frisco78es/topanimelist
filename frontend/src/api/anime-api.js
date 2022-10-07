import { gql } from '@apollo/client';

export const GET_LIST = gql`
    query Query($name: Str!) {
        getList(name: $name) {

        }
    }
`