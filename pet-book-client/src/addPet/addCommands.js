import React, { Component } from "react";

    state = {
        "command_name": "Sit",
        "instructions": "Make a fist and say sit"
    }
// getUserAllergies(){
//     //   a fetch to get user created pet allergies that will be added to state for drop down menu, or to post to API
//     //  Will need to add a view for this in api, that filters based on user
//   }
//   getUserCommands(){
//     //   a fetch to get user created pet commands that will be added to state for drop down menu, or to post to API
//     //  Will need to add a view for this in api, that filters based on user
//   }
//   postAllergies(){
//     //   a ftch to post user created allergy data
//   }
//   postCommands(){
//     //   a fetch to poser user created pet commands
//   }

class addAllergiesCommands extends Component {

render() {
    let optionPetType = this.state.petType.map((type) => {
      return <option key={type.pet_type_name} value={type.url}>{type.pet_type_name}</option>
    });
    optionPetType.unshift(<option key='blank' value={this.state.defaultValue}>Select a Pet Type</option>)

    let optionBreed = this.state.breeds.map((breed) => {
      // debugger
      return <option key={breed.breed_name} value={breed.url}>{breed.breed_name}</option>
    });
    optionBreed.unshift(<option key='blank' value={this.state.defaultValue}>Select a Breed</option>)

    let optionGender = [<option key={"M"} value={"M"}>{"M"}</option>, <option key={"F"} value={"F"}>{"F"}</option>]
    optionGender.unshift(<option key='blank' value={this.state.defaultValue}>Select a Gender</option>)

    let optionHoudini = [<option key={"Yes"} value={true}>{"Yes"}</option>, <option key={"No"} value={false}>{"No"}</option>]
    optionHoudini.unshift(<option key='blank' value={this.state.defaultValue}>Is this pet a Houdini?</option>)

    // optionCrateTrained
    let optionCrateTrained = [<option key={"Yes"} value={true}>{"Yes"}</option>, <option key={"No"} value={false}>{"No"}</option>]
    optionCrateTrained.unshift(<option key='blank' value={this.state.defaultValue}>Crate Trained?</option>)
    return (
      <div>
        <h1>Add a Pet!</h1>
        <div className="form__container">
          <select onChange={e => this.onChange(e)} name="pet_type">
            {optionPetType}
          </select>
          <select onChange={e => this.onChange(e)} name="breed">
            {optionBreed}
          </select>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onKeyPress={e => this.onChange(e)}
          />
          <input
            type="text"
            placeholder="Nickname"
            name="nick_name"
            onBlur={e => this.onChange(e)}
          />
          <input
            type="text"
            placeholder="Birthday"
            name="birthday"
            onBlur={e => this.onChange(e)}
          />
          <select onChange={e => this.onChange(e)} name="gender">
            {optionGender}
          </select>
          <select onChange={e => this.onChange(e)} name="houdini">
            {optionHoudini}
          </select>
          <textarea
            placeholder="Crate Quirks"
            name="crate_quirks"
            onBlur={e => this.onChange(e)}>
            {this.state.crate_quirks}
          </textarea>
          <textarea
            placeholder="Food Quirks"
            name="food_quirks"
            onBlur={e => this.onChange(e)}>
            {this.state.food_quirks}
          </textarea>
          <select onChange={e => this.onChange(e)} name="crate_trained">
            {optionCrateTrained}
          </select>
          <textarea
            placeholder="Aggression Notes"
            name="aggression_notes"
            onBlur={e => this.onChange(e)}>
          </textarea>
          <input
            type="text"
            placeholder="Bed Time"
            name="bed_time"
            onBlur={e => this.onChange(e)}
          />
          <textarea
            placeholder="Eating Times"
            name="eating_times"
            onBlur={e => this.onChange(e)}>
          </textarea>
          <textarea
            placeholder="Favorite Toy"
            name="fav_toy"
            onBlur={e => this.onChange(e)}>
          </textarea>
          <textarea
            placeholder="Potty Needs"
            name="potty_needs"
            onBlur={e => this.onChange(e)}>
          </textarea>
          <textarea
            placeholder="Walking Quirks"
            name="walking_quirks"
            onBlur={e => this.onChange(e)}>
          </textarea>
        </div>
        <button onClick={() => this.createPet()}>Submit</button>
      </div>
    )
  }
}

export default addAllergiesCommands