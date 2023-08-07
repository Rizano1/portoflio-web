"use client"

import Object from "@/app/components/canvas"
import Navbar from "../components/navbar"

export default function Landing() {
    return (
        <main>
            <div className="h-screen">
                <Navbar />
                <Object/>
                <div className="absolute z-80 w-screen text-white bottom-2 inset-x-1/2 hover:opacity-50 duration-300">
                    <div className="w-7 h-7 border-l-2 border-b-2 border-white ml-2 mb-5 -rotate-45"></div>
                    <h1>Scroll</h1>
                </div>
            </div>
        </main>
    )
}
