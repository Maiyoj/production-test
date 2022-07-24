import { NavLink } from "react-router-dom";
const linkStyles = {

    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "white",
  };

function Navbar(){
   return ( <>
 <h1 className="n"> Maps n Bags</h1>
   <div className="nav">
      
    <NavLink
    to="/"
    exact
    style={linkStyles}
    >
     Home
    </NavLink>

    <NavLink
    to="/about"
    style={linkStyles}
    exact
    >
     About
    </NavLink>
    <NavLink
     style={linkStyles}
    to="/contact"
    exact
    >
    Contact
    </NavLink>
    </div> 
    </>)

    
   
}

export default Navbar;