import React, { Component } from "react";
import './nav.css';
import logo from '../img/petBookLogo_white.png'

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
                <div className="brand" id="nav_home" onClick={() => this.props.viewHandler("home")}>
                    <img src={logo} alt="logo" />
                    <h3>PetBook</h3>
                </div>
                {isAuth &&
                    <h3 id="welcome">Welcome, {this.props.user}</h3>
                }
                <div className="container__login">
                    <div className="dropdown">
                        <button className="dropbtn">Menu</button>
                        <div className="dropdown-content">
                            {isAuth &&
                                <div>
                                    <button id="nav__addPet" onClick={this.props.viewHandler} >Add Pet</button>
                                    <button onClick={this.props.viewHandler} id="nav__addAllergy">Add Allergy</button>
                                    <button onClick={this.props.viewHandler} id="nav__addCommand">Add Command</button>
                                    <button onClick={this.props.viewHandler} id="nav__follow">Follow</button>
                                </div>
                            }
                            <div>
                                <button id="nav__auth" onClick={() => {
                                    isAuth ? this.logOut() : this.displayLogin()
                                    this.props.viewHandler('auth')}}>
                                    Log {isAuth ? "out" : "in"} </button>
                                    {isAuth === true ? null : 
                                <button onClick={() => this.displayRegister()}>Register</button>
                                    }

                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Nav
