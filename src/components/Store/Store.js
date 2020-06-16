import React, { useEffect } from 'react';

import Category from './Category/Category';
import { toTrainCase } from '../../utilities/casing';
import './Store.css';
import urls from '../../constants/urls';

const renderCategory = (c, idx) => <Category category={ c } key={ c.slug } idx={ idx } />;

const Store = ({ storeData, setStoreData }) => {
  useEffect(() => {
    if (!storeData) {
      fetch(urls.STORE_ALL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (!data.error) {
            setStoreData(data.data);
          }
        });
    }
  }, []);

  if (!storeData) {
    return <h2>Loading...</h2>;
  }
  const newStoreData = storeData.map(c => ({ ...c, slug: `store-category-${toTrainCase(c.name)}` }));
  return (
    <div>
      { newStoreData.map(renderCategory) }
    </div>
  );
};

export default Store;
