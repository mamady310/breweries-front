import React from "react";

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
            return<p>{item.name}</p>
            // return <Name key={item.name} name={item.name}/>
            })  
         let url = this.state.breweryData.map(item => {
            return<p>{item.website_url}</p>

         })
       return (
          <div>
            
            <div>{list}</div><div>{url}</div>
            
          </div>
       )
    }
 }
 export default Name;