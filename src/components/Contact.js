import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const serviceID = "service_ID";
	const templateID = "template_ID";
	const userID = "user_4UEA2ydHKq8VjBm9ZXeeA";

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceID, templateID, e.target, userID).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="contact">
			<div className="text-center">
				<h1>Contact Me</h1>
				<p>Please fill out the form to get in contact with me!</p>
			</div>
			<div className="container">
				<form onSubmit={sendEmail}>
					<div className="row">
						<div className="col-md-6 col-xs-12">
							{/*Name input  */}
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									name="name"
								/>
								<div className="line"></div>
							</div>
							{/*Phone input  */}
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Phone Number"
									name="phone"
								/>
								<div className="line"></div>
							</div>
							{/*Email input  */}
							<div className="text-center">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									name="email"
								/>
								<div className="line"></div>
							</div>
							{/*Subject input  */}
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Subject"
									name="subject"
								/>
								<div className="line"></div>
							</div>
						</div>
						<div className="col-md-6 col-xs-12">
							{/*DESCRIPTION  */}
							<div className="text-center">
								<textarea
									type="text"
									className="form-control"
									placeholder="Description"
									name="description"
								></textarea>
								<div className="line"></div>
							</div>
							<button className="btn-main-offer contact-btn" type="submit">
								Contact me
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
