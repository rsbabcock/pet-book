import React, { Component } from "react";
import { Button, Title, Select, Input, TextArea, Field, Container, Box } from "bloomer";

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
          <Container>
            <Box>
              <Title>Add a New Command</Title>
              <Field>
                <Input
                  type="text"
                  placeholder="Command Name"
                  name="command_name"
                  onKeyPress={e => this.onChange(e)}
                />
                <TextArea
                  placeholder="Instructions"
                  name="instructions"
                  onBlur={e => this.onChange(e)}>
                  {this.state.instructions}
                </TextArea>
              </Field>
              <Button isColor="info" isOutlined onClick={() => this.postNewCommand()}>Create New Command</Button>
              </Box>
              <Box>
                <Title>Add command to Pet</Title>
                <Field>
                  <Select onChange={e => this.onChange(e)} name="command">
                    {optionCommand}
                  </Select>
                  <Select onChange={e => this.onChange(e)} name="pet">
                    {optionPet}
                  </Select>
                </Field>
                <Button isColor="info" isOutlined onClick={() => {
                  this.postPreMadeCommands()
                  this.props.ProfileHandler(this.state.pet)
                  this.props.viewHandler('profile')
                }}>Add Command to Pet</Button>
              </Box>
          </Container>
        </div>
        </div>
        )
      }
    }
    
    export default CommandsForm
