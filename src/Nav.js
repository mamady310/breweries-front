
import React from "react";
import { Link } from "react-router-dom";


class Nav extends React.Component {
    render() {
       return (
          <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/Name"> <li>Breweies by Name</li></Link>
                <Link to="/City"><li>Breweries by City</li></Link>
                
            </ul>

          </nav>
       )
    }
 }
 export default Nav;