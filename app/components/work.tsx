import {Image, useScroll} from "@react-three/drei";
import { useRef, useEffect, use, useLayoutEffect } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

const FirstImage =  () => {
    const firstImage = useRef<any>(null)
    const scroll = useScroll()
    
    useFrame(() => {
        const r1 = scroll.range(0, 1 / 8)
        const r2 = scroll.range(1/15, 1 / 8)
       
        if(firstImage.current){
            firstImage.current.position.z = -60 + 60 * r1
            firstImage.current.material.opacity = r2
        }
    })

    return(
            <Image  url="/webgame.png" scale={[32, 17]} ref={firstImage} position={[10, 0, 0]} transparent/>
    )
}

export default function Work (){
    const image = useRef<any>(null)
    const scroll = useScroll()

    useFrame(() => {
        const r1 = scroll.range(1/8, 1/4)

       
        if(image.current){
            image.current.position.x = -130 * r1
        }
    })
    return(
        <group ref={image}>
            <FirstImage/>
            <group>
                <Image  url="/webgame.png"  scale={[32, 17]} position={[50, 0, 0]} transparent/>
                <Image  url="/webgame.png"  scale={[32, 17]} position={[90, 0, 0]} transparent/>
                <Image  url="/webgame.png"  scale={[32, 17]} position={[130, 0, 0]} transparent/>
            </group>
        </group>
    )
}