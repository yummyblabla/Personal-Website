import React, { PureComponent } from "react";
import "./App.css";

import HeaderComponent from "./containers/Header/headercomponent";
import MainComponent from "./containers/Main/maincomponent";
import ExperienceComponent from "./containers/Experience/experiencecomponent";
import AboutMeComponent from "./containers/AboutMe/aboutmecomponent";
import PortfolioComponent from "./containers/Portfolio/portfoliocomponent";

import BigTwoComponent from "./containers/Portfolio/BigTwo/bigtwocomponent";
import StudyBreakComponent from "./containers/Portfolio/StudyBreak/studybreakcomponent";
import MinesweeperComponent from "./containers/Portfolio/Minesweeper/minesweepercomponent";
import ClickAccuracyComponent from "./containers/Portfolio/ClickAccuracy/clickaccuracycomponent";

import { Route, Switch, withRouter } from "react-router-dom";

import { SlideOut } from "./containers/Slider/SlideOut";
import { animateSwitch } from "./containers/Slider/animateSwitch";

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<HeaderComponent />
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
								render={() => <AboutMeComponent />}
							/>
							<Route
								path="/portfolio"
								exact
								render={() => <PortfolioComponent />}
							/>
							<Route
								path="/bigtwo"
								exact
								render={() => <BigTwoComponent />}
							/>
							<Route
								path="/studybreak"
								exact
								render={() => <StudyBreakComponent />}
							/>
							<Route
								path="/minesweeper"
								exact
								render={() => <MinesweeperComponent />}
							/>
							<Route
								path="/clickaccuracygame"
								exact
								render={() => <ClickAccuracyComponent />}
							/>
						</SwitchWithSlide>
					</div>
				</React.Fragment>
			</div>
		);
	}
}

export default withRouter(App);
