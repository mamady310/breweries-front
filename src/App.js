import React, { Component } from "react";
import './App.css';
import Home from "./Home";
import Name from "./Name";
import City from "./City";
import Nav from "./Nav";
// import Beer from "./Picture/beer.jpeg"; will import picture from local file later
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  constructor (props){
    super (props)
  this.state = {
    drinksData: [],
 }
 };

 async componentDidMount() {
  fetch('https://breweries-back.herokuapp.com/')
  .then(res => res.json())
  .then(res => {
    this.setState({drinksData: res})
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
       <Route path="/City" exact component={City}/>
       <Route path="/Contact" exact component={Contact}/>
     </Switch>
   </div>
 </Router>
  );
}
}

export default App;