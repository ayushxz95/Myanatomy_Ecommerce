import * as React from 'react';
import { Component } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PropTypes } from "prop-types";




class Alert extends Component {

  constructor(props){
      super(props);
      this.state = {
          open: false,
      }
  }

  handleClick = () => {
    this.setState((prev) => ({ open: !prev.open }));
  };

  onSubmit = (e) => {
    if (this.props.Alertmessage === "Update") {
      this.props.updateItem(this.props.state, this.props.id, this.props.type, this.props.category);
      this.handleClick();
      this.props.handleClick();
      this.props.submit();
    } else if(this.props.Alertmessage === "Add"){
      this.props.addItems(this.props.state, this.props.category);
      this.handleClick();
      this.props.handleClick();
      this.props.AddSubmit();
    } else {
      this.handleClick();
      this.props.handleClick();
      this.props.submit();
    }
  };

     render(){
       return (
        <div>
        <Button color={this.props.color} onClick={this.handleClick} disabled={this.props.disabled}>
          {this.props.Alertmessage}
        </Button>
        <div className="alert-container">
        <Dialog open={this.state.open} onClose={this.handleClick}>
          <DialogTitle>Confirm</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.Alertmessage === "Update" || this.props.Alertmessage === "Add" ? `Are you sure ? You want to save the changes ?` : `Are you sure ? You don't want to save  the changes ?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick} color="error">Cancel</Button>
            <Button id="btn-alert" onClick={this.onSubmit} color="success">Sure</Button>
          </DialogActions>
         
        </Dialog>
        </div>
      </div>
        )
     }
}
Alert.propTypes = {
  updateItem: PropTypes.func,
  addItems: PropTypes.func,
  fetchItems: PropTypes.func,
  fetchCategoryItems: PropTypes.func,
}
  
export default Alert;