import React from "react";
import "./App.css";

import Header from "./containers/Header/index";
import Links from "./containers/Links/index";
import Home from "./containers/Home/index";
import Footer from './containers/Footer/index';
import Portfolio from "./containers/Portfolio/index";
import AboutMeComponent from "./containers/AboutMe/aboutmecomponent";

import BigTwo from "./containers/Portfolio/BigTwo/index";
import StudyBreak from "./containers/Portfolio/StudyBreak/index";
import Minesweeper from "./containers/Portfolio/Minesweeper/index";
import AccuracyGame from "./containers/Portfolio/AccuracyGame/index";

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";


function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Links />
				<Route 
					path="/"
					exact
					render={() => <Home />}
				/>
				<Route
					path="/portfolio"
					exact
					render={() => <Portfolio />}
				/>
				<Route
					path="/aboutme"
					exact
					render={() => <AboutMeComponent />}
				/>
				<Route
					path="/portfolio/bigtwo"
					exact
					render={() => <BigTwo />}
				/>
				<Route
					path="/portfolio/studybreak"
					exact
					render={() => <StudyBreak />}
				/>
				<Route
					path="/portfolio/minesweeper"
					exact
					render={() => <Minesweeper />}
				/>
				<Route
					path="/portfolio/accuracygame"
					exact
					render={() => <AccuracyGame />}
				/>
				<Footer />
			</div>
			
		</Router>
	);
}

export default withRouter(App);
