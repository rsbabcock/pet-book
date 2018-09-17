import React, { Component } from "react";
import "./auth.css";
import { Button, Title, Input, Field, Container, Box, Hero, HeroHeader } from "bloomer";
import swal from 'sweetalert';
import avatar from "../img/petBookLogo_white.png"

class Auth extends Component {

  onChange(e) {
    // this is actually not necessary!
    const user = Object.assign({}, this.props.authState);
    user[e.target.name] = e.target.value;
    this.props.setAuthState(user, () => {
      console.log("Staaaatee", this.props.authState)
    });
  }

  getuserPets() {
    let token = localStorage.getItem("token")
    fetch(`http://127.0.0.1:8000/user-pets/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((pets) => {
        console.log('userPets', pets);
        this.setState({ userPets: pets, currentView: 'home' })
      })
      .then((stuff) => {
        this.getFollowedPets()
      })
      .catch((err) => {
        console.log("fetch no like you, brah", err);
      })
  }

  getFollowedPets() {
    let token = localStorage.getItem("token")
    fetch(`http://127.0.0.1:8000/followed-pets/`, {
      method: 'GET',
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((owner) => {
        const follows = owner[0].follows
        this.props.setAuthState({ followedPets: follows })
      })
      .catch((err) => {
        console.log("fetch no like you, brah", err);
      })
  }


  postAuth(route, user) {
    console.log("postAuth called")
    console.log("user?", user)
    return fetch(`http://127.0.0.1:8000/${route}/`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => {
        console.log('"auth', response);
        if(response.statusText === "Bad Request"){
          swal({
            title: "Oh no!",
            text: "We haven't been introduced, please register",
            icon: "warning",
          });
          this.props.setAuthState({isAuth : false})
          return Promise.reject(response)
        }
        if(response.statusText === "OK"){
          return response.json();
        }
      })
      .then((responseToken) => {
        localStorage.setItem("token", responseToken.token)
        localStorage.setItem("user", this.props.authState.username)
        return responseToken;
      })
      .then((response) => {
        let token = localStorage.getItem("token")
        fetch(`http://127.0.0.1:8000/user-pets/`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
          }
        })
          .then((response) => {
            return response.json();
          })
          .then((pets) => {
            console.log('userPets', pets);
            return this.props.setAuthState({
              user: this.props.authState.username,
              token: token,
              username: "",
              password: "",
              isAuth: true,
              currentView: 'home',
              userPets: pets
            })
          })
          .then((allThings) => {
            this.getFollowedPets()
          })
          .catch((err) => {
            console.log("auth no like you, brah", err);
          })
      })
    }

  login() {
          // create an object with username and password keys and submit it to the Django API
          const user = {
            username: this.props.authState.username,
            password: this.props.authState.password
          }
    this.postAuth("api-token-auth", user)
            .then(() => {
              console.log("user logged in!")
            })
            .then(() => {
              console.log(this.props.authState)
            })
        }

  register() {
          // create an object with all the form values and submit it to the Django API
          const user = Object.assign({}, this.props.authState);
          this.postAuth("register", user)
            .then(() => {
              console.log("new user created")
              this.props.setAuthState({ showUserForm: false, isAuth: true })
            })
            .then()
        }

  displayRegister() {
          this.props.setAuthState({
            register: true,
            showUserForm: true
          })
        }

  render() {
          const {
            username,
            first_name,
            last_name,
            email,
            password,
            street,
            city,
            state,
            zip,
            phone,
            register
          } = this.props.authState
    return(
      <div>
        <Hero isSize="medium">
          <HeroHeader>
            <Box className="logo">
              <img src={avatar} alt="PetBook"></img>
              <Title>PetBook</Title>
            </Box>
          </HeroHeader>
        </Hero>
        {
          register &&
            <div>
              <Box>
                <Field>
                  <Input
                    type="text"
                    placeholder="first name"
                    name="first_name"
                    value={first_name}
                    onChange={e => this.onChange(e)}
                  />
                  <Input
                    type="text"
                    placeholder="last name"
                    name="last_name"
                    value={last_name}
                    onChange={e => this.onChange(e)}
                  />
                  <Input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={e => this.onChange(e)}
                  />
                </Field>
              </Box>
              <Box>
                <Field>
                  <Input
                    type="text"
                    placeholder="street address"
                    name="street"
                    value={street}
                    onChange={e => this.onChange(e)}
                  />
                  <Input
                    type="text"
                    placeholder="city"
                    name="city"
                    value={city}
                    onChange={e => this.onChange(e)}
                  />
                  <Input
                    type="text"
                    placeholder="state (NY)"
                    name="state"
                    value={state}
                    onChange={e => this.onChange(e)}
                  />
                  <Input
                    type="text"
                    placeholder="zipcode"
                    name="zip"
                    value={zip}
                    onChange={e => this.onChange(e)}
                  />
                  <Input
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={phone}
                    onChange={e => this.onChange(e)}
                  />
                </Field>
              </Box>
            </div>
        }
        < Box >
        <Input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={e => this.onChange(e)}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={e => this.onChange(e)}
        />
        </Box >
        <Button isColor="info" isSize="large" isOutlined onClick={() => register ? this.register() : this.login()}>{register ? "Sign Up" : "Log In"} </Button >
        <Button isColor="info" isSize="large" isOutlined onClick={() => this.displayRegister()}>Register</Button >

      </div >
    );
  }
}

export default Auth
