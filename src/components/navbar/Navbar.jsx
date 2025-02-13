import "./navbar.css"
import logo from "../../assets/images/MC logo.png"


const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="logo">
        <img src={logo} alt="medic-logo" />
        <h1>Medi Cloud</h1>
      </div>

      <div className="nav-items">
        <h3>Home</h3>
        <h3>Contact</h3>
        <h3>About</h3>
      </div>

      <div className="side-nav-items">
        <h3>Register</h3>
      </div>


    </div>
  )
}

export default Navbar