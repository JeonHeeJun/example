import client from "../../client"

export default {
    Query:{
        seeSomeTag:(_,{take,lastId})=>(
            client.tag.findMany({
                take,
                skip: lastId ? 1:0,
                ...(lastId && {cursor :{id:lastId}}),
                
            })
        )
    }
}