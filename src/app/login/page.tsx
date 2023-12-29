"use client";
import Link from "next/link";
import React,{ useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onLogin = async() => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
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
                onClick={onLogin}
                className="p-1 border border-gray-300 rounded-lg focus:border-gray-600 mb-4"    
            >Login</button>
            <Link href="/signup">Visit signup</Link>
        </div>
    )
}