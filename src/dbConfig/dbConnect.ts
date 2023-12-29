import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("[DB CONNECTION]: MongoDB connected successfully");
            
        })

        connection.on('error', () => {
            console.log("[DB CONNECTION]: Some error came while connecting");
            
        })

    } catch (e) {
        console.log("[DB CONNECTION]: Something when wrong")
    }
}