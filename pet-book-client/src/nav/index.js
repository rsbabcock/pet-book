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
                <div className="brand" id="nav_home" onClick={()=>this.props.viewHandler("home")}>
                    <img src={logo} alt="logo" />
                    <h3>PetBook</h3>
                </div>
                {isAuth &&
                    <div className="nav__links">
                        <button onClick={this.props.viewHandler} id="nav__addPet">Add Pet</button>
                        <button onClick={this.props.viewHandler} id="nav__addAllergy">Add Allergy</button>
                        <button onClick={this.props.viewHandler} id="nav__addCommand">Add Command</button>
                        <button>Follow</button>
                        <button>Settings</button>
                    </div>
                }
                <div className="container__login">
                    {isAuth &&
                        <h3>Welcome, {this.props.user}</h3>
                }
                    <button onClick={() => isAuth ? this.logOut() : this.displayLogin()}>
                        Log {isAuth ? "out" : "in"} </button>
                    <button onClick={() => this.displayRegister()}>Register</button>
                </div>
            </nav >
        )
    }
}

export default Nav
