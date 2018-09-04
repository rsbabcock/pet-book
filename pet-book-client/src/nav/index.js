import React, { Component } from "react";
import './nav.css';

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
        <h3>This is a nav bar</h3>
        <ul>
          { isAuth &&
            <span>
              <li>
                <h3>Welcome, {this.props.user}</h3>
              </li>
              {/* <li>
                <button onClick={ () => this.displayProdForm() }>Sell</button>
              </li> */}
            </span>
          }
          <li>
            <button onClick = { () => isAuth ? this.logOut() : this.displayLogin()}> Log {isAuth ? "out" : "in"} </button>
          </li>
          <li>
            <button onClick={ () => this.displayRegister()}>Register</button>
          </li>
        </ul>
      </nav>
    )
  }

}

export default Nav
