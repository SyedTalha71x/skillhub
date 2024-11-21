import zod from 'zod'

export const signupSchema = zod.object({
    body: zod.object({
       email: zod.string().email("Please enter a valid email"),
       password: zod.string()
       .min(6, "Password must be at least 6 characters")
       .max(128, "Password must be at most 128 characters"),
    })
})
