import React from "react";

class City extends React.Component {
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
        let money = this.state.breweryData.map(item => {
            return <City key={item.city} city={item.city}/>
            })
       return (
          <div>
             <ul>{money}</ul>
          </div>
       )
    }
 }
 export default City;