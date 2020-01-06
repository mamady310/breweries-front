import React, { Component } from "react";
// import React from "react";
import './App.css';
import Home from "./Home";
import Name from "./Name";
import City from "./City";
import Nav from "./Nav";
import Beer from "./Picture/beer.jpeg";
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  constructor (props){
    super (props)
  this.state = {
    breweryData: [],
 }
 };

 async componentDidMount() {
  fetch('https://breweries-back1.herokuapp.com/')
  .then(res => res.json())
  .then(res => {
    this.setState({breweryData: res})
    // console.log(this.state.breweryData)
  })
  }
render () {
   
 
  return (
 <Router>
   <div className="App">
     <Nav />
     <Switch>
       <Route path ="/" exact component={Home}/>
       <Route path="/Name" exact component={Name}/>
       {/* <Route path="/Name" exact component={Name}><ul>{list}</ul></Route> */}
       <Route path="/City" exact component={City}/>
       {/* <Route path="/City" exact component={City}><ul>{money}</ul></Route> */}
       <Route path="/Contact" exact component={Contact}/>
     </Switch>
   </div>
 </Router>
  );
}
}

export default App;