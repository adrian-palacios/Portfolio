import React from "react";
import foodtruck from "../foodtrucksatx.png";
import orchard from "../orchard.png";
import webscraper from "../webscraper.jpeg";
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
				<p>
					FoodTrucksATX is a front end app that uses the Weather API, Google
					Maps API and Yelps API for users of all ages to determine the
					available food trucks in the user’s desired area of Austin, TX then
					allowing them to choose to walk, bike, take public transit, or
					personal car based on their desired time to arrival.
				</p>
				<b>Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://dc2projects.github.io/ATXFoodTruck/")
					}
				>
					https://dc2projects.github.io/ATXFoodTruck/
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
				<p>
					The Orchard app is intended for small time gardeners/farmers to help
					track and manage the plants they grow, and then track the price as
					well as expiration dates. Users can post listings for plants, fruits,
					etc. to help ease their sales.
				</p>
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

	// web scrapper
	const openPopupboxWebScraper = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={webscraper}
					alt="Webscraper app"
				/>
				<p>
					The web scrapper I built is built with Axios, Express, and Cheerio. In
					this personal project I scrapped The Guardian website and retrieved
					the title and url of all the articles on their home page.
				</p>
				<br />
				<b>Github:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/adrian-palacios/web-scrapper")
					}
				>
					https://github.com/adrian-palacios/web-scrapper
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigOrchard = {
		titleBar: {
			enable: true,
			text: "WebScraper App",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div id="portfolio" className="portfolio-wrapper">
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
					{/*  */}
					<div className="portfolio-image-box" onClick={openPopupboxWebScraper}>
						<img className="portfolio-image" src={orchard} alt="project2" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigFoodtruck} />
			<PopupboxContainer {...popupboxConfigOrchard} />
			<PopupboxContainer {...popupboxConfigWebScraper} />
		</div>
	);
};

export default Portfolio;
