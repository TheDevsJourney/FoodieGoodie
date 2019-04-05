import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  _isMounted = false;

  state = {
    search: "",
    recipe: []
  };

  componentDidMount() {
    this._isMounted = true;

    // Get Local storage for recipe
    const json = localStorage.getItem("recipe");
    const recipe = JSON.parse(json);

    // Get Local storage for search
    const jsonSearch = localStorage.getItem("search");
    const search = JSON.parse(jsonSearch);

    if (this._isMounted) {
      this.setState({
        recipe,
        search
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate() {
    // Set Local storage for recipe
    const recipe = JSON.stringify(this.state.recipe);
    localStorage.setItem("recipe", recipe);

    // Set Local storage for search
    const search = JSON.stringify(this.state.search);
    localStorage.setItem("search", search);
  }

  onSubmit = search => {
    this.setState({
      search
    });
  };

  handleClick = recipe => {
    this.setState({
      recipe
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header onSubmit={this.onSubmit} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home handleClick={this.handleClick} onSubmit={this.onSubmit} />
              )}
            />
            <Route
              path="/recipes"
              component={() => (
                <Recipes
                  search={this.state.search}
                  handleClick={this.handleClick}
                />
              )}
            />
            <Route
              path="/recipe"
              component={() => <Recipe recipe={this.state.recipe} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
