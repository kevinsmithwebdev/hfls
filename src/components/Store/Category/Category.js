import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Book from './Book/Book';
import { getCardColor } from '../../../constants/colors';

const imageStyle = { width: 'auto', height: 100, padding: '5px', borderRadius: '7px' };

const imagesWrapperStyle = { width: 200, height: 'auto', display: 'flex', flex: 1, flexDirection: 'row',
  flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' };

const renderBook = (book, idx) => <Book { ...book } isFirst={ !idx } />;

const renderImage = image => (
  <img
    key={ image }
    src={ image }
    style={ imageStyle }
    alt={ image } // fix alt
  />
);

const renderMainImages = (images) => (
  <div style={ imagesWrapperStyle } >
    {
      images.map(renderImage)
    }
  </div>
);

const Category = ({ category: { name, imagesMain, books, slug }, idx }) => {
  return (
    <div id='Category'>
      <Card
        id={ slug }
        key={ slug }
        raised
        style={ {
          display: 'flex', backgroundColor: getCardColor(idx), minHeight: '100px', margin: '20px 0', 
        } }
      >
        <CardContent>
          { renderMainImages(imagesMain) }
        </CardContent>
        <CardContent style={ { flex: 1, margin: '0 10px' } }>
          <Typography gutterBottom variant="h3" component="h3">
            Books for { name }
          </Typography>
          { books.map(book => renderBook(book, name)) }
        </CardContent>
      </Card>
    </div>
  );
}

export default Category;
