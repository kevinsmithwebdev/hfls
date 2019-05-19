import React from 'react';
import Typography from '@material-ui/core/Typography';
import Category from './Category/Category';
import CategoryLinks from './CategoryLinks/CategoryLinks';
import storeData from './store.data';
import { toTrainCase } from '../../utilities/casing';
import './Store.css'; 

const renderCategory = (c, idx) => <Category category={ c } key={ c.slug } idx={ idx } />;

const Store = () => {
  const newStoreData = storeData.map(c => ({ ...c, slug: `store-category-${toTrainCase(c.name)}` }));
  
  return (
    <div>
      <Typography gutterBottom variant='h2' component='h2' >The Store</Typography>

      { CategoryLinks(newStoreData) }

      { newStoreData.map(renderCategory) }
    </div>
  );
};

export default Store;
