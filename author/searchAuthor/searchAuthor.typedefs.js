import { gql } from "apollo-server-core";

export default gql `
type Query{
    searchAuthor(keword:String!, take:Int!, lastId:Int):[Author]

}
`;