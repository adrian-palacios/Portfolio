import React from "react";
import foodtruck from "../foodtrucksatx.png";
import orchard from "../orchard.png";
// font awesome import///
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX////////////////////////////////
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
	// FoodTruckAtx
	const openPopupboxFoodtruck = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={foodtruck}
					alt="foodtruckApp"
				/>
				<p>lorem ipsum dolor sit amet</p>
				<b>Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() => window.open("https://destinatx.github.io/Project-1/")}
				>
					https://destinatx.github.io/Project-1/
				</a>
				<br />
				<b>Github:</b>{" "}
				<a
					className="hyper-link"
					onClick={() => window.open("https://github.com/DestinATX/Project-1")}
				>
					https://github.com/DestinATX/Project-1
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigFoodtruck = {
		titleBar: {
			enable: true,
			text: "FoodTruckAtx Project",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// ORCHARD APP///
	const openPopupboxOrchard = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={orchard}
					alt="Orchard app"
				/>
				<p>lorem ipsum dolor sit amet</p>
				<b>Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://orchard2.herokuapp.com/", "_blank")
					}
				>
					https://orchard2.herokuapp.com/
				</a>
				<br />
				<b>Github:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/orchard-app/orchard-2.0")
					}
				>
					https://github.com/orchard-app/orchard-2.0
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigOrchard = {
		titleBar: {
			enable: true,
			text: "Orchard App",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">Portfolio</h1>
				<div className="image-box-wrapper row justify-content-center">
					<div className="portfolio-image-box" onClick={openPopupboxFoodtruck}>
						<img className="portfolio-image" src={foodtruck} alt="project1" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*  */}

					<div className="portfolio-image-box" onClick={openPopupboxOrchard}>
						<img className="portfolio-image" src={orchard} alt="project2" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigFoodtruck} />
			<PopupboxContainer {...popupboxConfigOrchard} />
		</div>
	);
};

export default Portfolio;
