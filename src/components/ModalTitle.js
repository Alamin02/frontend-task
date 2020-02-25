import React, { Component } from "react";

class ModalTitle extends Component {
    render() {
        const { id, hash } = this.props;
        return (<p> ID: {id} <br />Hash: {hash}</p>)
    }
}

export default ModalTitle;