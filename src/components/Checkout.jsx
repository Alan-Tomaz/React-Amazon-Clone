import React from 'react'
import "./Checkout.css";
import checkoutBanner from "../images/checkout_banner.svg";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src={checkoutBanner} alt="" />

                <div>
                    <h1 className="checkout__title">Your shopping Basket</h1>

                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
