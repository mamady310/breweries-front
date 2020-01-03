import React from "react";

class City extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        breweryData: [],
        cityDatay: [],
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
        let money = this.state.breweryData.map(item => {
            return <p>{item.city}</p>
            // commented out bc return <City key={item.city} city={item.city}/>
            })
       return (
          <div>
             <ul>{money}</ul>
          </div>
       )
    }
 }
 export default City;