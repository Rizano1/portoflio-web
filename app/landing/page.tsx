"use client"

import Object from "@/app/components/landingObject"
import Navbar from "../components/navbar"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Scroll, ScrollControls, Html, Circle } from "@react-three/drei"
import Work from "../components/work"
import { useEffect, useState, useRef } from "react"
import { useSpring, animated } from '@react-spring/web'
import About from "../components/about"
import { easing } from 'maath'

const Mouse = () => {
    const pos = useRef<any>(null); 
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => {
        // pos.current.position.x += 10
        const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
        easing.damp3(
        pos.current.position,
        [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
        0.15,
        delta
        )
      })

    return(
        <Circle ref={pos} args={[0.5, 100, 10]} position={[0, 0, 0]}/>
    )
}

export default function Landing() {
    return (
        <main>
            <div className="h-screen w-screen" >
                
                <Navbar />
                <Canvas className="bg-black" camera={{position : [0, 0, 21]}}>
                    <ScrollControls pages={7} >
                        <ambientLight intensity={0.5} />
                        <Object />
                        <Work />
                        <Mouse />
                        <About />
                    </ScrollControls>
                </Canvas>
                <div className="absolute w-screen text-white bottom-2 inset-x-1/2 hover:opacity-50 duration-300">
                    <div className="w-7 h-7 border-l-2 border-b-2 border-white ml-2 mb-5 -rotate-45"></div>
                    <h1>Scroll</h1>
                </div>
            </div>
        </main>
    )
}
