import "../Styles/Navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Nature's Wrath</h1>
      <div className="links">
        <a href="/Home">Home</a>
        <div className="dropdown">
          <a href="/Types" className="dropbtn">Types of Natural Disasters</a>
          <div className="dropdown-content">
            <Link to="/Types#test">Placeholder1 </Link>
            <Link to="/Types#test">Placeholder2 </Link>
          </div>
        </div>            
        <a href="/Major">Major Disasters</a>
        <a href="/Safety" >Safety Information</a>
          
      </div>
    </nav>

  );
}
 
export default Navbar;