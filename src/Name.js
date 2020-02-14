import React from "react";
import { Link } from "react-router-dom";

class Name extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        breweryData: [],
     }
     };
    
     async componentDidMount() {
      fetch('https://breweries-back.herokuapp.com/')
      .then(res => res.json())
      .then(res => {
        this.setState({breweryData: res})
        console.log(this.state.breweryData)
      })
      }
    render() {
        let list = this.state.breweryData.map(item => {
            return <li><a target="_blank" href={item.website_url}>{item.name}</a></li>
            })  
         let url = this.state.breweryData.map(item => {
            return<p>{item.website_url}</p>

         })
       return (
          <div >
            
            <ul>{list}</ul>
            
          </div>
       )
    }
 }
 export default Name;