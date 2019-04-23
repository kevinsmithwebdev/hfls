import React from 'react'

import './TextPage.css'

import PageTextImg from './ParaTextImg/ParaTextImg'
import Loading from '../Loading/Loading'

class TextPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { pageData: null }
  }

  componentWillMount() {
    const dataUrl = `${process.env.PUBLIC_URL}/data/${this.props.page}/${this.props.page}.json`
    const imgUrl = (img) => `${process.env.PUBLIC_URL}/data/images/page/${img}`
    console.log('dataUrl', dataUrl);
    fetch(dataUrl, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
    .then((response) => response.json())
    .then((pageData) => {
      let newPD = pageData.map((page) => ({
        text: page.text || '',
        img: page.img ? imgUrl(page.img) : null,
        imgFloat: page.imgFloat || null,
        imgHeight: page.imgHeight || null
      }))
      this.setState({ pageData: newPD })
    })
  }

  render() {
    if (!this.state.pageData)
      return <Loading />

    return (
      <div id='TextPage'>
        { this.state.pageData.map((page, idx) => (
          <PageTextImg key={idx} text={page.text} img={page.img} imgFloat={page.imgFloat} imgHeight={page.imgHeight} />
        ))}
      </div>
    )
  }
}

export default TextPage
