import React, { Component } from "react";
import { Card, Button, Modal, Icon } from 'antd';
import ModalTitle from "./ModalTitle";

class PersonCard extends Component {
    state = {
        modalOpen: false,
        numberVisible: false,
        emailVisible: false,
    }

    showModal = () => {
        // Open modal
        this.setState({
            modalOpen: true,
        })
    }

    cancelModal = (e) => {
        // Close modal and Reset visibility of data in modal
        this.setState({
            modalOpen: false,
            numberVisible: false,
            emailVisible: false,
        })
    }

    showNumber = () => {
        // Show number
        this.setState({
            numberVisible: true,
        });
    }

    showEmail = () => {
        // Show email
        this.setState({
            emailVisible: true,
        })
    }

    render() {
        const { name, address, id, hash, number, email } = this.props.data;
        const { numberVisible, emailVisible } = this.state;

        const moreButton = <Button type="danger" onClick={this.showModal}>More</Button>

        const numberComponent = (
            <div>
                <Icon type="phone" />&nbsp;
                <span onClick={this.showNumber}>
                    {numberVisible ? number : "click to view"}
                </span>
            </div>
        );

        const emailComponent = (
            <div><Icon type="mail" />&nbsp;
                            <span onClick={this.showEmail}>
                    {emailVisible ? <a href={"mailto:" + email}>{email}</a> : "click to view"}
                </span>
            </div>
        );

        return (
            <React.Fragment>
                <Card
                    title={name}
                    extra={moreButton}
                    style={{ margin: "5px" }}
                >
                    <p>{address ? address : " "}</p>
                </Card>

                <Modal
                    title={<ModalTitle id={id} hash={hash} />}
                    visible={this.state.modalOpen}
                    onCancel={this.cancelModal}
                    footer={false}
                >
                    {number ? numberComponent : ""}

                    {email ? emailComponent : " "}
                </Modal>

            </React.Fragment >
        )
    }
}

export default PersonCard;
