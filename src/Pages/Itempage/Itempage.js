import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../Redux/Actions/ItemAction';
import Navbar from '../../Component/Navbar/Navbar';
import './Itempage.css';
import Card from '../../Component/Card/Card';

class Itempage extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    render(){
        const {items} = this.props;
       return ( 
           <>
           <div><Navbar/></div>
           <div className='itemcontainer'>  
              {
                    items.map(item => (
                    <Card key={item.id} type={item.type} name={item.name} company={item.company} id={item.id}/>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Itempage);


