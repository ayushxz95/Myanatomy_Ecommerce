import React, { Component } from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

class Cardlist extends Component {
     render(){
       return (
           <div className="flex-containerr">
                <div><Card type='Grocery' on='/grocery'/></div>
                <div><Card type='Cloths' on='/cloths'/></div>
                <div><Card type='Electronics' on='/electronics'/></div>
            </div>
        )
     }
}

export default Cardlist;