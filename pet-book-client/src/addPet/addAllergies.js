import React, { Component } from "react";

class AllergiesForm extends Component {
    state = {
        allergy_name: "",
        side_effects: "",
        userAllergies: [],
        pet: "",
        allergy: ""
    }

getUserAllergies(){
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
  postAllergies(){
    //   a fetch to post user created allergy data
      let token = localStorage.getItem("token")
      const {
      crate_quirks,
      crate_trained,
      food_quirks,
      aggression_notes,
      bed_time,
      eating_times,
      fav_toy,
    } = this.state
      console.log(this.state.pet)
      fetch(`http://127.0.0.1:8000/create-pet/`, {
        method: "POST",
        body: JSON.stringify({
            pet_type,
            breed,
            name,
            image,
            nick_name,
            birthday,
            gender,
            houdini,
            crate_quirks,
            crate_trained,
            food_quirks,
            aggression_notes,
            bed_time,
            eating_times,
            fav_toy,
            potty_needs,
            walking_quirks,
            deceased
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
          return this.displaySuccess(response)
        })
        .catch((err) => {
          console.log("auth no like you, brah", err);
        });
    }

onChange(e) {
  this.setState({ [e.target.name] : e.target.value });
  console.log(this.state)
}
 
componentDidMount(){
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
        <h1>Add a Pre-existing Allergy or create one!</h1>
        <div className="form__container">
          <select onChange={e => this.onChange(e)} name="allergy">
            {optionAllergy}
          </select>
          <select onChange={e => this.onChange(e)} name="pet">
            {optionPet}
          </select>
          <input
            type="text"
            placeholder="Allergy Name"
            name="allergy_name"
            onKeyPress={e => this.onChange(e)}
          />
          <textarea
            placeholder="Side Effects"
            name="side_effects"
            onBlur={e => this.onChange(e)}>
            {this.state.side_effects}
          </textarea>
        </div>
        <button onClick={() => this.createPet()}>Submit</button>
      </div>
    )
  }
}

export default AllergiesForm
