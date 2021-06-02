import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
	return (
		<div id="education" className="Education">
			<h1 className="py-5">Education</h1>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
							</div>
							<h3>University of Texas at Austin</h3>
							<p>
								I attended the University of Texas at Austin from 08/2013 to
								05/2018 and studied Biology throughout my tenure at the
								University. I was a member of the UT Bass fishing team and later
								became VP of the team where we organized tournaments and even
								attended Nationals! My college experience was a learning one
								where I made lots of life long friends and experiences that I
								will always remember.
							</p>
						</div>
					</div>
				</div>
				{/* - */}
				<div className="col-sm">
					<div className="box">
						<div className="circle">
							<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
						</div>
						<h3>
							University of Texas Certificate of the UT Computer Science Coding
							Bootcamp
						</h3>
						<p>
							Throughout the 6 months in this program I learned what takes to be
							a succesful software developer and more importantly the fact that
							this is an ever evolving industry in which the learning never
							stops. At the height of the pandemic I'm proud to say I used my
							time wisely to learn new skills and get a head start in my new
							career.
						</p>
					</div>
				</div>
				{/* - */}
			</div>
		</div>
	);
};

export default Education;
