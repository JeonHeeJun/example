import client from "../client";

export default {
    Author:{
        sayings:({id},{take,lastId})=>client.author.findUnique({
            where:{id}
        }).sayings({
            take,
            skip:lastId?1:0,
            ...(lastId && {cursor :{id:lastId}}),
        }),
        totalSayings:({id})=>client.saying.count({
            where:{
                authorId:id
            }
        })
    }
}