/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt
			className="xs:w-[250px] w-full"
			options={{
				max: 45,
				scale: 1.2,
			}}
		>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-blue-gradient p-[2px] rounded-[20px] shadow-card"
			>
				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
			>
				I am a software engineer from the University of Science, currently
				residing in Ho Chi Minh City. I have knowledge in programming languages
				such as JavaScript and Java, along with experience in
				libraries/frameworks like React, ExpressJS, and Spring Boot.
				Additionally, I have expertise in various DevOps technologies, including
				Docker, GitLab CI/CD, Jenkins, and AWS Services.
				<br />
				As a sociable and hardworking individual, I embrace challenges and
				thrive in team environments, where I have demonstrated strong leadership
				skills. I invite you to collaborate with me to build exceptional
				technology solutions together!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about", 0.3);
