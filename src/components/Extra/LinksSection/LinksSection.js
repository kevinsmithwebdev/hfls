import React from 'react'
import Loading from '../../../common/Loading/Loading'
import Links from './Links/Links'
import './LinksSection.css'

class LinksSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      linksData: null
    }
  }

  componentWillMount() {
    const dataUrl = `${process.env.PUBLIC_URL}/data/extra/${this.props.linksFile}.json`

    fetch(dataUrl, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
    .then((response) => response.json() )
    .then((data) => this.setState({ linksData: data }))
  }


  render() {

    if (!this.state.linksData)
      return <Loading />

    return (
      <div id='LinksSection'>
        <h2>Links</h2>
        { this.state.linksData.map((links, idx) => <Links links={links} key={idx} />) }
      </div>
    )

  }
}

export default LinksSection
