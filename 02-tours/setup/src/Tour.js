import React, { useState, useContext } from 'react'

import {TourContext} from './App'

const Tour = ({ id, info, name, image, price }) => {
  const [readMore, setReadMore] = useState(false)

  const removeTour = useContext(TourContext)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>$ {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
