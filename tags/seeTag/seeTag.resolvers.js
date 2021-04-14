import client from "../../client";

export default{
    Query:{
        seeTag:(_,{name})=>client.tag.findUnique({
            where:{name}
        })
    }
}