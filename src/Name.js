import React from "react";

class Name extends React.Component {
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
    render() {
        let list = this.state.breweryData.map(item => {
            return <Name key={item.name} name={item.name}/>
            })  
       return (
          <div>
             <ul>{list}</ul>
          </div>
       )
    }
 }
 export default Name;