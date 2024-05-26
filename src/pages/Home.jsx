import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"
import Island from "../models/Island"
import { Sky } from "@react-three/drei"

const Home = () => {
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0]
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenScale, screenPosition, rotation]
    }

    const [isLandScale, isLandPosition, isLandRotation] = adjustIslandForScreenSize()
    return (
        <section className="w-full h-screen relative">
            <Canvas className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={1} />
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                    <Sky/>
                    <Island 
                    position = {isLandPosition}
                    scale={isLandScale}
                    rotation = {isLandRotation}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home