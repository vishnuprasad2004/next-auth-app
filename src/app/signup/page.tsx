"use client";
import Link from "next/link";
import React,{ useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup  = async() => {

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input 
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user,username: e.target.value})}
                className="p-1 focus:outline-none rounded-lg mb-4 border-gray-400 text-black mt-4"
                placeholder="username"
            />
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user,email: e.target.value})}
                className="p-1 focus:outline-none rounded-lg mb-4 border-gray-400 text-black mt-4"
                placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user,password: e.target.value})}
                className="p-1 focus:outline-none rounded-lg mb-4 border-gray-400 text-black mt-4"
                placeholder="password"
            />
            <button
                onClick={onSignup}
                className="p-1 border border-gray-300 rounded-lg focus:border-gray-600 mb-4"    
            >Signup</button>
            <Link href="/login">Visit login</Link>
        </div>
    )
}