import jwt from 'jsonwebtoken'


export const generateToken = (userId, email) =>{
    const result = jwt.sign(userId, email)
    return result
}

export const SuccessResponse = (res,data = {}, message = "Success", statusCode) =>{
    return res.status(statusCode).json({
        status: 'Success',
        data,
        message
    })
}
export const FailureResponse = (res, error, message = "An Error Occurred", statusCode) =>{
    return res.status(statusCode).json({
        status: 'Failure',
        error,
        message
    })
}