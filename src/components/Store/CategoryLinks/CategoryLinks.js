import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const renderCategoryLink = ({ name, slug }, idx) => (
  <Button key={ slug } variant='contained' color="default">
    <Link href={ `#${slug}` }>
      <Typography variant='h6' style={ { textTransform: 'none' } }>
        { name }
      </Typography>
    </Link>
  </Button>
);

const CategoryLinks = storeData => {
  return (
    <div style={ { display: 'flex', flex: 1, justifyContent: 'center', padding: '10px' } }>
      { storeData.map(renderCategoryLink) }
    </div>
  );
}

export default CategoryLinks;
