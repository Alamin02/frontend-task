import React, { Component } from "react";

import { Card, Button, Modal, Icon } from 'antd';

class PersonCard extends Component {

    state = {
        modalOpen: false,
        numberVisible: false,
        emailVisible: false,
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

    showNumber = () => {
        this.setState({
            numberVisible: true,
        });
    }

    showEmail = () => {
        this.setState({
            emailVisible: true,
        });
    }

    render() {
        const { name, address, id, hash, number, email } = this.props.data;
        const { numberVisible, emailVisible } = this.state;

        return (
            <React.Fragment>
                <Card
                    title={name}
                    extra={<Button type="danger" onClick={() => this.showModal()}>More</Button>}
                    style={{ margin: "5px" }}
                >
                    <p>{address ? address : " "}</p>
                </Card>

                <Modal
                    title={<p> ID: {id} <br />Hash: {hash}</p>}
                    visible={this.state.modalOpen}
                    onCancel={this.cancelModal}
                    footer={false}
                >
                    {number ?
                        <p><Icon type="phone" />&nbsp;
                            <span onClick={this.showNumber}>
                                {numberVisible ? number : "click to view"}
                            </span>
                        </p> : " "
                    }

                    {email ?
                        <p><Icon type="mail" />&nbsp;
                            <span onClick={this.showEmail}>
                                {emailVisible ? <a href={"mailto:" + email}>{email}</a> : "click to view"}
                            </span>
                        </p> : " "
                    }
                </Modal>
            </React.Fragment>
        )
    }
}

export default PersonCard;
