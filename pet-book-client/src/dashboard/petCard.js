import React, { Component } from "react";

import { Box, Button } from 'bloomer';
import 'bulma/css/bulma.css';
import dog from "../img/petBookLogo_white.png"
import cat from "../img/petBookKitty.png"
import "./dashboard.css"


class CustomCard extends Component {
    uniqueKey = 1

    render() {
        return (
            <div className="container_dashboard"> 
            {this.props.resource.map(c => (
                <div key={this.uniqueKey+=1}>
                <Box className="card_pet"> 
                    {c.pet_type === "http://127.0.0.1:8000/pet-types/1/" ? <img src={dog} alt={c.name} /> : <img src={cat} alt={c.name}/>}
                    <Button 
                    isColor="info"
                    isOutlined
                    isSize={4} 
                    id="pet__profile" 
                    onClick={()=>{
                        this.props.ProfileHandler(c.url)
                        this.props.viewHandler('profile')
                    }}>{c.name}</Button>
                </Box>
                </div>
                ))}
            </div>
        )
    }
}

export default CustomCard
