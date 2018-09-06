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
                <div>
                <Box key={c.url} > 
                    {c.image === "" ? <img src={c.image} /> : <img isSize="16x16" src={avatar}/>}
                    <Title isSize={4}>{c.name}</Title>
                </Box>
                </div>
                ))}
            </div>
        )
    }
}

export default CustomCard
