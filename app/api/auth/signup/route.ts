import { NextResponse } from "next/server";
import validator from 'validator'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import * as jose from'jose'

const prisma = new PrismaClient();


export async function GET(request: Request){
  // const body = request.body

  return NextResponse.json( "Unknown endpoint", {status: 404} );
}

export async function POST(request: Request) {
  const {firstName, lastName, email, phone, city, password} = await request.json();

  const errors: any[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 2, 
        max: 20 
      }),
      errorMessage: "First name is invalid"
    },
    {
      valid: validator.isLength(lastName, {
        min: 2, 
        max: 20 
      }),
      errorMessage: "Last name is invalid"
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid"
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid"
    },
    {
      valid: validator.isLength(city, {
        min: 1
      }),
      errorMessage: "City name is invalid"
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password isn't strong enough"
    }
  ]
    // Checking each object if is valid
  validationSchema.forEach((check)=> {
    if(!check.valid){
      errors.push(check.errorMessage)
    }
  })
  if(errors.length){
    return NextResponse.json({errorMessage: errors[0]})
  }
  //Verifying if exist another account with the email
  const verifyUserWithEmail = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if(verifyUserWithEmail){
    return NextResponse.json({errorMessage: "This email is associate with anothe account."})
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      password: hashPassword,
      city,
      phone,
      email
    }
  })

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const token = await new jose.SignJWT({email: user.email})
    .setProtectedHeader({alg})
    .setExpirationTime("24h")
    .sign(secret)

    
  return NextResponse.json( {token} );
}
 