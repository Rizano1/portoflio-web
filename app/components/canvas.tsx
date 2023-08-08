import { MathUtils, Vector3, Group } from 'three'
import { useRef } from 'react' 
import { Html, Points, Point, Line, PointMaterial, OrbitControls, Text, ScrollControls, Scroll, useScroll} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';

const Particle = () => {
    const poin = useRef<Group>(null)
    const scroll = useScroll()

    useFrame(() => {
        if(poin.current != null){
            poin.current.rotation.y += 0.0007
            poin.current.rotation.x += 0.0007
            const r1 = scroll.range(0 / 4, 1 / 4)

            poin.current.position.z = 20 * r1
        }
    })
    const positions = Array.from({ length: 3000 }, (i) => [
        MathUtils.randFloatSpread(8),
        MathUtils.randFloatSpread(8),
        MathUtils.randFloatSpread(8),
      ]).map(position => new Vector3(...position));
    return (
        <group ref={poin}>
            <Points limit={positions.length}>
                        <PointMaterial vertexColors size={1.5} sizeAttenuation={false} depthWrite={false} toneMapped={false} />
                        {positions.map((position, i) => (
                            <Point key={i}  color={'white'} position={position} />
                        ))}
            </Points>
        </group>
        
    )
}

export default function Object() {
    const BigFont = { font: '/Oswald-Bold.ttf', fontSize: 14, 'material-toneMapped': false }
    const LittleFont = { font: '/Oswald-Light.ttf', fontSize: 1, 'material-toneMapped': false }

    return (
        <Canvas className='bg-black' camera={{ position : [0, 0, 21]}}> 
            <ScrollControls>
                    <Particle />
            </ScrollControls>
            <Text {...BigFont} position={[20,0,0]}>
                ANO
            </Text>
            <Text {...BigFont} position={[-21,0,0]}>
                RIZ
            </Text>
            <Text {...LittleFont} position={[-27,6.5,0]}>
                Hi, My name is
            </Text>
            <Text {...LittleFont} position={[28,-8,0]}>
                I develop website
            </Text>
            {/* <OrbitControls /> */}
        </Canvas>
   
    )
}