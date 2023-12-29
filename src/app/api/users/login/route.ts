import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConnect";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect()

type UserData = {
    email:string,
    password:string
}

export async function POST(request: NextRequest) {
    try {
        const reqBody: UserData = await request.json();
        const { email, password } = reqBody

        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: "User does not exist"},{status: 400})
        }

        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword) {
            return NextResponse.json({error: "Invalid password"},{status: 400})
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login Successful",
            success: true
        },{status:200})

        response.cookies.set("token",token, {
            httpOnly: true
        })

        
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }

}