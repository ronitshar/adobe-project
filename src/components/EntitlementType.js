import React from 'react';

class EntitlementType extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p> {this.props.name} </p>
        );
    }

}

export default EntitlementType;
