import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";

export const getStatistics = async (req, res) =>{
    try{
        const userId = req.user.userId;
        if(!userId){
            return FailureResponse(res, 'You are not authenticated', null, 400)
        }
        const purchaseRecords = await prisma.enrollment.count();

        const allUsers = await prisma.role_To_User.count({
            where:{
                role:{
                    name: "Student"
                }
            }
        })
        const results = await prisma.enrollment.findMany({
            include:{
                course:{
                    select:{
                        price: true
                    }
                }
            }
        })

        const totalCourses = await prisma.course.count();

        const totalRevenew = results.reduce((sum, enrollment)=>{
            return parseInt(sum + enrollment.course.price || 0) 
        }, 0)
        return SuccessResponse(res, 'Success', {purchaseRecords, allUsers, totalRevenew, totalCourses}, 200)
    }
    catch(error){
        console.log(error);
        return FailureResponse(res, 'Internal Server Error',  null, 500)
        
    }
}
export const getAllInstructors = async (req,res) =>{
    try{
        const userId = req.user.userId;
        if(!userId){
            return FailureResponse(res, 'You are not authenticated', null, 400)
        }
        const getAllInstructors = await prisma.role_To_User.findMany({
            where:{
                role:{
                    name: "Instructor"
                }
            },
            include:{
                user: true,
            }
        })
        return SuccessResponse(res, 'Success', {getAllInstructors}, 200)
    }
    catch(error){
        console.log(error);
        return FailureResponse(res, 'Internal Server Error',  null, 500)
        
    }
}