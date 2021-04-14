import { gql } from "apollo-server";

export default gql `
type Query{
    searchTag(keword:String!,take:Int!,lastId:Int):[Tag]

}
`;