import React, { Component } from "react";
import CardList from "./CardList";
import { Redirect, withRouter } from "react-router-dom";
import { Button } from "antd";
import getData from "../backend/dummy-server";

class Home extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const startIndex = this.getCurrentPageIndex();
        let data = getData({ startingIndex: startIndex });
        this.setState({ data });
    }

    getCurrentPageIndex() {
        const { index } = this.props.match.params;
        let startIndex = index;
        if (index === undefined) {
            startIndex = 0;
        }
        startIndex = parseInt(startIndex);
        return startIndex;
    }

    reloadPage() {
        window.location.reload();
    }

    reloadFirstPage() {
        this.props.history.push('/');
        window.location.reload();
    }

    gotoNextPage() {
        const startIndex = this.getCurrentPageIndex();
        let nextIndex = startIndex + this.state.data.length;
        this.props.history.push('/' + nextIndex);
        window.location.reload();
    }

    quickLoad() {
        const startIndex = this.getCurrentPageIndex();
        let nextIndex = startIndex + this.state.data.length;
        let loaded = getData({ startingIndex: nextIndex });
        console.log(loaded);

        this.setState({
            data: [...this.state.data, ...loaded]
        })
    }

    lazyLoad() {
        setTimeout(() => this.quickLoad(), 2000);
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <CardList data={data} />

                <br />
                <div>
                    <Button type="danger" onClick={() => this.reloadPage()}>Reload Current Page</Button>
                    <Button type="danger" onClick={() => this.reloadFirstPage()}>Navigate First Page</Button>
                    <Button onClick={() => this.gotoNextPage()}>Navigate Next 4 Items</Button>
                    <Button onClick={() => this.quickLoad()}>Quick Load More 4 Items</Button>
                    <Button onClick={() => this.lazyLoad()}>Lazy Load More 4 Items</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
