import React from 'react';
import {useProductlist} from '../hooks/useProductlist';
import ProductCard from './ProductCard'

const ProductList = () => {

  const {products} = useProductlist();

  return(
      <div className="productList">
        {
          products.map(product => <ProductCard key={product.id} title={product.title} imageUrl={product.image} price={product.price} />)
        }
      </div>
  )
}

export default ProductList;
