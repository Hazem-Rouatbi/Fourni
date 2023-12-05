import { z } from "zod";

export const authCredValitator = z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:'password needs to be longer than 8 characters'})

  })

export  type TAuthCredValidator = z.infer<typeof authCredValitator>

