import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology, index) => (
				<motion.div
					variants={fadeIn("right", "", index * 0.15, 0.3)}
					className="w-28 h-28"
					key={technology.name}
				>
					<BallCanvas icon={technology.icon} index={index} />
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "", 0.1);
