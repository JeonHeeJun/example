import { gql } from "apollo-server";

export default gql`
    type Mutation{
        unlikeTag(id:Int!): MutationResponse
    }


`