import client from "../../client";
import { protextResolver } from "../../users/users.utils";

export default{
    Mutation:{
        unlikeTag:protextResolver(async(_,{id},{loggedUser})=>{
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
            //console.log(tag)
           await client.user.update({
                
                where:{id:loggedUser.id},
                data:{
                    tags:{
                        disconnect:{
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