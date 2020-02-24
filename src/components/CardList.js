import React, { Component } from "react";
import PersonCard from "./PersonCard";

class CardList extends Component {
    render() {
        return (
            <div>
                <PersonCard name="Al Amin" />
            </div>
        );
    }
}

export default CardList;
