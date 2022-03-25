import React, {Component} from 'react';
import { deleteItem } from '../../Redux/Actions/ItemAction';
import { connect } from 'react-redux';
import './Card.css'

class Card extends Component{
   
    render(){
        
        const { name, type, company, id } = this.props ;
        console.log(id);
        return (
           <div className="card">
               <h2>{name}</h2>
               <h3>{type}</h3>
               <h3>{company}</h3>
               <button >View Details</button>
               <button onClick={deleteItem(id)}>Delete</button>
           </div>
        )
    }
}

export default connect(null, {deleteItem})(Card);