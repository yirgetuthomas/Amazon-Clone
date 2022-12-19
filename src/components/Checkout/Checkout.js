import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/confirm-banner._CB485943246_.gif" alt="" className="checkout__ad" />
        <h3>Hello</h3>
        <h2 className='checkout__title'>Your shopping Basket</h2>
        {basket.map((item) => (
           <CheckoutProduct 
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
           />
        )

        )

        }
        
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
