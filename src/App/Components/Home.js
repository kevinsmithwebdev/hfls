import React,{Component} from 'react'

import './Home.css'

class Home extends Component{
  constructor() {
    super()
    this.state = {}
  }

  render(){
    return(
      <div className={"home"}>
        Welcome to Home
      </div>
    )
  }
}

export default Home
