import { gql } from "apollo-server";

export default gql ` 
type Query{
    seeSomeAuthor(take:Int!,lastId:Int):[Author]
}


`;