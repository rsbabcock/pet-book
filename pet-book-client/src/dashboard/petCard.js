import React, { Component } from "react";

import { Box, Title } from 'bloomer';
import 'bulma/css/bulma.css';
import avatar from "../img/petBookLogo_white.png"
import "./dashboard.css"


class CustomCard extends Component {
    uniqueKey = 1

    render() {
        return (
            <div className="container_dashboard"> 
            {this.props.resource.map(c => (
                <div key={this.uniqueKey+=1}>
                <Box> 
                    {c.image === "" ? <img src={c.image} alt={c.name} /> : <img src={avatar} alt="default avatar"/>}
                    <Title isSize={4}>{c.name}</Title>
                </Box>
                </div>
                ))}
            </div>
        )
    }
}

export default CustomCard
