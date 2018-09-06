import React, { Component } from "react";

import { Hero, Box, Columns,Title, HeroFooter,HeroHeader } from 'bloomer';
import 'bulma/css/bulma.css';
import './dashboard.css'
import CustomCard from "./petCard";





class DashBoard extends Component {


    render() {
        return (
            <div>
            <Hero isSize='medium' isColor="light">
                <HeroHeader>
                    <Box hasTextAlign='centered'>
                        <Title>My Pets</Title>
                    </Box>
                    <Columns isCentered >
                        <CustomCard resource={this.props.userPets} />
                    </Columns>
                </HeroHeader>                    
                <HeroHeader >
                    <Box hasTextAlign='centered'>
                        <Title>Followed</Title>
                    </Box>
                    <Columns isCentered>
                        <CustomCard resource={this.props.followedPets} />
                    </Columns>
                </HeroHeader>
                <HeroFooter>
                    <Box hasTextAlign='centered'>
                        <a><Title>Follow</Title></a>
                    </Box>
                </HeroFooter>
            </Hero>
            </div>

        )
    }
}

export default DashBoard
