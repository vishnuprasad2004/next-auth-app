import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConnect";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect()


type UserData =  {
    username: String,
    email: String,
    password: string
}

export async function POST(request: NextRequest) {
    try {
        const reqBody:UserData = await request.json()
        const {username, email, password} = reqBody
        
        if([username, email, password].some(e => e.trim() === "")) {
            return NextResponse.json({ message: "Please provide all details" }) 
        }

        const user = await User.findOne({email})

        if(user) {
            return NextResponse.json({ message: "User exists already" })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })

        // const savedUser = await newUser.save()

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser
        })


    } catch (error:any) {
        return NextResponse.json({ error: error.message })
    }


}