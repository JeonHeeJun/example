import { gql } from "apollo-server";

export default gql `
type Mutation{
    createComment(sayingId:Int!,text:String!):MutationResponse

}


`