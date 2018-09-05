import React, { Component } from "react";

import { Hero, Box, Title, HeroFooter,HeroHeader } from 'bloomer';
import 'bulma/css/bulma.css';





class DashBoard extends Component {



    render() {
        const isAuth = this.props.isAuth
        console.log("isAuth?", isAuth)
        return (
            <div>
            <Hero isSize='medium' isColor="light">
                <HeroHeader>
                    <Box hasTextAlign='centered'>
                        <Title>My Pets</Title>
                    </Box>
                </HeroHeader>                    
                <HeroHeader >
                    <Box hasTextAlign='centered'>
                        <Title>Followed</Title>
                    </Box>
                </HeroHeader>
                <HeroFooter>
                    <Box hasTextAlign='centered'>
                        <Title>Follow</Title>
                    </Box>
                </HeroFooter>
            </Hero>
            </div>

        )
    }
}

export default DashBoard
