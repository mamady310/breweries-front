
import React from "react";
import { Link } from "react-router-dom";


class Nav extends React.Component {
    render() {
       return (
          <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/Name"> <li>Brewery by Name</li></Link>
                <Link to="/City"><li>Brewery by City</li></Link>
            </ul>

          </nav>
       )
    }
 }
 export default Nav;