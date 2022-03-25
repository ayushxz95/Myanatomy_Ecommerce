import React, { Component } from 'react';
import  { connect } from 'react-redux';
import  { addItems } from '../../Redux/Actions/ItemAction';
import Navbar from '../../Component/Navbar/Navbar';
import './Addproduct.css'; 

class Addproduct extends Component {
    state = {
        name: "",
        company: "",
        type: ""
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    // e && e.target && e.target.value
    onSubmit = e => {
        e.preventDefault();
        this.props.addItems(this.state);
        this.props.history.push('./item');
        this.setState({
            name: "",
            company: "",
            type: ""
        })

    }
     render(){      
       const { usercompany, username, usertype } = this.state;
       return ( <>
        <div><Navbar/></div>
           <div className='add1-container'>
                <div> <h1>Create Product</h1> </div>
               <div>
                   <form onSubmit={this.onSubmit}>
                       <div><label>Product Type</label></div>
                       <div >
                           <input type='text' value={usertype} onChange={this.onChange} name='type'></input>
                       </div>
                       <div><label>Product Company</label></div>
                       <div className='input-container'>
                           <input type='text' value={usercompany} onChange={this.onChange} name='company'></input>
                       </div>
                       <div><label>Product Name</label></div>
                       <div className='input-container'>
                           <input type='text' value={username} onChange={this.onChange} name='name'></input>
                       </div>
                       <div>
                            <button type='submit'>Add Product</button>
                       </div>
                   </form>
               </div>
            </div>
            </>
        )
     }
}

export default connect(null, { addItems })(Addproduct);