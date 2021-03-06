import React, { Component } from "react";

import { Hero, Box, Columns, Title, HeroFooter, HeroHeader } from 'bloomer';
import 'bulma/css/bulma.css';
import './dashboard.css'
import CustomCard from "./petCard";
import avatar from "../img/petBookLogo_white.png"




class DashBoard extends Component {

componentDidMount(){
    this.props.getuserPets()
    this.props.getFollowedPets()
}

    render() {
        return (
            <div>
                {this.props.isAuth === true ?
                    <Hero isSize='medium' id="dash__color">
                        <HeroHeader>
                            <Box hasTextAlign='centered'>
                                <Title>My Pets</Title>
                            </Box>
                            <Columns isCentered >
                                <CustomCard resource={this.props.userPets} viewHandler={this.props.viewHandler} ProfileHandler={this.props.ProfileHandler} />
                            </Columns>
                        </HeroHeader>
                        <HeroHeader >
                            <Box hasTextAlign='centered'>
                                <Title>Followed</Title>
                            </Box>
                            <Columns isCentered>
                                <CustomCard resource={this.props.followedPets} viewHandler={this.props.viewHandler} ProfileHandler={this.props.ProfileHandler} />
                            </Columns>
                        </HeroHeader>
                        <HeroFooter>
                            <Box hasTextAlign='centered'>
                                <a id="button__follow"
                                    onClick={() => {
                                        this.props.viewHandler('follow')
                                    }}><Title>Follow</Title></a>
                            </Box>
                        </HeroFooter>
                    </Hero>
                    :
                    <Hero isSize="medium">
                        <HeroHeader>
                            <Box className="logo">
                                <img src={avatar} alt="PetBook"></img>
                                <Title>PetBook</Title>
                            </Box>
                        </HeroHeader>
                    </Hero>
                }
            </div>

        )
    }
}

export default DashBoard
