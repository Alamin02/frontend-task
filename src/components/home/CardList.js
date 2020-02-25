import React, { Component } from "react";
import PersonCard from "./PersonCard";

import { Col, Row } from "antd";

class CardList extends Component {
    render() {
        const cardsToRender = this.props.data.map((person, index) => {
            return (
                <Col span={6} key={index}>
                    <PersonCard data={person} />
                </Col>
            )
        })

        return (
            <div>
                <Row>
                    {cardsToRender}
                </Row>
            </div>
        );
    }
}

export default CardList;
