"use client"

import Object from "@/app/components/landingObject"
import Navbar from "../components/navbar"
import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"
import Work from "../components/work"

export default function Landing() {
    return (
        <main>
            <div className="h-screen w-screen">
                <Navbar />
                <Canvas className="bg-black" camera={{position : [0, 0, 21]}}>
                    <ScrollControls pages={7}>
                        <ambientLight intensity={0.5} />
                        <Object />
                        <Work />
                    </ScrollControls>
                </Canvas>
                <div className="absolute z-80 w-screen text-white bottom-2 inset-x-1/2 hover:opacity-50 duration-300">
                    <div className="w-7 h-7 border-l-2 border-b-2 border-white ml-2 mb-5 -rotate-45"></div>
                    <h1>Scroll</h1>
                </div>
            </div>
        </main>
    )
}
