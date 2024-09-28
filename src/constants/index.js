import {
	fullstack,
	software,
	devops,
	lead,
	javascript,
	reactjs,
	tailwind,
	mongodb,
	docker,
	aws,
	express,
	gitlab,
	java,
	jenkins,
	mysql,
	spring,
	threejs,
	certificates,
	education,
	awards,
	experience,
	digitalbank,
	propertytracker,
	ecommerce,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "achievements",
		title: "Achievements",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full-Stack Developer",
		icon: fullstack,
	},
	{
		title: "Software Engineer",
		icon: software,
	},
	{
		title: "DevOps Engineer",
		icon: devops,
	},
	{
		title: "Technical Lead",
		icon: lead,
	},
];

const achievements = [
	{
		title: "Certificates",
		subtitle: "Professional Qualifications",
		icon: certificates,
		iconBg: "#91a2b8",
		date: "January - September 2024",
		points: [
			"Udemy | Java 17 Masterclass | Jun 3",
			"freeCodeCamp | Legacy Full Stack | Jul 1",
			"Coursera | Google IT Support | Jul 4",
			"Udemy | Spring Boot 3 & Hibernate | Aug 9",
			"Devopsedu.vn | DevOps for Freshers | Aug 22",
			"TOEIC | 785 Points | Sep 15",
		],
		links: [
			"https://www.udemy.com/certificate/UC-19caddaa-f0a5-4a73-a49d-d9fd5750c035",
			"https://www.freecodecamp.org/certification/enkay2408/full-stack",
			"https://coursera.org/share/350ac477cba0add68e415b79dfe84a18",
			"https://www.udemy.com/certificate/UC-e7f5bd3c-b360-4a18-a4a0-387d2233696b",
			"https://devopsedu.vn/chung-chi-gia-su-2?cert_hash=60251d1043c30497",
		],
	},
	{
		title: "Education",
		subtitle: "Academic Background",
		icon: education,
		iconBg: "#91a2b8",
		date: "2019 - Current",
		points: [
			"University of Science - VNUHCM",
			"Bachelor of Software Engineering",
			"Time: 2022 - 2026",
			"GPA: 3.5/4.0",
			null,
			null,
			"Nguyen Dinh Chieu High School for the Gifted",
			"Specialized Informatics Class (Top Entrance Scorer)",
			"Time: 2019 - 2022",
			"GPA: 9.4/10",
		],
	},
	{
		title: "Awards",
		subtitle: "Honoring Achievements",
		icon: awards,
		iconBg: "#91a2b8",
		date: "2019 - 2021",
		points: [
			'Second Prize in the Middle School "Tin học trẻ" Competition, Dong Thap Province | Jun 2019',
			"Silver Medal in Informatics, 30/4 Traditional Olympic Competition | Apr 2021",
			"Second Prize in Informatics at the Provincial Excellent Student Competition | Apr 2021",
			"Vallet Scholarship for Outstanding Academic Achievement | Oct 2021",
			'National "Học sinh 3 tốt" Award | Dec 2021',
		],
		links: [
			"https://drive.google.com/file/d/12y_5vcrIHUzWYO7lvHPKyHp1V21cCzxt/view?usp=sharing",
			"https://drive.google.com/file/d/1JUieDCkX-Z7jB9qIprKaaMn-bCHpEuGt/view?usp=sharing",
			"https://drive.google.com/file/d/1Ofn10CicspAv4CGCrllK69b16E4L4v9G/view?usp=sharing",
			"https://drive.google.com/file/d/1CD2nHU7C-o8zwRVAhZ-pCg_jHYoteMq6/view?usp=sharing",
			"https://drive.google.com/file/d/1cEozxkZ1l-qjR_xFenLzKIpIp7vS3-Ni/view?usp=sharing",
		],
	},
	{
		title: "Experience",
		subtitle: "Professional Experience",
		icon: experience,
		iconBg: "#91a2b8",
		date: "2020 - 2023",
		points: [
			"Class President of the Specialized Informatics Class",
			"Head of the 2nd Generation of the Informatics Club",
			"Office Informatics Tutor at Sao Viet IT Center",
			'Leader of the "Vòng tay nhân ái" Volunteer Program',
		],
	},
];

const technologies = [
	{
		name: "Java",
		icon: java,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "ReactJS",
		icon: reactjs,
	},
	{
		name: "ThreeJS",
		icon: threejs,
	},
	{
		name: "TailwindCSS",
		icon: tailwind,
	},
	{
		name: "Spring",
		icon: spring,
	},
	{
		name: "ExpressJS",
		icon: express,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "MySQL",
		icon: mysql,
	},
	{
		name: "Docker",
		icon: docker,
	},
	{
		name: "AWS",
		icon: aws,
	},
	{
		name: "GitLab CI/CD",
		icon: gitlab,
	},
	{
		name: "Jenkins",
		icon: jenkins,
	},
];

const projects = [
	{
		name: "Digital Bank",
		description:
			"A responsive and modern website showcasing essential banking features through an elegant interface, providing users with a professional and seamless experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "green-text-gradient",
			},
			{
				name: "aws-s3",
				color: "orange-text-gradient",
			},
		],
		image: digitalbank,
		source_code_link: "https://github.com/eNKay2408/Digital-Bank",
		live_demo_link: "https://digital-bank.enkay.live",
	},
	{
		name: "Property Tracker",
		description:
			"A comprehensive real estate management platform with insightful dashboards, property listings, and agent profiles, empowering users to track and manage properties efficiently.",
		tags: [
			{
				name: "refine",
				color: "gray-text-gradient",
			},
			{
				name: "material-ui",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
		],
		image: propertytracker,
		source_code_link: "https://github.com/eNKay2408/Property-Tracker",
		live_demo_link: "https://property-tracker.enkay.live",
	},
	{
		name: "E-Commerce",
		description:
			"A user-friendly e-commerce platform with admin-controlled product management, seamless product browsing, cart functionality, and secure checkout.",
		tags: [
			{
				name: "spring",
				color: "green-text-gradient",
			},
			{
				name: "jwt",
				color: "gray-text-gradient",
			},
			{
				name: "bootstrap",
				color: "orange-text-gradient",
			},
		],
		image: ecommerce,
		source_code_link: "https://github.com/eNKay2408/E-Commerce",
		live_demo_link: "https://e-commerce.enkay.live",
	},
];

const testimonials = [
	{
		testimonial:
			"He's a brilliant problem-solver and always finds the best way to get things done.",
		name: "Van Chien",
		relationship: "Roommate",
		image: "https://randomuser.me/api/portraits/men/42.jpg",
	},
	{
		testimonial:
			"His dedication and passion for coding are truly inspiring. He's a great team player.",
		name: "Cat Huynh",
		relationship: "Classmate",
		image: "https://randomuser.me/api/portraits/men/78.jpg",
	},
	{
		testimonial:
			"An excellent communicator and a quick learner. He's always eager to help others.",
		name: "Van Khanh",
		relationship: "Playmate",
		image: "https://randomuser.me/api/portraits/men/3.jpg",
	},
];

export { services, technologies, achievements, testimonials, projects };
