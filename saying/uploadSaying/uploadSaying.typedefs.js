import { gql } from "apollo-server";

export default gql`
type Mutation{
    uploadSaying(text:String!,tag:[String],author:String!):MutationResponse

}
`;