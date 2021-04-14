import client from "../client";

export default{
    User:{
        sayings:({id},{take,lastId})=>(
        client.user.findUnique({
            where:{id}
        }).sayings({
            take,
            skip:lastId?1:0,
            ...(lastId && {cursor:{id:lastId}})
        })//나중에 search식으로 수정필요.

    )
}
}