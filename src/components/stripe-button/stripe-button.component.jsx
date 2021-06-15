import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51J2YMVDptoKsdGzkVQSynNrgOkIPitRtO2dya8OD6aRLBf1DCEVPceOMPv7Ch66UdBMlHziE917g2wf3w6fjNcyY00e0I9sNJB";

    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;