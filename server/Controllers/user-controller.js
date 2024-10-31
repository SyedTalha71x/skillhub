import {SuccessResponse, FailureResponse} from '../Helper/helper.js'
import { PrismaClient } from '@prisma/client/extension';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

export const login = async () =>{
    try{

    }
    catch(error){
        console.log(error);
        FailureResponse(res, 'Internal Server Error', null, 500)
        
    }
}
export const register = async (req,res) =>{
    try{

    }
    catch(error){
        console.log(error);
        FailureResponse(res, 'Internal Server Error', null, 500)
        
    }
}