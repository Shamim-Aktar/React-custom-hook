import React from 'react';

const ProductCard = ({ title, imageUrl, price }) => {
  return (
    <div className="productCard">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
