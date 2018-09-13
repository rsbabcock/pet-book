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
                        <CustomCard resource={this.props.userPets} viewHandler={this.props.viewHandler} ProfileHandler={this.props.ProfileHandler}/>
                    </Columns>
                </HeroHeader>                    
                <HeroHeader >
                    <Box hasTextAlign='centered'>
                        <Title>Followed</Title>
                    </Box>
                    <Columns isCentered>
                        <CustomCard resource={this.props.followedPets} viewHandler={this.props.viewHandler} ProfileHandler={this.props.ProfileHandler}/>
                    </Columns>
                </HeroHeader>
                <HeroFooter>
                    <Box hasTextAlign='centered'>
                        <a id="button__follow"
                        onClick={()=>{
                        this.props.viewHandler('follow')
                    }}><Title>Follow</Title></a>
                    </Box>
                </HeroFooter>
            </Hero>
            </div>

        )
    }
}

export default DashBoard
