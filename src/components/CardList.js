import React, { Component } from "react";
import PersonCard from "./PersonCard";

import { Col, Row } from "antd";

class CardList extends Component {
    render() {

        return (
            <div>
                <Row gutter={16}>

                    {this.props.data.map((person, index) => {
                        return (
                            <Col span={6} key={index}>
                                <PersonCard data={person} />
                            </Col>
                        )
                    })}

                </Row>

            </div>
        );
    }
}

export default CardList;
