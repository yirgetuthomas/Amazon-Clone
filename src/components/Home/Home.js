import React from 'react'
import Product from '../Product/Product'
import UncontrolledExample from './Carousel'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="home__container">
        {/* <img src="https://m.media-amazon.com/images/I/71+iz4PiLCL._SX3000_.jpg" alt="" className="home__image" /> */}
        <UncontrolledExample />
      </div>
      <div className="home__row">
      <Product 
        id='12321341'
        title='The Lean Startup: ...'
        price={11.96}
        rating={5}
        image='https://m.media-amazon.com/images/I/71OC19qXVbS._AC_SY238_.jpg'
      />
       <Product 
        id='12321342'
        title='The Lean Startup: ...'
        price={12}
        rating={4}
        image='https://m.media-amazon.com/images/I/71OC19qXVbS._AC_SY238_.jpg'
      />
      </div>
      <div className="home__row">
      <Product 
        id='12321343'
        title='The Lean Startup: ...'
        price={25}
        rating={3}
        image='https://m.media-amazon.com/images/I/71OC19qXVbS._AC_SY238_.jpg'
      />
       <Product 
        id='12321344'
        title='The Lean Startup: ...'
        price={19.19}
        rating={2}
        image='https://m.media-amazon.com/images/I/71OC19qXVbS._AC_SY238_.jpg'
      />
       <Product 
        id='12321345'
        title='The Lean Startup: ...'
        price={16.96}
        rating={4}
        image='https://m.media-amazon.com/images/I/71OC19qXVbS._AC_SY238_.jpg'
      />
      </div>
      <div className="home__row">
      <Product 
        id='12321346'
        title='The Lean Startup: ...'
        price={990.96}
        rating={6}
        image='https://m.media-amazon.com/images/I/71OC19qXVbS._AC_SY238_.jpg'
      />
      </div>
    </div>
  )
}

export default Home
