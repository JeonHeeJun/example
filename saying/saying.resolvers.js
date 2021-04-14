import client from "../client"

export default {
    Saying:{
        user:({userId})=>{
          return client.user.findUnique({
                where:{id:userId}
            })
        },
        author:({authorId})=>{
            return client.author.findUnique({
                where:{id:authorId}
            })

        },
        tags:({id})=>client.tag.findMany({
            where:{
                sayings:{
                    some:{
                        id
                    }
                }
            }
        }),
        totalLikes:({id})=>client.like.count({
            where: {sayingId:id}
        }),
        totalComments:({id})=>client.comment.count({
            where:{
                sayingId:id
            }
        }),
        isMine:({userId},_,{loggedUser})=>{
            if(!loggedUser) return false;
            return (loggedUser.id === userId)},
        isLike:async({id},_,{loggedUser})=>{
            if(!loggedUser) return false;

            const likeWhere = {
                sayingId_userId:{
                    userId: loggedUser.id,
                    sayingId:id,
                }
            }
            const like = await client.like.findUnique({
                where: likeWhere
            })
            if(!like) return false
            else return true;
        }
    },
}