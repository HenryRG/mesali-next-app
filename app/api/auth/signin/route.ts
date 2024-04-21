import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import validator from 'validator'
import bcrypt from 'bcrypt'
import * as jose from 'jose'  //to create a JWT


const prisma = new PrismaClient()

export async function GET(request: Request){
    return NextResponse.json("Unknown endpoint", {status: 404})
}

export async function POST(request: Request){
    const {email, password} = await request.json()
    const errors: any[] = []

    const validationSchema = [
        {
            valid: validator.isEmail(email),
            errorMessage: "Email is invalid"
        },
        {
            valid: validator.isLength(password, {
                min: 5
            }),
            errorMessage: "Password is invalid" 
        }
    ];
    
    validationSchema.forEach((check) =>{
        if(!check.valid){
            errors.push(check.errorMessage)
        };
    })
    if(errors.length){
        return NextResponse.json({errorMessage: errors[0]}, {status: 400})
    }
    // Find unique user email
    const user = await prisma.user.findUnique({
        where: {
            email,
        }
    }) //If doesn't exist 
    if(!user){
        return NextResponse.json({errorMessage: "Email or password are invalid"}, {status: 401})
    }
        //verify if the client password is equal to db
    const isTheSame = await bcrypt.compare(password, user.password)

    if(!isTheSame){
        return NextResponse.json({errorMessage: "Password invalid"}, {status: 401})
    }

    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    const token = await new jose.SignJWT({email: user.email})
        .setProtectedHeader({alg})
        .setExpirationTime("24h")
        .sign(secret)

    const userObj = {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        city: user.city,
    }

    return NextResponse.json(userObj, {
        status: 200,
        headers: {
            'Set-Cookie': `jwt=${token}; Max-Age=8640; Path=/`
        }
    })
}