import React, { Component } from "react";

class AllergiesForm extends Component {
    state = {
        allergy_name: "",
        side_effects: "",
        userAllergies: []
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
    //  Will need to add a view for this in api, that filters based on user
  }
//   postAllergies(){
//     //   a ftch to post user created allergy data
//   }

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
