import React, { Component } from "react";
import "./editPet.css";
import { Button, Title, Select, Input, TextArea, Field, Container, Box } from "bloomer";
import avatar from '../img/petBookLogo_white.png'
class EditPetForm extends Component {
    // a component to add data for pet, 
    // will also need to get data for breed and petType


    state = {
        pet_type: "",
        breed: "",
        name: "",
        image: "",
        nick_name: "",
        birthday: "",
        gender: "",
        houdini: false,
        crate_quirks: "",
        crate_trained: true,
        food_quirks: "",
        aggression_notes: "",
        bed_time: "",
        eating_times: "",
        fav_toy: "",
        potty_needs: "",
        walking_quirks: "",
        deceased: false,
        breeds: [],
        petType: [],
    }

    getPetTypes() {
        //   a fetch to get all pet breeds and store them in the breeds state
        fetch(`http://127.0.0.1:8000/pet-types/`)
            .then((response) => {
                return response.json();
            })
            .then((types) => {
                console.log('types', types);
                this.setState({ petType: types })
            })
            .catch((err) => {
                console.log("fetch no like you, brah", err);
            })
    }

    getPetBreeds() {
        //   a fetch to get all breeds and store them in the breed state
        fetch(`http://127.0.0.1:8000/breeds/`)
            .then((response) => {
                return response.json();
            })
            .then((breeds) => {
                console.log('breeds', breeds);
                this.setState({ breeds: breeds })
            })
            .catch((err) => {
                console.log("fetch no like you, brah", err);
            })

    }

    createPet() {
        //   a fetch to post pet data
        let putUrl = ""
        this.props.resource.map(pet => {
            console.log(pet.url)
            putUrl = pet.url
        })
        let token = localStorage.getItem("token")
        const { pet_type,
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
            deceased } = this.state
        console.log(this.state.pet)
        fetch(`${putUrl}`, {
            method: "Put",
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


    componentDidMount() {
        this.getPetTypes()
        this.getPetBreeds()
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    displaySuccess(data) {
        console.log("Pet Edited!", data)
    }

    handleChangeImage(evt) {
        console.log("Uploading");
        let self = this
        const reader = new FileReader();
        let file = evt.target.files[0];

        reader.onload = function (upload) {
            self.setState({
                image: upload.target.result
            });
            console.log(self.state.image);
        };
        reader.readAsDataURL(file);
        console.log("Uploaded");
    }


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
                {this.props.resource.map(pet => (
                <div className="form__container">
                    <Container hasTextAlign="center">
                        <Box>
                            <Title>Edit Pet</Title>
                            <Field isHorizontal>
                                <Select onChange={e => this.onChange(e)} name="pet_type">
                                    {optionPetType}
                                </Select>
                                <Select onChange={e => this.onChange(e)} name="breed">
                                    {optionBreed}
                                </Select>
                            </Field>
                            <Field>
                                <Input
                                    type="text"
                                    placeholder={pet.name}
                                    name="name"
                                    onKeyPress={e => this.onChange(e)}
                                />
                                <Input
                                    type="text"
                                    placeholder={pet.nick_name}
                                    name="nick_name"
                                    onBlur={e => this.onChange(e)}
                                />
                                <Input
                                    type="text"
                                    placeholder={pet.birthday}
                                    name="birthday"
                                    onBlur={e => this.onChange(e)}
                                />
                                <Input
                                    ref="file"
                                    type="file"
                                    placeholder={pet.image}
                                    name="image"
                                    id="file"
                                    onChange={e => this.handleChangeImage(e)}
                                    encType="multipart/form-data"
                                />
                            </Field>
                            <img src={pet.image === "" ? avatar : pet.image} alt="upload" />
                        </Box>
                        <Box>
                            <Field>
                                <Select onChange={e => this.onChange(e)} name="gender">
                                    {optionGender}
                                </Select>
                                <Select onChange={e => this.onChange(e)} name="houdini">
                                    {optionHoudini}
                                </Select>
                                <Select onChange={e => this.onChange(e)} name="crate_trained">
                                    {optionCrateTrained}
                                </Select>
                            </Field>
                        </Box>
                        <Box>
                            <Field>
                                <TextArea
                                    placeholder={pet.crate_quirks}
                                    name="crate_quirks"
                                    onBlur={e => this.onChange(e)}>
                                    {this.state.crate_quirks}
                                </TextArea>
                            </Field>
                            <Field>
                                <TextArea
                                    placeholder={pet.food_quirks}
                                    name="food_quirks"
                                    onBlur={e => this.onChange(e)}>
                                    {this.state.food_quirks}
                                </TextArea>
                                <TextArea
                                    placeholder={pet.aggression_notes}
                                    name="aggression_notes"
                                    onBlur={e => this.onChange(e)}>
                                </TextArea>
                                <Input
                                    type="text"
                                    placeholder={pet.bed_time}
                                    name="bed_time"
                                    onBlur={e => this.onChange(e)}
                                />
                                <TextArea
                                    placeholder={pet.eating_times}
                                    name="eating_times"
                                    onBlur={e => this.onChange(e)}>
                                </TextArea>
                                <TextArea
                                    placeholder={pet.fav_toy}
                                    name="fav_toy"
                                    onBlur={e => this.onChange(e)}>
                                </TextArea>
                                <TextArea
                                    placeholder={pet.potty_needs}
                                    name="potty_needs"
                                    onBlur={e => this.onChange(e)}>
                                </TextArea>
                                <TextArea
                                    placeholder={pet.walking_quirks}
                                    name="walking_quirks"
                                    onBlur={e => this.onChange(e)}>
                                </TextArea>
                            </Field>
                        </Box>
                        <Button isColor="info" isSize="large" isOutlined onClick={() => this.createPet()}>Edit Pet</Button>
                    </Container>
                </div>
            ))}
            </div>
        )
    }
}

export default EditPetForm
