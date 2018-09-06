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
    userPets: [],
    followedPets: [],
    id: null
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
    this.getuserPets()
    this.getFollowedPets()
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
    localStorage.removeItem("id");
    // Set everything to false again?
    this.setAuthState({
      isAuth: false,
      user: "",
    })
    console.log(localStorage.getItem("token"));
  }

  getuserPets(){
    let token = localStorage.getItem("token")
    fetch(`http://127.0.0.1:8000/user-pets/`, {
      method: 'GET',
      headers: {
        "Authorization" : `Token ${token}`
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((pets) => {
      // console.log('userPets', pets);
      this.setState({userPets: pets})
    })
    .catch((err) => {
      console.log("fetch no like you, brah", err);
    })
}

getFollowedPets(){
  let token = localStorage.getItem("token")
  fetch(`http://127.0.0.1:8000/followed-pets/`, {
    method: 'GET',
    headers: {
      "Authorization" : `Token ${token}`
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((owner) => {
    const follows = owner[0].follows
    this.setState({followedPets : follows})
  })
  .catch((err) => {
    console.log("fetch no like you, brah", err);
  })
}
showView = function (e) {
  let view = null

  // Click event triggered switching view
  if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1]

      // View switch manually triggered by passing in string
  } else {
      view = e
  }
  // If user clicked logout in nav, empty local storage and update activeUser state
  if (view === "welcome") {
      this.setState({
          //   resets score and counter at welcome page
          userScore: 0,
          counter: 0
      })

  }
  // Update state to correct view will be rendered
  this.setState({
      currentView: view,
  })

}.bind(this)

View = () => {
  if (localStorage.getItem("geoId") === null && this.state.currentView !== "register") {
      return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
  }
  else {
      switch (this.state.currentView) {
          case "logout":
              return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
      }
  }
}
  render() {
    return (
      <div className="App">
        <Nav isAuth={this.state.isAuth} user={this.state.user} setAuthState={ (obj) => this.setAuthState(obj)} displaySell={ () => this.displaySell()} logOut={ () => this.logOut()}/>
        

        {this.state.showUserForm ? <Auth authState={this.state} setAuthState={ (obj) => this.setAuthState(obj)} /> : null}
         { this.state.isAuth && 
        <DashBoard userPets={this.state.userPets} followedPets={this.state.followedPets}/>
        
        }
        {/* {this.state.showSellForm ? <ProductForm token={localStorage.getItem("token")}/> : null} */}
      </div>
    );
  }
}

export default App;
