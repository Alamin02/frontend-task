import React, { Component } from "react";

import { Card, Button, Modal } from 'antd';

class PersonCard extends Component {

    state = {
        modalOpen: false
    }

    showModal = () => {
        this.setState({
            modalOpen: true,
        });
    };

    cancelModal = (e) => {
        this.setState({
            modalOpen: false,
        });
    }

    render() {
        const { name, address, id, hash, number, email } = this.props.data;

        return (
            <div>
                <Card title={name} extra={<Button type="danger" onClick={() => this.showModal()}>More</Button>} style={{ width: 300 }}>
                    <p>{address ? address : " "}</p>
                </Card>

                <Modal
                    title={<p> ID: {id} <br />Hash: {hash}</p>}
                    visible={this.state.modalOpen}
                    onCancel={this.cancelModal}
                >
                    <p>{number ? number : " "}</p>
                    <p>{email ? email : " "}</p>
                </Modal>
            </div>
        )
    }
}

export default PersonCard;
