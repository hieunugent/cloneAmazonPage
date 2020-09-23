import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(()=>{
    // generate the special stripe secret which
    // allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // stripe expects the total in a current subunit
            url: `/payments/create?total=${getBasketTotal(basket)*100}`
        })
        setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[basket]);

  const handleSubmit = async (event) => {
    //do all the fancy stuff of stripe
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=> {
        // paymentIntent = payment confirmation
        setSucceeded(true)
        setError(false);
        setProcessing(false)
        history.replaceState('/orders')
    })
  };
  const handleChange = (e) => {
    // listen for changes in the cardElement
    // and display any errors as the customer types their car detail
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1384 S edda ln</p>
            <p>Anaheim, CA</p>
          </div>
        </div>

        {/* Payment section - review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* all the product in your packet */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            {/* stripe magic will go */}
            <h3>payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>OrderTotal: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
                {/* Error */}
                {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
