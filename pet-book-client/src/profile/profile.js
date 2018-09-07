import React, { Component } from "react";

import { Hero, HeroHeader, HeroBody, Box, Title, Container, CardFooterItem, CardFooter, Card, CardContent, CardHeader, Icon, Content, CardHeaderTitle, CardHeaderIcon, } from 'bloomer';
import 'bulma/css/bulma.css';
import avatar from "../img/petBookLogo_white.png"
import "./profile.css"


class Profile extends Component {
    uniqueKey = 1

    render() {
        return (
            <div className="container_profile">
                <Title> Pet Profile</Title>
                {this.props.resource.map(data => (
                    <div>
                        <Hero isSize='medium' isColor="light">
                            <div key={this.uniqueKey += 1}>
                                <HeroHeader>
                                    <Box>
                                        <Title isSize={4} id="pet_profile">{data.name}</Title>
                                        {data.image === "" ? <img src={data.image} alt={data.name} /> : <img src={avatar} alt="default avatar" />}
                                    <Box>
                                        <a href="#/"><Title isSize={6}>Follow</Title></a>
                                    </Box>
                                    </Box>

                                </HeroHeader>
                                <HeroBody>
                                    <Container hasTextAlign="centered">
                                        <Box>
                                            Nick Name: {data.nick_name}
                                        </Box>
                                        <Box>
                                            Breed: {data.breed.breed_name}
                                        </Box>
                                        <Box>
                                            Birthday: {data.birthday}
                                        </Box>
                                        <Box>
                                            Gender: {data.gender}
                                        </Box>
                                        <Box>
                                            Houdini: {data.houdini === false ? "No" : "Yes"}
                                        </Box>
                                        <Box>
                                            Crate Quirks: {data.crate_quirks}
                                        </Box>
                                        <Box>
                                            Crate Trained: {data.crate_trained}
                                        </Box>
                                        <Box>
                                            Food Quirks: {data.food_quirks}
                                        </Box>
                                        <Box>
                                            Aggression: {data.aggression_notes}
                                        </Box>
                                        <Box>
                                            Bed Time: {data.bed_time}
                                        </Box>
                                        <Box>
                                            Eating Time: {data.eating_times}
                                        </Box>
                                        <Box>
                                            Favorite Toy: {data.fav_toy}
                                        </Box>
                                        <Box>
                                            Potty Needs: {data.potty_needs}
                                        </Box>
                                        <Box>
                                            Walking Quirks: {data.walking_quirks}
                                        </Box>
                                        <Box>
                                            Potty Needs: {data.potty_needs}
                                        </Box><Box>
                                            Potty Needs: {data.potty_needs}
                                        </Box>
                                    </Container>
                                </HeroBody>
                            </div>
                        </Hero>
                    <div>
                        {data.note.map(note => (
                            <Card>
                                <CardHeader>
                                    <CardHeaderTitle>
                                        Note
                        </CardHeaderTitle>
                                    <CardHeaderIcon>
                                        <Icon className="fa fa-angle-down" />
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
                                    <CardFooterItem href="#/">
                                        archive
                                    </CardFooterItem>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default Profile
                
                /* 
                allergy
                :
                    Array(1)
                    0
                    :
                    allergy_name
                    :
                    "Chicken"
                    owner
                    :
                    "http://127.0.0.1:8000/owners/1/"
                    side_effects
                    :
                    "Itchy and coughing"
                    url
                    :
                    "http://127.0.0.1:8000/allergies/1/"
                
                
                command
                :
                    Array(1)
                    0
                    :
                    command_name
                    :
                    "Sit"
                    instructions
                    :
                    "Make a fist and say sit"
                    owner
                    :
                    "http://127.0.0.1:8000/owners/1/"
                    url
                    :
                    "http://127.0.0.1:8000/commands/1/"
                
                
                
                
                
                note
                :
                
                    Array(1)
                    0
                    :
                    archive
                    :
                    false
                    content
                    :
                    "Scout turned one today"
                    date_posted
                    :
                    null
                    url
                    :
                    "http://127.0.0.1:8000/notes/1/"
                
                
                
                
                deceased
                :
                false
*/