import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#2f80ed]" />
					<div className="w-1 sm:h-80 h-40 blue-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm <span className="text-[#2f80ed]">eNKay</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2`}>
						A Full-Stack Developer passionate about{" "}
						<br className="sm:block hidden" />
						seamless web solutions and DevOps practices
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 25, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
