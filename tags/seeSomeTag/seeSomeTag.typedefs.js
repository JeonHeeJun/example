import { gql } from "apollo-server";

export default gql `
type Query{
    seeSomeTag(take:Int!,lastId:Int):[Tag]
}
`