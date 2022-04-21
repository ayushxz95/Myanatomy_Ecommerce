import React, { Component } from "react";
// import { withRouter } from "react-router";
import {
  fetchCategoryItemsSuccess,
  fetchItems,
} from "../../Redux/Actions/ItemAction";
import { connect } from "react-redux";
import "./Navbar.css";
import { GoSearch } from "react-icons/go";
import { PropTypes } from "prop-types";
import { searchItem } from "../../Redux/Actions/ItemAction";
import ResNavbar from "../ResNavbar/index";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";


class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false,
      activeCategory: "Home",
    };
  }
  openModelClickHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  onChange = (e) => {
    this.props.searchItem(e.target.value, this.props.category);
  };
  render() {
    return (
      <div className="nav">
        <ul>
          <li className="hamberger-menu-container">
            <ResNavbar/>
          </li>
          {this.state.activeCategory === "Home" ? (
            <li>
              <a
                className="active"
                onClick={() => {
                  this.props.fetchItems();
                  this.setState({ activeCategory: "Home" });
                }}
              >
                Home
              </a>
            </li>
          ) : (
            <li>
              <a
                onClick={() => {
                  this.props.fetchItems();
                  this.props.changeCategory("Home");
                  this.setState({ activeCategory: "Home" });
                }}
              >
                Home
              </a>
            </li>
          )}

          {this.state.activeCategory === "Cloths" ? (
            <li>
              <a
                className="active"
                onClick={() => {
                  this.props.fetchCategoryItems("Cloths");
                  this.setState({ activeCategory: "Cloths" });
                }}
              >
                Cloths
              </a>
            </li>
          ) : (
            <li>
              <a
                onClick={() => {
                  this.props.changeCategory("Cloths");
                  this.props.fetchCategoryItems("Cloths");
                  this.setState({ activeCategory: "Cloths" });
                }}
              >
                Cloths
              </a>
            </li>
          )}

          {this.state.activeCategory === "Grocery" ? (
            <li>
              <a
                className="active"
                onClick={() => {
                  this.props.fetchCategoryItems("Grocery");
                  this.setState({ activeCategory: "Grocery" });
                }}
              >
                Grocery
              </a>
            </li>
          ) : (
            <li>
              <a
                onClick={() => {
                  this.props.changeCategory("Grocery");
                  this.props.fetchCategoryItems("Grocery");
                  this.setState({ activeCategory: "Grocery" });
                }}
              >
                Grocery
              </a>
            </li>
          )}

          {this.state.activeCategory === "Electronics" ? (
            <li>
              <a
                className="active"
                onClick={() => {
                  this.props.fetchCategoryItems("Electronics");
                  this.setState({ activeCategory: "Electronics" });
                }}
              >
                Electronics
              </a>
            </li>
          ) : (
            <li>
              <a
                onClick={() => {
                  this.props.changeCategory("Electronics");
                  this.props.fetchCategoryItems("Electronics");
                  this.setState({ activeCategory: "Electronics" });
                }}
              >
                Electronics
              </a>
            </li>
          )}
          <li className="search-bar">
            <i>
              <GoSearch />
            </i>
            <input
              className="search-input"
              type="text"
              onChange={this.onChange}
              placeholder=" Search..."
            ></input>
          </li>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  fetchCategoryItems: PropTypes.func,
  fetchItems: PropTypes.func,
  searchItem: PropTypes.func,
  changeCategory: PropTypes.func,
}

export default Navbar;