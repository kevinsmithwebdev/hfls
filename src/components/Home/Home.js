import React from 'react'
import HeroImage from './HeroImage/HeroImage';
import FrontCards from './FrontCards/FrontCards';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import iLogo from '../../assets/images/lettertree.png'
import './Home.css'

const Home = () => (
  <div id='Home'>
    <HeroImage />

    <Card
      raised
      style={ {
        margin: '10px', backgroundColor: '#ddd', color: '#222', height: 'auto ', width: '100%'
      } }
    >
      <CardContent>
        <div className='wrapper'>
          <div>
            <p className='mainText'>Have Fun Learning Spanish is a comprehensive program for teaching Spanish to elementary school children.</p>
            <p className='mainText'>The program has books, games, and songs. It also has supporting material (e.g., flashcards) for teachers.</p>
          </div>
          <div>
            <img className='logo-image' src={ iLogo } alt='site logo - alphabet tree'/>
          </div>
        </div>
      </CardContent>
    </Card>

    <FrontCards/>
  </div>
);

export default Home
