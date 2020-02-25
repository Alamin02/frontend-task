import React, { Component } from "react";
import CardList from "./CardList";
import { withRouter } from "react-router-dom";
import { Button, Spin } from "antd";

class Home extends Component {
    state = {
        data: [],
        loading: false,
    }

    componentDidMount() {
        this.dataFetch();
    }

    spinToggle = () => {
        // Toggle the spinner visibility state
        this.setState({
            loading: !this.state.loading
        })
    }

    getCurrentPageIndex = () => {
        // Get first index from url
        const { index } = this.props.match.params;

        // Convert the String into Int
        let startIndex = parseInt(index);

        // Handle some possible wrong inputs
        if (index === undefined || isNaN(index)) startIndex = 0;

        return startIndex;
    }

    reloadPage = () => {
        window.location.reload();
    }

    reloadFirstPage = () => {
        this.props.history.push('/');
        window.location.reload();
    }

    gotoNextPage = () => {
        // Get first index for the current page
        const startIndex = this.getCurrentPageIndex();

        // Index of last loaded data in the page + 1
        let nextIndex = startIndex + this.state.data.length;

        // Boom! Let's go to the next
        this.props.history.push('/' + nextIndex);
        window.location.reload();
    }

    dataFetch = async () => {
        // Get first index for the current page
        const startIndex = this.getCurrentPageIndex();

        // Index of last loaded data in the page + 1
        let nextIndex = startIndex + this.state.data.length;

        // Get the data from the server
        await fetch('http://localhost:4000/' + nextIndex, { mode: "cors" }).then((response) => {
            return response.json();
        }).then((fetchedData) => {
            // When the data is recieved, now update the state to render new data
            this.setState({
                data: [...this.state.data, ...fetchedData.data]
            })
        });
    }

    quickLoad = () => {
        this.spinToggle();
        this.dataFetch().then(() => this.spinToggle());
    }

    lazyLoad = () => {
        this.spinToggle();
        setTimeout(() => {
            this.dataFetch().then(() => this.spinToggle());
        }, 5000);
    }

    render() {
        const { data, loading } = this.state;

        return (
            <div>
                <CardList data={data} />

                <div style={{ textAlign: "center" }}>{loading ? <Spin /> : ""}</div>

                <div>
                    <Button style={{ margin: "5px" }} type="danger" onClick={this.reloadPage}>Reload Current Page</Button>
                    <Button style={{ margin: "5px" }} type="danger" onClick={this.reloadFirstPage}>Navigate First Page</Button>
                    <Button style={{ margin: "5px" }} onClick={this.gotoNextPage}>Navigate Next 4 Items</Button>
                    <Button style={{ margin: "5px" }} onClick={this.quickLoad}>Quick Load More 4 Items</Button>
                    <Button style={{ margin: "5px" }} onClick={this.lazyLoad}>Lazy Load More 4 Items</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
