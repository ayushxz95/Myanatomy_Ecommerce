import * as React from "react";
import { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { BsPencilFill } from "react-icons/bs";
import DialogTitle from "@mui/material/DialogTitle";
import { FiPlusSquare } from "react-icons/fi";
import { PropTypes } from "prop-types";
import { AiFillEye } from "react-icons/ai";
import Alert from "../Alert/index";
import "./FormDialog.css";

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: this.props.name,
      company: this.props.company,
      type: this.props.type,
      image: this.props.image,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    this.setState((prev) => ({ open: !prev.open }));
  };

  onAddSubmit = () => {
    this.setState({
      name: "",
      company: "",
      type: "",
      image: "",
    });
  };

  onSubmit = () => {
    this.setState({
      name: this.props.name,
      company: this.props.company,
      type: this.props.type,
      image: this.props.image,
    });
  };

  render() {
    console.log(this.props.category);
    const { company, name, type, image } = this.state;
    const { buttonmessage } = this.props;
    const isCompanyNameTouched = company !== this.props.company ? true : false;
    const isNameTouched = name !== this.props.name ? true : false;
    const isTypeTouched = type !== this.props.type ? true : false;
    const isImageTouched = image !== this.props.image ? true : false;
    const isCompanyNameEmpty = company === "" ? true : false;
    const isNameEmpty = name === "" ? true : false;
    const isTypeEmpty = type === "" ? true : false;
    const isImageEmpty = image === "" ? true : false;
    const isNameValid = isNameTouched && !isNameEmpty ? true : false;
    const isCompanyNameValid =
      isCompanyNameTouched && !isCompanyNameEmpty ? true : false;
    const isTypeValid = isTypeTouched && !isTypeEmpty ? true : false;
    const isImageValid = isImageTouched && !isImageEmpty ? true : false;
    let disabled = true;
    if (isCompanyNameValid) {
      if (!isNameEmpty && !isTypeEmpty && !isImageEmpty) {
        disabled = false;
      }
    }
    if (isNameValid) {
      if (!isCompanyNameEmpty && !isTypeEmpty && !isImageEmpty) {
        disabled = false;
      }
    }
    if (isTypeValid) {
      if (!isCompanyNameEmpty && !isNameEmpty && !isImageEmpty) {
        disabled = false;
      }
    }
    if (isImageValid) {
      if (!isCompanyNameEmpty && !isTypeEmpty && !isNameEmpty) {
        disabled = false;
      }
    }
    if (type === "Select") {
      disabled = true;
    }
    if (company.length < 4) {
      disabled = true;
    }
    if(isImageEmpty === true){
      disabled = true;
    }
    let cancelbtn = false;
    if (isCompanyNameTouched || isTypeTouched || isNameTouched) {
      cancelbtn = true;
    }
    return (
      <div>
        <Button
          variant="text"
          onClick={this.handleClick}
          title={this.props.buttonmessage}
        >
          {this.props.buttonmessage === "Update" ? (
            <BsPencilFill size="18px" color="green" />
          ) : (
            <FiPlusSquare size="30px" color="black" />
          )}
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClick}>
          <form className="Dialog-container">
            <DialogTitle color="#ef257a">{this.props.message}</DialogTitle>
            <DialogContent>
              <div className="text-field">
                {company.length > 3 ? (
                  <TextField
                    className="textfield"
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Company"
                    value={company}
                    inputProps={{ minLength: 4 }}
                    onChange={this.onChange}
                    name="company"
                    type="text"
                    size="small"
                    variant="outlined"
                  />
                ) : (
                  <TextField
                    className="textfield"
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Company"
                    value={company}
                    inputProps={{ minLength: 4 }}
                    onChange={this.onChange}
                    name="company"
                    type="text"
                    color="error"
                    size="small"
                    variant="outlined"
                  />
                )}
                {name.length > 3 ? (
                  <TextField
                    className="textfield"
                    required
                    id="name"
                    label="Name"
                    inputProps={{ minLength: 4 }}
                    value={name}
                    onChange={this.onChange}
                    name="name"
                    type="text"
                    size="small"
                    variant="outlined"
                    margin="dense"
                  />
                ) : (
                  <TextField
                    className="textfield"
                    required
                    id="name"
                    label="Name"
                    color="error"
                    inputProps={{ minLength: 4 }}
                    value={name}
                    onChange={this.onChange}
                    name="name"
                    type="text"
                    size="small"
                    variant="outlined"
                    margin="dense"
                  />
                )}
                <div className="eye-container">
                  <TextField
                    className="textfield"
                    InputProps={{
                      style: {
                        paddingRight: "14px",
                      },
                    }}
                    required
                    id="image"
                    label="Image"
                    value={image}
                    onChange={this.onChange}
                    name="image"
                    type="text"
                    size="small"
                    variant="outlined"
                    margin="dense"
                  />
                  <a
                    href={image}
                    target="_blank"
                    className="eye-field"
                    title="Preview"
                  >
                    <AiFillEye color="black" size="20px" />
                  </a>
                </div>
                {/* {this.props.buttonmessage === "Add" ? (
                  <select
                    className="select-field"
                    value={this.props.category}
                    name="type"
                    onChange={this.onChange}
                  >
                    <option value="Select">Select</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Cloths">Cloths</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                ) : ( */}
                  <select
                    className="select-field"
                    value={type}
                    name="type"
                    onChange={this.onChange}
                  >
                    <option value="Select">Select</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Cloths">Cloths</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                {/* )} */}
              </div>
            </DialogContent>
            <DialogActions>
              {cancelbtn === true ? (
                <Alert
                  state={this.state}
                  id={this.props.id}
                  type={this.props.type}
                  statetype={this.state.type}
                  Alertmessage={"Cancel"}
                  handleClick={this.handleClick}
                  color={"error"}
                  submit={this.onSubmit}
                  AddSubmit={this.onAddSubmit}
                />
              ) : (
                <Button color="error" onClick={this.handleClick}>
                  Cancel
                </Button>
              )}
              {disabled === false ? (
                <Alert
                  state={this.state}
                  disabled={disabled}
                  id={this.props.id}
                  type={this.props.type}
                  statetype={this.state.type}
                  Alertmessage={buttonmessage}
                  handleClick={this.handleClick}
                  color={"success"}
                  submit={this.onSubmit}
                  AddSubmit={this.onAddSubmit}
                />
              ) : (
                <button
                  className="disabled-button"
                  title="Please fill/change the fields"
                >
                  {buttonmessage}
                </button>
              )}
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

FormDialog.propTypes = {
  updateItem: PropTypes.func,
  addItems: PropTypes.func,
};


export default FormDialog;
