import React from 'react';
import Category from './Category/Category';
import storeData from './store.data';
import { toTrainCase } from '../../utilities/casing';
import './Store.css';

const renderCategory = (c, idx) => <Category category={ c } key={ c.slug } idx={ idx } />;

const Store = () => {
  const newStoreData = storeData.map(c => ({ ...c, slug: `store-category-${toTrainCase(c.name)}` }));

  return (
    <div>
      { newStoreData.map(renderCategory) }
    </div>
  );
};

export default Store;
