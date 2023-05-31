import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function payement() {
    const onToken=(token)=>{
        console.log(token);
    };
  return (
    <div>
      <StripeCheckout
        token={onToken}
        name="Paypal"
        currency="Inr"
        amount="14900"
        stripeKey="pk_test_51N5rxISGmEne94Mz41C1SZLCMWe8oaUbacpRY2jGWSDdrhfD8ZUMELOrDQG8XzriWGRgQYReAyAMNm3dnHYEinZj00SreHp7ji"
      />
    </div>
  )
}

export default payement

