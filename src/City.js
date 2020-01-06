import React from "react";

class City extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        breweryData: [],
        cityData: [],
     }
     };
    
     async componentDidMount() {
      fetch('https://breweries-back1.herokuapp.com/')
      .then(res => res.json())
      .then(res => {
        this.setState({breweryData: res})
      //   console.log(this.state.breweryData)
      })
      }
    render() {
        
        let money = this.state.breweryData.map(item => {return <p>{item.city}</p>
            })

            const uniqueCities = [...new Set(this.state.breweryData.map(x => x.city))];
            const uniqueArray = uniqueCities.map (item=><p>{item}</p>)
            console.log(uniqueCities)
      //   let names = money
      //   let unique = [...new Set(names)];
      //   console.log(unique);   
       return (
          <div className="C">
            <p>{uniqueArray}</p>
            
          </div>
       )
    }
 }
 export default City;