import { connect } from "@/dbConfig/dbConnect";
import User from "@/models/userModel";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";


connect()
export async function GET(request: NextRequest) {
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findOne({_id: userID}).select("-password")
        return NextResponse.json({
            message: "User found",
            data: user,
        })
        
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },{status:400})
    }
}
