/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={3} rotationIntensity={1} floatIntensity={2} autoInvalidate>
			<ambientLight intensity={1} color="#3282B8" />
			<directionalLight position={[0, 0, 0.15]} intensity={2} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial color="#fff" flatShading />
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 0]}
					scale={1}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon, index }) => {
	return (
		<Canvas frameloop="demand" className="cursor-pointer">
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
