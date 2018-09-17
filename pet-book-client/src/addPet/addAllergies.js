import React, { Component } from "react";
import { Button, Title, Select, Input, TextArea, Field, Box, Container } from "bloomer";
import swal from 'sweetalert';


class AllergiesForm extends Component {
  state = {
    allergy_name: "",
    side_effects: "",
    pet: "",
    allergy: "",
    userAllergies: []
  }

  displaySuccess(data) {
    console.log("Response!", data)
  }
  getUserAllergies() {
    //   a fetch to get user created pet allergies that will be added to state for drop down menu
    let token = localStorage.getItem("token")
    fetch(`http://127.0.0.1:8000/user-allergies/`, {
      method: 'GET',
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((allergies) => {
        console.log('allergies', allergies);
        this.setState({ userAllergies: allergies })
      })
      .catch((err) => {
        console.log("fetch no like you, brah", err);
      })
  }
  postPreMadeAllergies() {
    let token = localStorage.getItem("token")
    const {
      pet,
      allergy,
    } = this.state
    console.log(`${this.state.pet} ${this.state.allergy}`)
    fetch(`http://127.0.0.1:8000/create-pet-allergy/`, {
      method: "POST",
      body: JSON.stringify({
        pet,
        allergy,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }
    })
      .then((response) => {
        return response.json()
        // return response.text()
      })
      .then((response) => {
        // console.log(text)
        swal({
          title: "Sweet!",
          text: "New Allergy Added",
          icon: "success",
        });
        return this.displaySuccess(response)
      })
      .catch((err) => {
        console.log("auth no like you, brah", err);
      });
  }
  postNewAllergy() {
    //   a fetch to post user created allergy data
    let token = localStorage.getItem("token")
    const {
      allergy_name,
      side_effects,
    } = this.state
    console.log(this.state)
    fetch(`http://127.0.0.1:8000/create-allergy/`, {
      method: "POST",
      body: JSON.stringify({
        allergy_name,
        side_effects,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.getUserAllergies()
        swal({
          title: "Sweet!",
          text: "New Allergy Created",
          icon: "success",
        });
        return this.displaySuccess(response)
      
      })
      .catch((err) => {
        console.log("auth no like you, brah", err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  componentDidMount() {
    this.getUserAllergies()
  }


  render() {
    let optionAllergy = this.state.userAllergies.map((type) => {
      return <option key={type.allergy_name} value={type.url}>{type.allergy_name}</option>
    });
    optionAllergy.unshift(<option key='blank' value={this.state.defaultValue}>Pre-Created Allergy</option>)

    let optionPet = this.props.userPets.map((type) => {
      return <option key={type.name} value={type.url}>{type.name}</option>
    });
    optionPet.unshift(<option key='blank' value={this.state.defaultValue}>Your Pets</option>)
    return (
      <div>
        <div className="form__container">
          <Container>
            <Box>
              <Title>Add a New Allergy</Title>
              <Field>
                <Input
                  type="text"
                  placeholder="Allergy Name"
                  name="allergy_name"
                  onKeyPress={e => this.onChange(e)}
                />
                <TextArea
                  placeholder="Side Effects"
                  name="side_effects"
                  onKeyPress={e => this.onChange(e)}>
                  {this.state.side_effects}
                </TextArea>
              </Field>
              <Button isColor="info" isOutlined onClick={() => this.postNewAllergy()}>Create New Allergy</Button>
            </Box>
            <Box>
              <Title>Add Allergy to Pet</Title>
              <Field>
                <Select onChange={e => this.onChange(e)} name="allergy">
                  {optionAllergy}
                </Select>
                <Select onChange={e => this.onChange(e)} name="pet">
                  {optionPet}
                </Select>
              </Field>
              <Button id="home"isColor="info" isOutlined 
              onClick={() => {
                this.postPreMadeAllergies()
                // (console.log(this.state.pet))
                this.props.ProfileHandler(this.state.pet)
                this.props.viewHandler('home')
                }}>Add Allergy to Pet</Button>
            </Box>
          </Container>
        </div>
      </div>
    )
  }
}

export default AllergiesForm
