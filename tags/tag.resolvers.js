import client from "../client"

export default {
    Tag:{ 
        totalSayings:({id})=>client.saying.count({
            where:{
                tags:{
                    some:{
                        id
                    }
                }
            }
        }),
        sayings:({id},{take,lastId})=>client.tag.findUnique({//나중에 search식으로 수정필요.
            where:{
                id
            }
        }).sayings({
            take,
            skip:lastId? 1:0,
            ...(lastId && {cursor:{id:lastId}})
        }),
        isFollowing:async({id},_,{loggedUser})=>{
            if(!loggedUser){
                return false
            }
            const exists = await client.user.findUnique({
                where:{
                    id:loggedUser.id
                }
            }).tags({
                where:{
                    id
                }
            });
            return exists.length !== 0;
            

        }
    }

}