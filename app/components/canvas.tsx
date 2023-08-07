import { MathUtils, Vector3, Group } from 'three'
import { useRef } from 'react' 
import { Html, Points, Point, Line, PointMaterial, OrbitControls, Text, Box } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';

const Particle = () => {
    const poin = useRef<Group>(null)

    useFrame(() => {
        if(poin.current != null){
            poin.current.rotation.y += 0.0007
            poin.current.rotation.x += 0.0007
        }
    })
    const positions = Array.from({ length: 1000 }, (i) => [
        MathUtils.randFloatSpread(8),
        MathUtils.randFloatSpread(8),
        MathUtils.randFloatSpread(8),
      ]).map(position => new Vector3(...position));
    return (
        <Points limit={positions.length} ref={poin}>
            <PointMaterial vertexColors size={2} sizeAttenuation={false} depthWrite={false} toneMapped={false} />
            {positions.map((position, i) => (
                <Point key={i}  color={'white'} position={position} />
            ))}
        </Points>
    )
}

export default function Object() {
    const BigFont = { font: '/Oswald-Bold.ttf', fontSize: 14, 'material-toneMapped': false }
    const LittleFont = { font: '/Oswald-Light.ttf', fontSize: 1, 'material-toneMapped': false }

    return (
        <Canvas className='bg-black'> 
            <perspectiveCamera position={[0, 0, -16]}>
                <Particle />
                <Text {...BigFont} position={[20,0,0]}>
                    ANO
                </Text>
                <Text {...BigFont} position={[-20,0,0]}>
                    RIZ
                </Text>
                <Text {...LittleFont} position={[-25.2,6.5,0]}>
                    Hi, My name is
                </Text>
                <Text {...LittleFont} position={[27,-8,0]}>
                    I develop website
                </Text>
            </perspectiveCamera>
            {/* <OrbitControls /> */}
        </Canvas>
   
    )
}