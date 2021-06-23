import React, { Component } from "react";

export default class CustomHeader extends Component {
  render() {
    return (
      <header className="sticky-sm-top">
        <nav className="navbar navbar-light container">
          <div className="container-fluid">
            <a className="navbar-brand">Pokedex Online</a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Encontrar pokemon"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Gotcha!
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}
