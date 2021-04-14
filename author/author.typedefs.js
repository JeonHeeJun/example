import { gql } from "apollo-server";

export default gql `
type Author{
    id:Int!
    name:String!
    sayings(take:Int!, lastId:Int): [Saying]
    totalSayings:Int!

}
`;