import React from "react";

class Name extends React.Component {
    render() {
       return (
          <div>
             <ul>{this.props.name}</ul>
          </div>
       )
    }
 }
 export default Name;