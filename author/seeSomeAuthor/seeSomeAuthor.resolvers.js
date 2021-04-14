import client from "../../client";

export default{
    Query:{
        seeSomeAuthor:(_,{take,lastId})=>client.author.findMany({
            take,
            skip: lastId ? 1 : 0,
            ...(lastId && {cursor :{id:lastId}}),
        })
    }
}