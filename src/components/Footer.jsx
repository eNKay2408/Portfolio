import { github, linkedin, facebook, cv } from "../assets";
import { SectionWrapper } from "../hoc";

const Footer = () => {
	return (
		<div className="px-2 py-5 border-t-2 border-gray-500 bg-primary">
			<div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-5">
				<p className="text-white-100">©️ 2024 eNKay | All Rights Reserved.</p>

				<div className="flex gap-3 items-center">
					<a href="https://github.com/eNKay2408" target="_blank">
						<img
							src={github}
							alt="github"
							className="w-[2.9rem] h-[2.9rem] opacity-80 hover:opacity-100"
						/>
					</a>
					<a href="https://www.linkedin.com/in/en-kay" target="_blank">
						<img
							src={linkedin}
							alt="linkedin"
							className="w-10 h-10 opacity-80 hover:opacity-100"
						/>
					</a>
					<a href="https://www.facebook.com/enkay.live" target="_blank">
						<img
							src={facebook}
							alt="facebook"
							className="w-11 h-11 opacity-80 hover:opacity-100"
						/>
					</a>
					<a href="https://bit.ly/enkaycv" target="_blank">
						<img
							src={cv}
							alt="cv"
							className="w-11 h-11 opacity-80 hover:opacity-100"
						/>
					</a>
				</div>

				<a className="text-white-100 hover:text-blue-200" href="#">
					Thank you for visiting my portfolio 💙
				</a>
			</div>
		</div>
	);
};

export default Footer;
