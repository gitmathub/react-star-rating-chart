import React from 'react'
import ReactDOM from 'react-dom'

import RatingStats from './components/RatingStats'

// fetch data and pass it as properties to RatingStats

ReactDOM.render(
  <RatingStats
    ratings={[20, 25, 12, 7, 3]}
    ratingAverage={3.8}
    raterCount={67}/>,
  document.getElementById('root')
)
