import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DataContext from "./components/_common/DataProvider";
import { useFetch } from "./components/_common/Fetch";
import Main from "./components/Main";
import Gender from "./components/Gender";
import Menu from "./components/Menu";
import Deck from "./components/Deck";
import Result from "./components/Result";
import ScrollToTop from "./components/_common/ScrollToTop";
import "./assets/css/main.css";

const App: React.FC = () => {
  const data = useFetch("/questions");
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/gender">
          <Gender />
        </Route>
        <Route exact path="/menu">
          <DataContext.Provider value={data!}>
            <Menu />
          </DataContext.Provider>
        </Route>
        <Route exact path="/shuffle">
          <Deck />
        </Route>
        <Route exact path="/result">
          <DataContext.Provider value={data!}>
            <Result />
          </DataContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
