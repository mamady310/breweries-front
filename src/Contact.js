import React from "react";
import axios from "axios";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.state = {city: ''};
        this.state = {state: ''};
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);

      }
      handleChangeName(event) {
        event.preventDefault();
        this.setState({name: event.target.value});
      }
      handleChangeCity(event){
        event.preventDefault();
        this.setState({city: event.target.value});
      }
      handleChangeState(event) {
        event.preventDefault();
        this.setState({state: event.target.value})
      }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        
        return (
          <div>
            <h1>New Brewery 
            </h1>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>
                Name
                <input type="text" value={this.state.value} onChange={this.handleChangeName} />
              </label>
              <label>
                City
                <input type="text" value=
                {this.state.value} onChange=
                {this.handleChangeCity}/>
              </label>
              <label>
                State
                <input type="text" value=
                {this.state.value} onChange=
                {this.handleChangeState}/>
              </label>
              <input type="submit" value="Submit" />
            </form>
            </div>
          );
        }
      }
 export default Contact;