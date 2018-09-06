import React, { Component } from "react";

import { Box, CardContent, Media, MediaContent, CardImage, Image, Title } from 'bloomer';
import 'bulma/css/bulma.css';
import avatar from "../img/petBookLogo_white.png"
import "./dashboard.css"


class CustomCard extends Component {
    

    render() {
        return (
            <div className="container_dashboard"> 
            {this.props.resource.map(c => (
                <Box> 
                    <CardImage>
                        {c.image === "" ? <Image isSize="16x16" src={c.image}/> : <Image isSize="16x16" src={avatar}/>}
                    </CardImage>
                    <CardContent>
                        <Media>
                            <MediaContent>
                                <Title isSize={4}>{c.name}</Title>
                            </MediaContent>
                        </Media>
                    </CardContent>
                </Box>
                ))}
            </div>
        )
    }
}

export default CustomCard
