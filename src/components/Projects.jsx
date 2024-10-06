import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_demo_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.75, 1)}>
			<Tilt
				options={{
					max: 20,
					scale: 1,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[220px]">
					<img
						src={image}
						alt={image}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 gap-1">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="github"
								className="w-2/3 h-2/3 object-contain"
							/>
						</div>
						<div
							onClick={() => window.open(live_demo_link, "_blank")}
							className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={live}
								alt="github"
								className="w-2/3 h-2/3 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.2, 1)}
					className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]"
				>
					Explore my personal projects that showcase my expertise in web
					development. From crafting a user-friendly frontend for Digital Bank
					to developing a robust full-stack application with Property Tracker
					and an engaging E-Commerce platform. All projects have been deployed
					using various DevOps technologies, highlighting my ability to
					effectively integrate development and operations. Each project
					includes a brief description along with links to code repositories and
					live demos, demonstrating my skills in solving complex problems,
					working with diverse technologies, and managing projects efficiently.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "projects", 0.3);
