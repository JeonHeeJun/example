import { gql } from "apollo-server";

export default gql`
type Comment{
    id:Int!
    createdAt:String!
    updateAt: String!
    user: User!
    saying: Saying!
    text: String!
    isMine: Boolean!

}

`;