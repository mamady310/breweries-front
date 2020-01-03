import React, { Component } from "react";
// import React from "react";
import './App.css';
import Home from "./Home";
import Name from "./Name";
import City from "./City";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  constructor (props){
    super (props)
  this.state = {
    breweryData: [],
 }
 };

 async componentDidMount() {
  fetch('http://localhost:5000/')
  .then(res => res.json())
  .then(res => {
    this.setState({breweryData: res})
    console.log(this.state.breweryData)
  })
  }
render () {
  let list = this.state.breweryData.map(item => {
  return <Name key={item.name} name={item.name}/>
  })
  return (
 <Router>
   <div className="App">
     <Nav />
     <Switch>
       <Route path ="/" exact component={Home}/>
       <Route path="/Name" component={Name}><ul>{list}</ul></Route>
       <Route path="/City" component={City}/>
     </Switch>
  <ul>{list}</ul>
   </div>
 </Router>
  );
}
}

export default App;