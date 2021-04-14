import client from "../../client";
import { protextResolver } from "../../users/users.utils";

export default{
    Mutation:{
        likeTag:protextResolver(async(_,{id},{loggedUser})=>{
            const tag = await client.tag.findUnique({//요구하는 tag이있는가?
                where:{
                    id
                }
            });
            if(!tag){
                return{
                    ok: false,
                    error: "saying not found",
                }
            }
           await client.user.update({
                
                where:{id:loggedUser.id},
                data:{
                    tags:{
                        connect:{
                            id:tag.id
                        }
                    }
                }
            
            })
            return {
                ok:true,
            }
        })
    }
}