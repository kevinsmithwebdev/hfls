import React from 'react';
import Typography from '@material-ui/core/Typography';
import Book from './Book/Book';

import './Category.css';

const imageStyle = { width: 'auto', height: 100, padding: '5px', borderRadius: '7px' };

const imagesWrapperStyle = { width: 200, height: 'auto', display: 'flex', flex: 1, flexDirection: 'row',
  flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' };

const renderBook = (book, idx) => <Book key={ book.name } { ...book } isFirst={ !idx } />;

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
  const classString = `outer-wrapper outer-wrapper${idx % 2}`;
  return (
    <div className={ classString }>
      <div className='inner-wrapper category-wrapper'>
        <div className='category-images-wrapper'>
          { renderMainImages(imagesMain) }
        </div>

        <div className='category-table-wrapper'>
          <h3 className='category-label'>
            Books for { name }
          </h3>
          { books.map(book => renderBook(book, name)) }
        </div>
      </div>
    </div>
  );
}

export default Category;
