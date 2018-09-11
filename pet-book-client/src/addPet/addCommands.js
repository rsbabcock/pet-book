import React, { Component } from "react";

class CommandsForm extends Component {
  state = {

    // "command_name": "Sit",
    // "instructions": "Make a fist and say sit" 
    command_name: "",
    instructions: "",
    pet: "",
    command: "",
    userCommands: []
  }

  displaySuccess(data) {
    console.log("Response!", data)
  }
  getUserCommands() {
    //   a fetch to get user created pet allergies that will be added to state for drop down menu
    let token = localStorage.getItem("token")
    fetch(`http://127.0.0.1:8000/user-commands/`, {
      method: 'GET',
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((commands) => {
        console.log('commands', commands);
        this.setState({ userCommands: commands })
      })
      .catch((err) => {
        console.log("fetch no like you, brah", err);
      })
  }
  postPreMadeCommands() {
    let token = localStorage.getItem("token")
    const {
      pet,
      command,
    } = this.state
    console.log(`${this.state.pet} ${this.state.command}`)
    fetch(`http://127.0.0.1:8000/create-pet-command/`, {
      method: "POST",
      body: JSON.stringify({
        pet,
        command,
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
        return this.displaySuccess(response)
      })
      .catch((err) => {
        console.log("auth no like you, brah", err);
      });
  }
  postNewCommand() {
    //   a fetch to post user created command data
    let token = localStorage.getItem("token")
    const {
      command_name,
      instructions,
    } = this.state
    console.log(this.state)
    fetch(`http://127.0.0.1:8000/create-command/`, {
      method: "POST",
      body: JSON.stringify({
        command_name,
        instructions,
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
        this.getUserCommands()
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
    this.getUserCommands()
  }


  render() {
    let optionCommand = this.state.userCommands.map((type) => {
      return <option key={type.command_name} value={type.url}>{type.command_name}</option>
    });
    optionCommand.unshift(<option key='blank' value={this.state.defaultValue}>Pre-Created Commands</option>)

    let optionPet = this.props.userPets.map((type) => {
      return <option key={type.name} value={type.url}>{type.name}</option>
    });
    optionPet.unshift(<option key='blank' value={this.state.defaultValue}>Your Pets</option>)
    return (
      <div>
        <div className="form__container">
          <h1>Add a New Command</h1>
          <input
            type="text"
            placeholder="Command Name"
            name="command_name"
            onKeyPress={e => this.onChange(e)}
          />
          <textarea
            placeholder="Instructions"
            name="instructions"
            onBlur={e => this.onChange(e)}>
            {this.state.instructions}
          </textarea>
          <button onClick={() => this.postNewCommand()}>Create New Command</button>
          <h1>Add command to Pet</h1>
          <select onChange={e => this.onChange(e)} name="command">
            {optionCommand}
          </select>
          <select onChange={e => this.onChange(e)} name="pet">
            {optionPet}
          </select>
          <button onClick={() => this.postPreMadeCommands()}>Add Command to Pet</button>
        </div>
      </div>
    )
  }
}

export default CommandsForm
