import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Book from './Book/Book';
import { getCardColor } from '../../../constants/colors';

const imageStyle = { width: '150px',  height: 'auto', padding: '5px', borderRadius: '7px' };

const renderBook = ({ name, price }, idx) => <Book key={ name } name={ name } price={ price } isFirst={ !idx } />;

const Category = ({ category: { name, imageMain, books, slug }, idx }) => {
  const altTitle = `spread of books for ${name}`;
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
          <img src={ imageMain } style={ imageStyle } alt={ altTitle } />
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
