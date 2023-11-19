import React, { useState } from 'react'
import "./Checkout.css";
import checkoutBanner from "../images/checkout_banner.svg";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{ user, basket }, dispatch] = useStateValue();

    console.log(basket)

    return (

        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src={checkoutBanner} alt="" />

                <div>
                    <h3>{user ? `Hello, ${user?.email}` : "Hello Guest"}</h3>
                    <h1 className="checkout__title">Your shopping Basket</h1>
                    {/* <FlipMove> */}
                    {basket.map((item, index) => (
                        <CheckoutProduct id={item.id} key={index} image={item.image} title={item.title} price={item.price} rating={item.rating} />
                    ))}
                    {/* </FlipMove> */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
