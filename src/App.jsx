import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Achievements,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Projects,
	StarsCanvas,
	Footer,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>

				<About />
				<Achievements />
				<Tech />
				<Projects />
				<Feedbacks />

				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
