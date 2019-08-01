import React from 'react';
import ProductName from './ProductName';
import CreditCardOffering from './CreditCardOffering';
import SubscriptionStatus from './SubscriptionStatus';
import EntitlementType from './EntitlementType';
import EntitlementPeriod from './EntitlementPeriod';
import MarketSegment from './MarketSegment';
import RouteToMarket from './RouteToMarket';
import PromoCode from './PromoCode';
import PaymentStatus from './PaymentStatus';
import '../Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product">
                <ProductName name={this.props.properties.productName}/>
                <CreditCardOffering name={this.props.properties.creditCardOffering}/>
                <SubscriptionStatus name={this.props.properties.subscriptionStatus}/>
                <EntitlementType name={this.props.properties.entitlementType}/>
                <EntitlementPeriod name={this.props.properties.entitlementPeriod} />
                <MarketSegment name={this.props.properties.marketSegment}/>
                <RouteToMarket name={this.props.properties.routeToMarket}/>
                <PromoCode name={this.props.properties.promoCode}/>
                <PaymentStatus name={this.props.properties.paymentStatus}/>
            </div>
        );
    }

}

export default Product;
