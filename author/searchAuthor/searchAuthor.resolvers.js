import client from "../../client";

export default {
    Query:{
        searchAuthor:(_,{keyword, take,lastId})=>client.author.findMany({
            take,
            skip:lastId? 1:0,
            ...(lastId && {cursor :{id:lastId}}),
            where:{
                name:{
                    contains:keyword
                }
            }
        })
    }
}