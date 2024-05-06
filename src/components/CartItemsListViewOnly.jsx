import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItemViewOnly from './CartItemViewOnly';

const CartItemsListViewOnly = () => {
    
    const { cartItems } = useSelector(state => state.cart);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItemViewOnly key={item.id} cartItem={item} />;
      })}
    </>
  )
}

export default CartItemsListViewOnly