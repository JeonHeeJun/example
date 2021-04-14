import { gql } from "apollo-server";

export default gql`
    type Mutation{
        likeTag(id:Int!): MutationResponse
    }


`