import { ZodError } from 'zod';

export const validate = (schema)=> (req,res,next) =>{
    try{
        schema.parse({body: req.body})
        next();
    }
    catch(error){
        if(error instanceof ZodError){
            console.log(error.errors);
            return res.status(400).json({message: error.errors})
        }
        else
        {
            return res.status(500).json({error: 'Internal Server Error'})
        }                    
    }
    
}