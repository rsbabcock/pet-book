import React, { Component } from 'react';
import Auth from './auth'
import Nav from './nav'
import './App.css';
import DashBoard from './dashboard/board';


class App extends Component {

  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    isAuth: false,
    register: false,
    showUserForm: false,
    user: "",
    showSellForm: false,
    myPets: [],
    followedPets: []
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    let user = localStorage.getItem("user")
    if (token) {
      console.log("User still logged in", user)
      this.setState({
        isAuth: true,
        user: user
      });
    }
    this.getMyPets()
  }

  

  setAuthState(authObj) {
    this.setState(authObj)
  }

  displaySell() {
    this.setState({showSellForm: true})
  }

  logOut() {
    console.log("log OUT", localStorage.getItem("token"));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Set everything to false again?
    this.setAuthState({
      isAuth: false,
      user: "",
    })
    console.log(localStorage.getItem("token"));
  }

  getMyPets(){
    fetch(`http://127.0.0.1:8000/pets/`)
    .then((response) => {
      return response.json();
    })
    .then((pets) => {
      // if
      console.log('pets', pets);
      this.setState({myPets: pets})
    })
    .catch((err) => {
      console.log("fetch no like you, brah", err);
    })
}

  render() {
    return (
      <div className="App">
        <Nav isAuth={this.state.isAuth} user={this.state.user} setAuthState={ (obj) => this.setAuthState(obj)} displaySell={ () => this.displaySell()} logOut={ () => this.logOut()}/>
        <DashBoard pets={this.state.myPets}/>
        

        {this.state.showUserForm ? <Auth authState={this.state} setAuthState={ (obj) => this.setAuthState(obj)} /> : null}
        {/* { isAuth && 
        
        } */}
        {/* {this.state.showSellForm ? <ProductForm token={localStorage.getItem("token")}/> : null} */}
      </div>
    );
  }
}

export default App;
