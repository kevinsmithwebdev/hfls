import React from 'react'

import './Book.css'

const Book = ({ title, subtitle, img, description, gradeLevel, price, link }) => {

  return (
    <div id='Book'>

      <img className="book-img" src={img} alt={img} width="80px" height='auto'/>

      <div className="book-title-box">
        <span className="book-title">{title}</span>
        { subtitle
          ? <React.Fragment>
              <span className="book-title"> : </span>
              <span className="book-subtitle">{subtitle}</span>
            </React.Fragment>
          : null
        }
      </div>

      <div className="book-description">
        {description}
      </div>
      <div className="book-grade-level">
        {gradeLevel}
      </div>
      <div className="book-price">
        {price}
      </div>
      <div className="book-link">
        {link}
      </div>
    </div>
  )
}

export default Book
