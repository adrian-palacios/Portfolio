import React from "react";

const Experience = () => {
	return (
		<div id="Experience" className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>Experience</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2018-2019</h3>
						<p>
							<strong>Realtor.com</strong> Salesman
						</p>
						<ul>
							<li>Outbound Sales</li>
							<li>Inbound Sales</li>
							<li>
								Built and maintained ongoing professional relationships with
								clients to maximize each sale
							</li>
							<li>
								Collaborated with other departments to maximize efficiency
							</li>
						</ul>
					</div>
				</div>
				{/*  */}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2019-2020</h3>
						<p>
							<strong>ePayPolicy</strong> Product Specialist
						</p>
						<ul>
							<li>Outbound Sales</li>
							<li>Prospected new business opportunities</li>
							<li>Maintained book of business with clients and prospects</li>
						</ul>
					</div>
				</div>
				{/*  */}
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2020-2021</h3>
						<p>
							<strong>
								University of Texas Computer Science Coding Bootcamp
							</strong>
						</p>
						<ul>
							<li> HTML/CSS/BootStrap</li>
							<li> JavaScript/JQuery/React.js/Node.js/Express.js/MongoDB</li>
							<li> Bootstrao</li>
							<li> Web API's</li>
							<li> 3rd Party API's</li>
							<li> MySQL/NoSQL</li>
							<li> CI/CD, CircleCI</li>
							<li> Session Storage and User Authentication </li>
							<li> Responsive Design</li>
						</ul>
					</div>
				</div>
				{/*  */}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2021-Current</h3>
						<p>
							<strong>Rebelution Promotions</strong>Part-time Junior Web
							Developer
						</p>
						<ul>
							<li>Create, Maintain and update client & company website</li>
							<ul>
								<li>HTML, CSS, JavaScript & Wordpress </li>
							</ul>
							<li>
								Maintain healthy relationship with client during and after
								project lifecycle
							</li>
							<li>
								Use of Microsoft Outlook, Office & Teams for collaboration with
								other departments
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
