import { Component } from "react";
import "./Navbar.css";
import img from "../../assets/ElearningLogo.svg";

class Navbar extends Component {
  state = {
    mobileMenuOpen: false, // Track the state of the mobile menu separately
    currentActive: null,
  };

  handleMobileMenuClick = () => {
    // Toggle the mobile menu state when the mobile icon is clicked
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  handleClick = (index) => {
    this.setState({
      currentActive: index,
    });
  };

  render() {
    return (
      <>
        <nav>
          <a href="#">
            <img src={img} alt="Logo" />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.mobileMenuOpen ? "active" : ""}
            >
              {["Home", "Aboutus", "Courses", "Service", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={
                        index === this.state.currentActive ? "active-link" : ""
                      }
                      onClick={() => {
                        this.handleClick(index);
                        if (window.innerWidth <= 769) {
                          // Close the mobile menu when a link is clicked on small screens
                          this.handleMobileMenuClick();
                        }
                      }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div id="mobile" onClick={this.handleMobileMenuClick}>
            <i
              id="bar"
              className={this.state.mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
// Last_update 2