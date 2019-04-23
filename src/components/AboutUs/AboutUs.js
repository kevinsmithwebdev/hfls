import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import './AboutUs.css';

import imgRoxana from '../../assets/images/aboutUs/roxana.jpg';
import imgAnna from '../../assets/images/aboutUs/anna.jpg';
import imgMelanieFay from '../../assets/images/aboutUs/melanieFay.jpg';

const imageStyles = { width: '200px', height: 'auto' };

const people = [
  {
    title: 'Roxana Núñez Trabucco - Author',
    image: imgRoxana,
    text: [
      'Roxana is a Peruvian author that holds a Masters Degree in Applied Linguistics to Teach Spanish as a Foreign Language, from the University of Jaén (Spain). Throughout her more than 16 years of experience as an elementary school Spanish teacher, and before beginning her career as an author, Roxana developed material considering her students suggestions and the specific conditions where she had to teach Spanish, as an after school activity.',
      'The results are these textbooks series Have Fun Learning Spanish that have been tested several times and try to expose children to the Spanish language at a young age, emphasizing the importance of movement and playing while learning, and at the same time introducing children to literacy and reading as a base to acquire a solid foundation in the Spanish language.',
      'Roxana’s works is in process as she is still developing new textbooks, songs to reinforce what has been learned, bilingual stories and online material for teachers and students.',
      'In her free time Roxana enjoys traveling, reading, and translating children’s and young adult’s books into Spanish.',
    ],
  },
  {
    title: 'Anna Alexeeva - Illustrator',
    image: imgAnna,
    text: [
      'Anna Alexeeva is a freelance artist living in the East Bay area of California since 2010. She was born in Minsk, Belarus.',
      'Anna’s main focus is graphic design and illustration, but she also has a passion for fine arts. She loves to experiment with any medium that can bring her ideas to life, from digital pen to oil.',
      'Roxana’s works is in process as she is still developing new textbooks, songs to reinforce what has been learned, bilingual stories and online material for teachers and students.',
    ],
    link: 'https://soskina.com/',
  },
  {
    title: 'Melanie Fay - Illustrator',
    image: imgMelanieFay,
    text: [
      'Melanie Fay is a freelance illustrator and art teacher living in upstate New York. She studied at The School of the Art Institute of Chicago and holds a BFA from The Cooper Union School of Art. She loves animals and art projects and really anything that is creative and fun.',
    ],
    link: 'http://www.melaniefay.com/',
  },
];


const renderTitle = title => (
  <Typography gutterBottom variant="h5" component="h2">
    {title}
  </Typography>
);

const renderPara = (text, isLast) => (
  <Typography paragraph={ !isLast } component="p">
    {text}
  </Typography>
);

const renderPersonCard = ({ image, title, text, link }) => (
  <Card style={{ display: 'flex', margin: '10px' }}>
    <CardMedia
      className='img imgTeaching'
    >
      <img src={image} style={imageStyles} alt={ title } />
    </CardMedia>
    <CardContent>
      {renderTitle(title)}
      {text.map((p, i) => renderPara(p, i === text.length - 1))}
      { !!link &&
        <Link href={ link } className={ link }>
          See more of her work.
        </Link>
      }
    </CardContent>
  </Card>
);

const AboutUs = () => (
  <div id='AboutUs'>
    {people.map(p => renderPersonCard(p))}
  </div>
)

export default AboutUs