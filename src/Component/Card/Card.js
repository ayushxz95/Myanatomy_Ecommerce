import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PropTypes } from "prop-types";
import "./Card.css";
import FormDialog from "../FormDialog/index";


class Card extends Component {
  handleDelete = () => {
      this.props.deleteItem(this.props.id, this.props.category);
  }
  render() {
    const { name, type, company, id, image } = this.props;
    // if(type === 'Cloths')
    // var image = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    // else if(type === 'Electronics')
    // var image = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
    // else if(type === 'Grocery')
    // var image = "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
    return (
      <div className="card">
        <div className="card-banner">
          <p className="category-tag popular">{type}</p>
          <p className="delete-tag popular">
            <button
            className="delete-button"
                onClick={() => {this.handleDelete()}}
                title="Delete"
                id="btn-card33"
              >
                <AiFillDelete size="14px" color="white" />
              </button></p>
          <img
            className="banner-img"
            src={image}
            alt=""
          />
        </div>
        <div className="card-body">
          <div>
          <h2 className="card-title">{name}</h2>
          <h4 className="company-name">{company}</h4>
          </div>
          <div className="button-holder">
              <FormDialog 
              message={"Update Product"}
              buttonmessage={"Update"}
              type={type}
              company={company}
              name={name}
              image={image}
              id={id}
              />
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
    deleteItem: PropTypes.func
}

export default Card;