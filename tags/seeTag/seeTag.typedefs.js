import { gql } from "apollo-server";

export default gql `
    type Query{
        seeTag(name:String!):Tag
    }



`;