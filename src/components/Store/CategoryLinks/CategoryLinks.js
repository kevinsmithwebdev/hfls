import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { getCardColor } from '../../../constants/colors';

const renderCategoryLink = ({ name, slug }, idx) => (
  <Button key={ slug } style={ { margin: '0 5px', backgroundColor: getCardColor(idx) } } variant='contained'>
    <Link href={ `#${slug}` }>
      <Typography variant='h6' style={ { textTransform: 'none' } }>
        { name }
      </Typography>
    </Link>
  </Button>
);

const CategoryLinks = storeData => {
  return (
    <div style={ { display: 'flex', flex: 1, justifyContent: 'center' } }>
      { storeData.map(renderCategoryLink) }
    </div>
  );
}

export default CategoryLinks;
