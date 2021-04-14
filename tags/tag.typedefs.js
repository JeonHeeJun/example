import { gql } from "apollo-server-core";

export default gql `
type Tag{
    id:Int!
    name:String!
    sayings(take:Int!, lastId:Int): [Saying]
    totalSayings:Int!
    isFollowing:Boolean!
}

`