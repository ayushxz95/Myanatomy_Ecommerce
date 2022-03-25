import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Cloths from './Pages/Itempage/Cloths';
import Grocery from './Pages/Itempage/Grocery';
import './App.css';
import Itempage from './Pages/Itempage/Itempage'
import Addproduct from './Pages/AddProduct/Addproduct';
import store from './store';
import Electronics from './Pages/Itempage/Electronics';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <>   
         <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Itempage}/>
                    <Route path='/item' component={Itempage}/>
                    <Route path='/grocery' component={Grocery}/>
                    <Route path='/electronics' component={Electronics}/>
                    <Route path='/cloths' component={Cloths}/>
                    <Route path='/add' component={Addproduct}/>
                </Switch>
            </BrowserRouter>
      </>
      </Provider>
    );
  }
}

export default App;
