import React, { Component } from "react";

import { Hero, HeroHeader, HeroBody, Box, Title, Container, CardFooterItem, CardFooter, Card, CardContent, CardHeader, Content, CardHeaderTitle, CardHeaderIcon, } from 'bloomer';
import 'bulma/css/bulma.css';
import avatar from "../img/petBookLogo_white.png"
import "./profile.css"


class Profile extends Component {
    uniqueKey = 1
    // state = {
    //     showEdit: false
    // }

    // showEditButton(url){ 
    //     this.props.userPets.filter((petUrl) => {
    //             if(petUrl.url === url){
    //                 this.setState({showEdit : true})
    //             }
    //         })
    //         return console.log("Your pet!")
    // }

    // componentDidMount(){
    //     console.log(this.props.resource)
    //     this.showEditButton(this.props.resource.url)
    // }
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
                                    {this.props.showEdit === false ?  null : <Box>
                                        <a href="#/"><Title isSize={6}>Edit</Title></a>
                                    </Box> }
                                    </Box>

                                </HeroHeader>
                                <HeroBody>
                                    <Container hasTextAlign="centered">
                                        <Box>
                                        <strong>Nick Name:</strong> <br/> {data.nick_name}
                                        </Box>
                                        <Box>
                                        <strong>Breed:</strong> <br/> {data.breed.breed_name}
                                        </Box>
                                        <Box>
                                        <strong>Birthday:</strong> <br/> {data.birthday}
                                        </Box>
                                        <Box>
                                        <strong>Gender:</strong> <br/> {data.gender}
                                        </Box>
                                        <Box>
                                        <strong>Houdini:</strong> <br/> {data.houdini === false ? "No" : "Yes"}
                                        </Box>
                                        <Box>
                                        <strong>Crate Quirks:</strong> <br/> {data.crate_quirks}
                                        </Box>
                                        <Box>
                                        <strong>Crate Trained:</strong> <br/> {data.crate_trained === true ? "No" : "Yes"}
                                        </Box>
                                        <Box>
                                        <strong>Food Quirks:</strong> <br/> {data.food_quirks}
                                        </Box>
                                        <Box>
                                        <strong>Aggression:</strong> <br/> {data.aggression_notes}
                                        </Box>
                                        <Box>
                                        <strong>Bed Time:</strong> <br/> {data.bed_time}
                                        </Box>
                                        <Box>
                                        <strong>Eating Times:</strong> <br/> {data.eating_times}
                                        </Box>
                                        <Box>
                                        <strong>Favorite Toy:</strong> <br/> {data.fav_toy}
                                        </Box>
                                        <Box>
                                        <strong>Potty Needs:</strong> <br/> {data.potty_needs}
                                        </Box>
                                        <Box>
                                        <strong>Walking Quirks:</strong> <br/> {data.walking_quirks}
                                        </Box>
                                            { data.deceased === false ? null : <Box>
                                            <strong>Deceased:</strong> <br/> Sadly, yes
                                        </Box>}
                                            <Container>
                                                <Title>Allergies</Title>
                                                    {data.allergy.map(allergy => (
                                                <div>
                                                    <Box>
                                                    <strong>Name:</strong> <br/> {allergy.allergy_name}
                                                    </Box>
                                                    <Box>
                                                    <strong>Side Effects:</strong> <br/> {allergy.side_effects}
                                                    </Box>
                                                </div>
                                                ))}
                                            </Container>
                                    </Container>
                                    <Container>
                                        <div></div>   
                                        <Title>Commands</Title>
                                        {data.command.map(command => (
                                        <div>
                                            <Box>
                                            <strong>Command:</strong> <br/> {command.command_name}
                                            </Box>
                                            <Box>
                                                <strong>Instructions:</strong> <br/> {command.instructions}
                                            </Box>
                                        </div>
                                        ))}
                                    </Container>
                                </HeroBody>
                            </div>
                            </Hero>
                        <div>
                        {data.note.map(note => (
                            <Container>
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
                                    <CardFooterItem href="#/">
                                        archive
                                    </CardFooterItem>
                                </CardFooter>
                            </Card>
                            </Container>
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
                deceased
                :
                false
*/