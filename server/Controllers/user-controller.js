import {SuccessResponse, FailureResponse} from '../Helper/helper.js'
import prisma from '../prismaClient/client.js'
import { generateToken } from '../Helper/helper.js'
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
        const newUser = await prisma.user.create({
            data:{
                username, email, password: hashedPassword
            }
        })
        return SuccessResponse(res, 'User signup successfull', {newUser}, 200)
    }
    catch(error){
        console.log(error);
        FailureResponse(res, 'Internal Server Error', null, 500)
        
    }
}