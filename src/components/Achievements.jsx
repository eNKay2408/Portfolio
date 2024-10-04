import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { link } from "../assets";

import PropTypes from "prop-types";

const AchievementCard = ({ achievement }) => (
	<VerticalTimelineElement
		contentStyle={{
			background: "#0f182e",
			color: "#fff",
			paddingRight: "15px",
		}}
		contentArrowStyle={{ borderRight: "15px solid #0f182e" }}
		date={achievement.date}
		iconStyle={{ background: achievement.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={achievement.icon}
					alt={achievement.subtitle}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-white font-bold text-[24px]">{achievement.title}</h3>
			<p
				className="text-secondary text-[16px] font-semibold"
				style={{ margin: 0 }}
			>
				{achievement.subtitle}
			</p>
		</div>

		<ul className="mt-5 list-disc ml-5 space-y-2">
			{achievement.points.map((point, index) => (
				<li
					key={`achievement-point-${index}`}
					className="text-white-100 text-[14px] tracking-wider flex"
				>
					{point && <span className="flex-1 list-item">{point}</span>}
					{achievement.links && (
						<a href={achievement.links[index]} target="_blank" className="ml-1">
							<img
								src={link}
								alt="link"
								className="w-5 h-5 bg-gray-200 rounded-sm p-[1px]"
							/>
						</a>
					)}
				</li>
			))}
		</ul>
	</VerticalTimelineElement>
);

const Achievements = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					Highlights of my journey and growth
				</p>
				<h2 className={styles.heroHeadText}>Achievements.</h2>
			</motion.div>

			<div className="mt-20">
				<VerticalTimeline>
					{achievements.map((achievement, index) => (
						<AchievementCard key={index} achievement={achievement} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Achievements, "achievements", 0.15);
