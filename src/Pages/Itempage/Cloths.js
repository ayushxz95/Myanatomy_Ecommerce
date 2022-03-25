import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../Redux/Actions/ItemAction';
import Navbar from '../../Component/Navbar/Navbar';
import './Cloths.css';
import Card from '../../Component/Card/Card';

class Cloths extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    
    render(){
        const {items} = this.props;
        const Cloths = items.filter(item => (item.type === 'Cloths'));
                return ( 
                    <>
                    <div><Navbar/></div>
                    <div className='grid-container'>
                        {     
                        
                                Cloths.map(item => (
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
    fetchItems: () => dispatch(fetchItems()),
}};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cloths);


