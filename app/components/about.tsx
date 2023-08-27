import { Plane } from "@react-three/drei";

export default function About() {


    return (
        <group>
            <Plane args={[80, 200]} material-color="hotpink" position={[0, -200, 0]} />
        </group>
    )
}