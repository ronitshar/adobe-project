import React from 'react';

class ProductName extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="productName">
                <p> {this.props.name} </p>
            </div>
        );
    }

}

export default ProductName;
