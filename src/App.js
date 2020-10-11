import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './containers/Header/index';
import Links from './containers/Links/index';
import Home from './containers/Home/index';
import Footer from './containers/Footer/index';
import Portfolio from './containers/Portfolio/index';
import Contact from './containers/Contact/index';

import DisasterPets from './containers/Portfolio/DisasterPets';
import MemoryGame from './containers/Portfolio/MemoryGame';
import Mahjong from './containers/Portfolio/Mahjong';
import Yalty from './containers/Portfolio/Yalty';
import Bike2Go from './containers/Portfolio/Bike2Go';
import BigTwo from './containers/Portfolio/BigTwo';
import StudyBreak from './containers/Portfolio/StudyBreak';
import Minesweeper from './containers/Portfolio/Minesweeper';
import AccuracyGame from './containers/Portfolio/AccuracyGame';


export default function App() {
  return (
    <BrowserRouter basename="/">
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
          path="/portfolio/bike2go"
          exact
          render={() => <Bike2Go />}
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
        <Route
          path="/portfolio/bike2go"
          exact
          render={() => <Bike2Go />}
        />
        <Route
          path="/portfolio/yalty"
          exact
          render={() => <Yalty />}
        />
        <Route
          path="/portfolio/mahjong"
          exact
          render={() => <Mahjong />}
        />
        <Route
          path="/portfolio/memorygame"
          exact
          render={() => <MemoryGame />}
        />
        <Route
          path="/portfolio/disasterpets"
          exact
          render={() => <DisasterPets />}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
