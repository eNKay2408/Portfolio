import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, relationship, image }) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.5, 0.75)}
		className="bg-black-200 xs:p-10 p-4 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">"</p>

		<div>
			<p>{testimonial}</p>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						<span className="blue-text-gradient">@</span> {name}
					</p>
					<p className="mt-1 text-secondary text-[12px]">{relationship}</p>
				</div>

				<img
					src={image}
					alt={`feedback-by-${name}`}
					className="w-10 h-10 rounded-full object-cover "
				/>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>Feedback from others</p>
					<h2 className={styles.sectionHeadText}>Testimonials.</h2>
				</motion.div>
			</div>

			<div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.name} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "", 0.3);
