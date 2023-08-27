import { MathUtils, Vector3, Group } from 'three' 
import { useRef } from 'react' 
import { Html, Points, Point, PointMaterial, Text, ScrollControls, Scroll, useScroll} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';

interface ParticleProps {
    positions: Vector3[];
  }

const Particle = ({ positions }: ParticleProps) => {
    const BigFont = { font: '/Oswald-Bold.ttf', fontSize: 14, 'material-toneMapped': false }
    const LittleFont = { font: '/Oswald-Light.ttf', fontSize: 1, 'material-toneMapped': false }
    const textParticle = useRef<Group>(null)
    const poin = useRef<Group>(null)
    const scroll = useScroll()

    useFrame(() => {
        if(poin.current != null){
            poin.current.rotation.y += 0.0007
            poin.current.rotation.x += 0.0007

        }
        if(textParticle.current != null){
            const r1 = scroll.range(0, 1 / 8)
            textParticle.current.position.z = 20 * r1

            // const r2 = scroll.range(1 / 40, 1 / 35)
            // if(textParticle.current.position.z == 15){
            //     textParticle.current.position.z = 15 + 5 * r2
            // }

        }
    })
      
    return (
        <group ref={textParticle}>
            <group ref={poin}>
                <Points limit={positions.length}>
                            <PointMaterial vertexColors size={1.5} sizeAttenuation={false} depthWrite={false} toneMapped={false} />
                            {positions.map((position, i) => (
                                <Point key={i}  color={'white'} position={position} />
                            ))}
                </Points>
            </group>
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
        </group>

        
    )
}

const positions = Array.from({ length: 3000 }, (i) => [
    MathUtils.randFloatSpread(8),
    MathUtils.randFloatSpread(8),
    MathUtils.randFloatSpread(8),
  ]).map(position => new Vector3(...position));

export default function Object() {

    return (
        <Particle positions={positions} />
    )
}