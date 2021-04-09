import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
	return (
		<>
			<Particles
				className="particles-canvas"
				params={{
					particles: {
						number: {
							value: 30,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: "circle",
							stroke: {
								width: 6,
								color: "#f9ab00",
							},
						},
					},
				}}
			/>
			<Navbar />
			<Header />;
			<AboutMe />
			<Education />
			<Experience />
		</>
	);
}

export default App;
