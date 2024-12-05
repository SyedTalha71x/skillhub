import {SuccessResponse, FailureResponse, generateToken} from '../Helper/helper.js'
import prisma from '../prismaClient/client.js'
import bcrypt from 'bcryptjs'

export const login = async (req,res) =>{
    try{
        const {email, password} = req.body;

        const checkExistingUser = await prisma.user.findUnique({where: {email}})
        if(!checkExistingUser){
            return FailureResponse(res, 'Sorry User not found', null, 400)
        }

        const comparePassword = await bcrypt.compare(password, checkExistingUser.password)
        if(!comparePassword){
            return FailureResponse(res, 'Password is invalid', null, 400)
        }

        const AuthToken =  generateToken(checkExistingUser.id, checkExistingUser.email)

        return SuccessResponse(res, 'Login Successfull', {AuthToken}, 200)

    }
    catch(error){
        console.log(error);
        FailureResponse(res, 'Internal Server Error', null, 500)
    }
}
export const register = async (req,res) =>{
    try{
        const {username, email, password} = req.body;
        const checkExistingUser = await prisma.user.findUnique({where: {email}})
        if(checkExistingUser){
            return FailureResponse(res, 'User already exists', null, 400)
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const totalUserCount = await prisma.user.count();
        console.log(totalUserCount);
 
        const roles = await prisma.role.findMany();
        const adminRole = roles.find((role) => role.name === 'Admin')
        const StudentRole = roles.find((role)=> role.name === 'Student')

        let roleId;
        if(totalUserCount === 0){
            roleId = adminRole.id
        }      
        else
        {
            roleId = StudentRole.id
        }

        const newUser = await prisma.user.create({
            data:{
                username, email, password: hashedPassword
            }
        })

        const checkRole = await prisma.role_To_User.create({
            data:{
                userId: newUser.id,
                roleId: roleId
            }
        })
        return SuccessResponse(res, 'User signup successfull with assigned Role', {newUser, checkRole}, 200)
    }
    catch(error){
        console.log(error);
        FailureResponse(res, 'Internal Server Error', null, 500)
        
    }
}