import React, { Component } from "react";
import './nav.css';
import logo from '../img/petBookLogo_white.png'
// import {Navbar, Brand} from 'react-bootstrap'

class Nav extends Component {

    displayRegister() {
        this.props.setAuthState({
            register: true,
            showUserForm: true
        })
    }

    displayLogin() {
        this.props.setAuthState({
            register: false,
            showUserForm: true
        })
    }

    //   displayProdForm() {
    //     this.props.displaySell()
    //   }

    logOut() {
        this.props.logOut()
    }

    render() {
        const isAuth = this.props.isAuth
        console.log("isAuth?", isAuth)
        return (
            <nav>
                <div class="brand">
                    <img id="home" src={logo} alt="logo" />
                    <h3>PetBook</h3>
                </div>
                {isAuth &&
                    <div class="nav__links">
                        <button>Add Pet</button>
                        <button>Follow</button>
                    </div>
                }
                <div className="container__login">
                    <button onClick={() => isAuth ? this.logOut() : this.displayLogin()}>
                        Log {isAuth ? "out" : "in"} </button>
                    <button onClick={() => this.displayRegister()}>Register</button>
                    {isAuth &&
                        <h3>Welcome, {this.props.user}</h3>
                }
                </div>
            </nav >
        )
    }
}

export default Nav

// <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <img id="home" src={logo} alt="logo" /> 
//       <h3>PetBook</h3>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//      {isAuth &&
//       <NavItem eventKey={1} href="#">
//         Add Pet
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Follow
//       </NavItem>
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="#">
//         Welcome, {this.props.user}
//       </NavItem>
//          }
//       <NavItem eventKey={2} href="#">
//         <button onClick={() => isAuth ? this.logOut() : this.displayLogin()}>
//          Log {isAuth ? "out" : "in"} </button>
//       </NavItem>
//       <NavItem eventKey={3} href="#">
//          <button onClick={() => this.displayRegister()}>Register</button>
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>;