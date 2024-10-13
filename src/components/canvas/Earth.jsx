import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
	const earth = useGLTF("./earthquakes/scene.gltf");

	return (
		<mesh>
			<ambientLight intensity={2} color="blue" />
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<primitive object={earth.scene} />
		</mesh>
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			className="cursor-pointer"
			shadows
			frameloop="demand"
			camera={{
				fov: 20,
				near: 0.1,
				far: 1000,
				position: [0, 0, 4],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>

				<Earth />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default EarthCanvas;
