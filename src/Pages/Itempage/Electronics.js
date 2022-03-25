import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../Redux/Actions/ItemAction';
import Navbar from '../../Component/Navbar/Navbar';
import Card from '../../Component/Card/Card';
import './Electronics.css';

class Electronics extends Component {
      componentDidMount() {
          this.props.fetchItems();
      }
      render(){
        const {items} = this.props;
        const Electronics = items.filter(item => (item.type === 'Electronics'));
                  return ( 
                      <>
                      <div><Navbar/></div>
                      <div className='gridd-container'>
                         {  
                            Electronics.map(item => (
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
    
  export default connect(mapStateToProps, mapDispatchToProps)(Electronics);