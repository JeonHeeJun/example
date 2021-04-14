
import bcrypt from "bcrypt"
import client from "../../client"

export default {
    Mutation :{
        createAccount:async(_,{
            name,
            email,
            password,
        }) =>{
            //user name, email unique check
            try{
            const existingUser = await client.user.findFirst({
                where:{
                    OR:[{
                        name,
                    },
                    {
                        email,
                    }
                    ]
                }
            })
            if(existingUser){
                throw new Error("this username/password is already taken.")
            }
            const existingAuthor = await client.author.findFirst({
                where:{
                    name
                }
            })
            if(existingAuthor){
                throw new Error("this username is already taken by author name.")
            }
            const uglyPassword = await bcrypt.hash(password,10)
            await client.user.create({data:{
                name, email, password:uglyPassword
            }})
            //password hash create
            //save and return
            return {
                ok:true,
            };
            }
            catch(e){
                return {
                    ok:false,
                    error:"Can't create account"
                }
            }

        }
    }
    
}