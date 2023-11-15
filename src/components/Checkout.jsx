import React from 'react'
import "./Checkout.css";
import checkoutBanner from "../images/checkout_banner.svg";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    console.log(basket)

    return (

        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src={checkoutBanner} alt="" />

                <div>
                    <h1 className="checkout__title">Your shopping Basket</h1>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
