import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store/store/store'
import "./CartPopUp.css"

const CartPopUp: React.FC = ()=> {
    const dishesInCart = useSelector((state: IRootState) => state.order.value);
    const restToOrder = useSelector((state: IRootState) => state.restaurants.value.find((rest) => rest.id === dishesInCart[0].restaurantId )) || undefined;
    const [checkOut, setCheckOut] = useState(0)
    useEffect(() => {
        dishesInCart.map((total) => 
        {total.totalPrice && setCheckOut( checkOut + total.totalPrice)}
         )},[])

  return (
    <div id='cart-container'>
        <h1>YOUR ORDER</h1>
        <h2>{restToOrder?.name}</h2>
        <div id='dish-in-cart'>
        {dishesInCart.map((dish)=> {
         return   <div id='single-dish'>
                <img src={dish.img} alt={dish.name} />
                <div id='mid-div'>
                    <div id='mid-up'>
                        <div id='amount'>{dish.quantity}</div>
                        <div id='dish-name'>
                            <h3>{dish.name}</h3>
                            <p>₪{dish.totalPrice}.00</p>
                        </div>
                    </div>
                    <div id='mid-down'>
                        {dish.info && dish.info.map((info) => info !== "" && (<><p>{info}</p><hr /></>) 
                        )}
                    </div>
                </div>
                <div id='right-div'><p id='delete'>X</p><p>₪{dish.price}</p></div>
            </div>
        })}
        </div>
        <hr id='mid-hr'/>
        <div id='cart-input'>
            <h3>Add A Comment</h3>
            <textarea placeholder='Special requests, allergies, deary restrictions, etc.'></textarea>

        </div>
        <div id='btn-div'>
            <button id='checkout-btn'>CHECKOUT ₪{checkOut}</button>
            <button id='history-btn'>ORDER HISTORY</button>
        </div>
    </div>
  )
}

export default CartPopUp

function setState(): [any, any] {
    throw new Error('Function not implemented.')
}
