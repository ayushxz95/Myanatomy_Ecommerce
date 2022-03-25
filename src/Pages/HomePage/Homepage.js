import React, { Component } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import '../Itempage/Cloths';
import './Homepage.css';
import Cardlist from '../../Component/Cardlist/Cardlist';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render(){
       return ( 
           <>
           <div><Navbar/></div>
           <div className='cardlist-container'>
              <Cardlist/>
           </div>
           <div className='button-container'>
               <Link to='/item'><button>ALL Products</button></Link>
           </div>
          </> 
        );
     }
}  

  
export default HomePage;


