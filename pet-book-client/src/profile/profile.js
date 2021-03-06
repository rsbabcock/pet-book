import React, { Component } from "react";

import { Hero, HeroHeader, HeroBody, Box, Title, Container, CardFooterItem, CardFooter, Card, CardContent, CardHeader, Content, CardHeaderTitle, CardHeaderIcon, TextArea, Field, Button } from 'bloomer';
import 'bulma/css/bulma.css';
import dog from "../img/petBookLogo_white.png"
import cat from "../img/petBookKitty.png"
import "./profile.css"


class Profile extends Component {
    uniqueKey = 1
    state = {
        // pet: this.props.resource[0].url,
        date_posted: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now()),
        content: "",
        archive: false,
        pet: '',
        note: '',
        petBreed: '',
    }

    
        //   a fetch to get all breeds and store them in the breed state
    // getPetBreed(){
    //     // this.setState({petBreed: ""})
    //     fetch(`http://127.0.0.1:8000/breeds/`)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((breeds) => {
    //             console.log(breeds)
    //             let petBreed = breeds.filter(x => {
    //                 // console.log(data)
    //                 if (x.url === this.props.resource[0].breed) {
    //                     this.setState({ petBreed: x })
    //                 }
    //             })
    //             return petBreed
    //         })
    //         .catch((err) => {
    //             console.log("fetch no like you, brah", err);
    //         })
    // }       
    archiveNote = (content, date_posted, url) => {
        let token = localStorage.getItem("token")
        const archive = true
        // console.log( archive, this.state)
        // console.log(url)
        fetch(`${url}`, {
            method: "PUT",
            body: JSON.stringify({
                date_posted,
                content,
                archive
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
                console.log(this.props.resource)
                this.props.ProfileHandler(this.props.resource[0].url)
                return this.displaySuccess(response)
            })
            .catch((err) => {
                console.log("auth no like you, brah", err);
            });
    }
    postPetNote() {
        //   a fetch to post user created allergy data
        this.props.resource.map(pet => {
            this.setState({ pet: pet.url })
            return console.log(pet.url)
        })
        let token = localStorage.getItem("token")
        const {
            pet,
            note,
        } = this.state
        console.log(this.state)
        fetch(`http://127.0.0.1:8000/pet-notes/`, {
            method: "POST",
            body: JSON.stringify({
                pet,
                note,
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

    postNote() {
        //   a fetch to post user created allergy data
        let token = localStorage.getItem("token")
        const {
            date_posted,
            content,
            archive,
        } = this.state
        console.log(this.state)
        fetch(`http://127.0.0.1:8000/notes/`, {
            method: "POST",
            body: JSON.stringify({
                date_posted,
                content,
                archive
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
                return this.setState({ note: response.url })
            })
            .then((response) => {
                this.postPetNote()
                this.props.ProfileHandler(this.props.resource[0].url)
                return this.displaySuccess(response)
            })
            .catch((err) => {
                console.log("auth no like you, brah", err);
            });
    }
    componentDidMount() {
        // this.getPetBreed()
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    displaySuccess(data) {
        console.log("New Pet Added!", data)
    }

    render() {
        return (
            <div className="container_profile">
                <Title> Pet Profile</Title>
                {this.props.resource.map(data => (
                    <div>
                        <Hero isSize='medium' id="profile__color">
                            <div key={this.uniqueKey += 1}>
                                <HeroHeader>
                                    <Box className="profile__head">
                                        <Title isSize={4} id="pet_profile">{data.name}</Title>
                                        {data.pet_type === "http://127.0.0.1:8000/pet-types/1/" ? <img src={dog} alt={data.name} /> : <img src={cat} alt={data.name} />}
                                        {this.props.showFollow === false ? null : <Button
                                            isSize="large"
                                            isColor="info"
                                            isOutlined
                                            onClick={() => {
                                                this.props.startFollowing(data.url)
                                                this.props.getFollowedPets()
                                                this.props.viewHandler("home")
                                            }}>Follow
                                        </Button>}
                                        {this.props.unFollow === false ? null : <Button
                                            isSize="large"
                                            isColor="info"
                                            isOutlined
                                            onClick={() => {
                                                this.props.stopFollowing(data.url)
                                                this.props.getFollowedPets()
                                                this.props.viewHandler("home")
                                            }}>Unfollow
                                        </Button>}
                                        {this.props.showEdit === false ? null : <Button
                                            isSize="large"
                                            isColor="info"
                                            isOutlined
                                            id="pet__edit"
                                            onClick={() => {
                                                // this.props.ProfileHandler(c.url)
                                                this.props.viewHandler('edit')
                                            }}>Edit
                                        </Button>}
                                    </Box>

                                </HeroHeader>
                                <HeroBody>
                                    <Container hasTextAlign="centered">
                                        <Box>
                                            <strong>Nick Name:</strong> <br /> {data.nick_name}
                                        </Box>
                                        <Box>
                                            <strong>Breed:</strong> <br /> {this.props.petBreed}
                                        </Box>
                                        <Box>
                                            <strong>Birthday:</strong> <br /> {data.birthday}
                                        </Box>
                                        <Box>
                                            <strong>Gender:</strong> <br /> {data.gender}
                                        </Box>
                                        <Box>
                                            <strong>Houdini:</strong> <br /> {data.houdini === false ? "No" : "Yes"}
                                        </Box>
                                        <Box>
                                            <strong>Crate Quirks:</strong> <br /> {data.crate_quirks}
                                        </Box>
                                        <Box>
                                            <strong>Crate Trained:</strong> <br /> {data.crate_trained === true ? "No" : "Yes"}
                                        </Box>
                                        <Box>
                                            <strong>Food Quirks:</strong> <br /> {data.food_quirks}
                                        </Box>
                                        <Box>
                                            <strong>Aggression:</strong> <br /> {data.aggression_notes}
                                        </Box>
                                        <Box>
                                            <strong>Bed Time:</strong> <br /> {data.bed_time}
                                        </Box>
                                        <Box>
                                            <strong>Eating Times:</strong> <br /> {data.eating_times}
                                        </Box>
                                        <Box>
                                            <strong>Favorite Toy:</strong> <br /> {data.fav_toy}
                                        </Box>
                                        <Box>
                                            <strong>Potty Needs:</strong> <br /> {data.potty_needs}
                                        </Box>
                                        <Box>
                                            <strong>Walking Quirks:</strong> <br /> {data.walking_quirks}
                                        </Box>
                                        {data.deceased === false ? null : <Box>
                                            <strong>Deceased:</strong> <br /> Sadly, yes
                                        </Box>}
                                    </Container>
                                    <br />
                                    <Title>Allergies</Title>
                                    <Container hasTextAlign="centered">
                                        {data.allergy.map(allergy => (
                                            <div>
                                                <Box>
                                                    <Box>
                                                        <strong>Name:</strong> <br /> {allergy.allergy_name}
                                                    </Box>
                                                    <Box>
                                                        <strong>Side Effects:</strong> <br /> {allergy.side_effects}
                                                    </Box>
                                                </Box>
                                            </div>
                                        ))}
                                    </Container>
                                    <br />
                                    <Title>Commands</Title>

                                    <Container hasTextAlign="centered">
                                        {data.command.map(command => (
                                            <div>
                                                <Box>
                                                    <Box>
                                                        <strong>Command:</strong> <br /> {command.command_name}
                                                    </Box>
                                                    <Box>
                                                        <strong>Instructions:</strong> <br /> {command.instructions}
                                                    </Box>
                                                </Box>
                                            </div>
                                        ))}
                                    </Container>
                                </HeroBody>
                            </div>
                            <div>
                                <Container hasTextAlign="centered">
                                    <Field>
                                        <TextArea
                                            placeholder="Note"
                                            name="content"
                                            onBlur={e => this.onChange(e)}>
                                        </TextArea>
                                    </Field>
                                    <Button isColor="info" isSize="medium" isOutlined onClick={() => this.postNote()}>Add Note</Button>
                                </Container>
                            </div>
                            <div>
                                <Container hasTextAlign="centered">
                                    {data.note.map(note => (
                                        <div>
                                            {note.archive === true ? null :
                                        <Box>
                                                <Card>
                                                    <CardHeader>
                                                        <CardHeaderTitle>
                                                            Note
                                    </CardHeaderTitle>
                                                        <CardHeaderIcon>
                                                            {/* <Icon className="fa fa-angle-down" {this.render}/> */}
                                                        </CardHeaderIcon>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <Content>
                                                            {note.content}
                                                            <br />
                                                            <small>{note.date_posted}</small>
                                                        </Content>
                                                    </CardContent>
                                                    <CardFooter>
                                                        <CardFooterItem href="#/" onClick={() => { this.archiveNote(note.content, note.date_posted, note.url) }}>
                                                            archive
                                    </CardFooterItem>
                                                    </CardFooter>
                                                </Card>
                                                </Box>
                                            }
                                            </div>
                                    ))}
                                </Container>
                            </div>
                        </Hero>
                    </div>
                ))}
            </div>
        )
    }
}

export default Profile
