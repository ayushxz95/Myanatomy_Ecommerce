import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../Redux/Actions/ItemAction';
import Navbar from '../../Component/Navbar/Navbar';
import './Grocery.css';
import Card from '../../Component/Card/Card';

class Grocery extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    render(){
        const {items} = this.props;
        const Grocery = items.filter(item => (item.type === 'Grocery'));
       return ( 
           <>
           <div><Navbar/></div>
           <div className='itemcontainer'>
              {
                    Grocery.map(item => (
                    <Card key={item.id} type={item.type} name={item.name} company={item.company} id={item.key}/>
                    ))
               }
            </div>
            </>
        );
     }
}  
const mapStateToProps = state => {
    return {
        items: state.items.vals,
        newItem: state.items.val
    }
};
const mapDispatchToProps = dispatch => {
    return {
    fetchItems: () => dispatch(fetchItems())
}};
  
export default connect(mapStateToProps, mapDispatchToProps)(Grocery);


