import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
     render(){
       return (
           <div className='nav'>
                {/* <p>E Commerce</p>
                <div className='add-container'>
                   <Link to='/add'><button>ADD Products</button></Link>
                   <Link to='/electronics'><button>Electronics</button></Link>
                   <Link to='/grocery'><button>Grocery</button></Link>
                   <Link to='/cloths'><button>Cloths</button></Link>
               </div> */}
               <ul>
                    <li><a className="active" href="/home" >Ecommerce</a></li>
                    <li><a href="/cloths">Cloths</a></li>
                    <li><a href="/grocery">Grocery</a></li>
                    <li><a href="/electronics">Electronics</a></li>
                    <li><a href="/add">Add Product</a></li>
               </ul>
            </div>
        )
     }
}

export default Navbar;