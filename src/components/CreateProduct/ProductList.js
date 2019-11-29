import React from 'react';

import ProductItem from './ProductItem';

const ProductList = ({
  authUser,
  messages,
  onEditMessage,
  onRemoveMessage,
})=>(
  <div>
    {messages.map(message => (
      <ProductItem
        authUser={authUser}
        key={message.uid}
        message={message}
        onEditMessage={onEditMessage}
        onRemoveMessage={onRemoveMessage}
      />
    ))}
  </div>
);

export default ProductList;
