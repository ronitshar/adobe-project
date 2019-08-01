import React from 'react';

class MarketSegment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p> {this.props.name} </p>
        );
    }

}

export default MarketSegment;
