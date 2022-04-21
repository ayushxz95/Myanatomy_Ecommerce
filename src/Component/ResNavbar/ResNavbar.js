import React, { Component } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  fetchCategoryItemsSuccess,
  fetchItems,
  searchItem,
} from "../../Redux/Actions/ItemAction";
import "./ResNavbar.css";

class ResNavbar extends Component {
  constructor() {
    super();
    this.state = {
      isDrawerOpen: false,
    };
  }
  handelDrawer = () => {
    this.setState((prev) => ({ isDrawerOpen: !prev.isDrawerOpen }));
  };
  onChange = (e) => {
    this.props.searchItem(e.target.value);
  };
  render() {
    return (
      <div>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={this.handelDrawer}
        >
          <AiOutlineMenu color="white" className="menu-icon" />
        </IconButton>
        <Drawer
          anchor="left"
          open={this.state.isDrawerOpen}
          onClose={this.handelDrawer}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography variant="h5" component="div">
              Menu
            </Typography>
            <div className="menu-items">
              <div>
                <a
                  className="box"
                  onClick={() => {
                    this.props.fetchItems();
                    this.handelDrawer();
                  }}
                >
                  Home
                </a>
              </div>
              <div>
                <a
                  className="box"
                  onClick={() => {
                    this.props.fetchCategoryItems("Cloths");
                    this.handelDrawer();
                  }}
                >
                  Cloths
                </a>
              </div>
              <div>
                <a
                  className="box"
                  onClick={() => {
                    this.props.fetchCategoryItems("Electronics");
                    this.handelDrawer();
                  }}
                >
                  Electronics
                </a>
              </div>
              <div>
                <a
                  className="box"
                  onClick={() => {
                    this.props.fetchCategoryItems("Grocery");
                    this.handelDrawer();
                  }}
                >
                  Grocery
                </a>
                <a className="box-search">
                  <i>
                    <GoSearch color="#ef257a"/>
                  </i>
                  <input
                    className="search-input"
                    type="text"
                    onChange={this.onChange}
                    placeholder=" Search..."
                  ></input>
                </a>
              </div>
            </div>
          </Box>
        </Drawer>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCategoryItems: (category) =>
//       dispatch(fetchCategoryItemsSuccess(category)),
//     fetchItems: () => dispatch(fetchItems()),
//     searchItem: (text) => dispatch(searchItem(text)),
//   };
// };

ResNavbar.propTypes = {
  fetchCategoryItems: PropTypes.func,
  fetchItems: PropTypes.func,
  searchItem: PropTypes.func,
};

export default ResNavbar;
