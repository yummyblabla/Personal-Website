import React, { Component } from "react";
import "./App.css";

import HeaderComponent from "./containers/Header/headercomponent";
import MainComponent from "./containers/Main/maincomponent";
import ExperienceComponent from "./containers/Experience/experiencecomponent";
import AboutMeComponent from "./containers/AboutMe/aboutmecomponent";
import PortfolioComponent from "./containers/Portfolio/portfoliocomponent";
import { Route, Switch, withRouter } from "react-router-dom";

import { SlideOut } from "./containers/Slider/SlideOut";
import { animateSwitch } from "./containers/Slider/animateSwitch";

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

class App extends Component {
	goToExperience = event => {
		event.preventDefault();
		this.props.history.push("./experience");
	};

	goToHome = event => {
		event.preventDefault();
		this.props.history.push("./");
	};

	goToAboutMe = event => {
		event.preventDefault();
		this.props.history.push("./aboutme");
	};

	goToPortfolio = event => {
		event.preventDefault();
		this.props.history.push("./portfolio");
	};

	render() {
		return (
			<div className="App">
				<HeaderComponent
					home={this.goToHome}
					experience={this.goToExperience}
					aboutme={this.goToAboutMe}
					portfolio={this.goToPortfolio}
				/>
				<React.Fragment>
					<div className="container">
						<SwitchWithSlide>
							<Route
								path="/"
								exact
								render={() => <MainComponent />}
							/>
							<Route
								path="/experience"
								exact
								render={() => <ExperienceComponent />}
							/>
							<Route
								path="/aboutme"
								exact
								render={props => <AboutMeComponent />}
							/>
							<Route
								path="/portfolio"
								exact
								render={props => <PortfolioComponent />}
							/>
						</SwitchWithSlide>
					</div>
				</React.Fragment>
			</div>
		);
	}
}

export default withRouter(App);
