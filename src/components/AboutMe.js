import React from "react";
import Author from "../me.jpg";

const AboutMe = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={Author} alt="Author..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About me</h1>
					<p>
						Hello! I am Adrian Palacios. I'm a detail-oriented Full Stack
						Software Developer with experience in offering critical assistance
						for complex application development, coding and testing.
						Technologies I use is MERN(MongoDB, ExpressJS, ReactJS, NodeJS) and
						I'm eager to learn more as I grow in my proffesional career. I am
						also knowlegable in Session storage & User Authentication, CI/CD,
						and BootStrap. I take an organized approach to help join a
						collaborative environment, lend a critical eye for software planning
						and assesment to meet all organizational objectives. Throughout my
						journey as a software developer I've worked with multiple teams on
						application development, deploying and optimization for various
						projects.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
