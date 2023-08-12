import {Image, useScroll} from "@react-three/drei";
import { useRef, useEffect, use, useLayoutEffect } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function Work (){
    const workImage = useRef<any>(null)
    const scroll = useScroll()
    
    useFrame(() => {
        const r1 = scroll.range(0, 1 / 10)
        const r2 = scroll.range(1/20, 1 / 10)
       
        if(workImage.current){
            workImage.current.position.z = -60 + 65 * r1
            workImage.current.material.opacity = r2
        }
    })

    return(
            <Image  url="/webgame.png" scale={[16, 8.5]} ref={workImage} position={[10, 0, 0]} transparent/>
    )
}