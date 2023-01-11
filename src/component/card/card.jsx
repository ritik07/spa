import React from 'react'

const Card = () => {
  return (
    <div className='cs-card-wrapper'>
      {/* Image */}
      <div>
        <img className='cs-w-max'
          src="https://cdn.shopify.com/s/files/1/0100/6128/3392/products/Manisha-2021-09-07T172432.780.jpg?v=1642805323"></img>
      </div>

      {/* Name */}
      <div className='cs-cat-name'>
        Fidele
      </div>

      {/* Brief */}
      <div>
        Lorem ipsum dolor sit amet consectetur
      </div>

    </div>
  )
}

export default Card