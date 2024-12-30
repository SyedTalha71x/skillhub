import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";

export const showProfileInfo = async (req,res) =>{
    try{
        const userId = req.user.userId;
        if(!userId){
            return FailureResponse(res, 'Internal Server Error', null, 400)
        }
        const showProfile = await prisma.user.findFirst({
            where: {id: userId}
        })
        return SuccessResponse(res, 'Success', {showProfile}, 200)
    }
    catch(error){
        console.log();
        return FailureResponse(res, 'Internal Server Error', null, 500)
        
    }
}