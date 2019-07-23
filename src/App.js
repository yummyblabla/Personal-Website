import React from "react";
import "./App.css";

import Header from "./containers/Header/index";
import Links from "./containers/Links/index";
import Home from "./containers/Home/index";
import Footer from './containers/Footer/index';
import Portfolio from "./containers/Portfolio/index";
import Contact from "./containers/Contact/index";

import BigTwo from "./containers/Portfolio/BigTwo/index";
import StudyBreak from "./containers/Portfolio/StudyBreak/index";
import Minesweeper from "./containers/Portfolio/Minesweeper/index";
import AccuracyGame from "./containers/Portfolio/AccuracyGame/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Links />
			<Switch>
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
					path="/contact"
					exact
					render={() => <Contact />}
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
				
			</Switch>
			<Footer />
			

		</BrowserRouter>
	);
}
