import React, { Component } from "react";

import { Hero, Box, Columns, Title, HeroHeader , HeroBody} from 'bloomer';
import 'bulma/css/bulma.css';
import './follow.css'
import CustomCard from "../dashboard/petCard";





class Follow extends Component {
    state = {
        allPets: []
    }

    getAllPets() {
        let token = localStorage.getItem("token")
        fetch(`http://127.0.0.1:8000/pets/`, {
            method: 'GET',
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((pets) => {
                this.setState({ allPets: pets })
            })
            .catch((err) => {
                console.log("fetch no like you, brah", err);
            })
    }

    componentDidMount() {
        this.getAllPets()
    }

    render() {
        return (
            <div>
                <Hero isSize='large' id="follow__color" isFullHeight>
                    <HeroHeader>
                        <Box hasTextAlign='centered'>
                            <Title>Follow</Title>
                        </Box>
                   
                            <Columns isCentered>
                                <CustomCard userPets={this.props.userPets} resource={this.state.allPets} viewHandler={this.props.viewHandler} ProfileHandler={this.props.ProfileHandler} />
                            </Columns>
                    </HeroHeader>
                </Hero>
            </div>

        )
    }
}

export default Follow
