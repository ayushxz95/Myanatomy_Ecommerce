import React, { Component } from "react";
import Navbar from "../../Component/Navbar/index";
import "./Itempage.css";
import Card from "../../Component/Card/index";
import PropTypes from "prop-types";
import { CgSmileSad } from "react-icons/cg";
import FormDialog from "../../Component/FormDialog/index";



class Itempage extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false,
    };
  }
  componentDidMount() {
    // console.log("Hi");
    this.props.fetchItems();
  }
  openModelClickHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    let items = this.props.searchedItems;
      if (Object.keys(items).length === 0) {
      return (
        <div>
          <Navbar />
          <div className="no-item-container">
          <div className="emoticon"><CgSmileSad color="ef257a" size="120px"/></div>
          <div className="no-item-message">No Item Found</div>
          <div className="Add-item-vacant">
                <FormDialog
                    message={"Add Product"}
                    buttonmessage={"Add"}
                    type={""}
                    company={""}
                    name={""}
                    id={""}
                />
          </div>
        </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <div className="content-container">
          <div className="itemcontainer">
            {Object.keys(items).map((key) => (
              <Card
                key={items[key].id}
                type={items[key].type}
                name={items[key].name}
                company={items[key].company}
                id={items[key].id}
                image={items[key].image}
              />
            ))}
          </div>
              <div className="Add-item">
                <FormDialog
                    message={"Add Product"}
                    buttonmessage={"Add"}
                    type={""}
                    company={""}
                    name={""}
                    id={""}
                />
                </div>
          </div>
        </div>
      );
    }
  }
}

Itempage.propTypes = {
  fetchItems: PropTypes.func,
};

export default Itempage;
