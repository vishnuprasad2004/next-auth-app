"use client";

import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const router = useRouter()
    const [dataID, setDataID] = useState("nothing")

    async function logout() {
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout Successful")
            router.push("/login")
        } catch (error: any) {
            toast.error(error.message)
        }        
    }

    async function getUserDetails() {
        try {
            const res = await axios.get("/api/users/me")
            setDataID(res.data.data._id)
        } catch (error: any) {
            toast.error(error.message)
        }

    }

    useEffect(()=> {
        getUserDetails()
    },[])

    return (
        <div className=" flex flex-col items-center justify-center py-1 min-h-screen">
            <Toaster />
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h1 className="rounded-lg p-2 text-white text-2xl">{dataID === "nothing" ? "Nothing": <Link href={`/profile/${dataID}`}>{dataID}</Link> }</h1>
            <hr />
            {/* <button
                onClick={getUserDetails}
                className="mt-4 bg-gray-500 p-2 rounded-lg hover:bg-gray-800 text-white"
            >Get User Details</button> */}
            <button
                onClick={logout}
                className="mt-4 bg-teal-500 p-2 rounded-lg hover:bg-teal-800 text-white"
            >Logout</button>
        </div>
    )
}