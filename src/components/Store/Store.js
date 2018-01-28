import React from 'react'

import Book from './Book/Book'
import Loading from '../../common/Loading/Loading'

import './Store.css'

class Store extends React.Component {

  constructor(store) {
    super(store)
    this.state = {
      books: null
    }
  }

  componentWillMount() {
    const dataUrl = `${process.env.PUBLIC_URL}/data/store/store.json`


    fetch(dataUrl, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
    .then((response) => response.json() )
    .then((data) => this.setState({ books: data }))
  }


  render() {

    const imgUrl = (img) => `${process.env.PUBLIC_URL}/data/images/store/${img}`

    if (!this.state.books)
      return <Loading />

    return (
      <div id='Store'>
        { this.state.books.map((book, idx) => <Book key={idx} {...book} img={imgUrl(book.img)}/>)}

      </div>
    )
  }
}

export default Store
