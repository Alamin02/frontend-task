import React, { Component } from "react";

import { Card, Button } from 'antd';

class PersonCard extends Component {
    render() {
        return (
            <div>
                <Card title={this.props.name} extra={<Button type="danger">More</Button>} style={{ width: 300 }}>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}

export default PersonCard;
