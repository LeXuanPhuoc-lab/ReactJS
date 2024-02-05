import React from 'react'

const LineItem = ({item}) => {
  return (
    <li className="item" key={item.id}>    
       {JSON.stringify(item)}
    </li>
  )
};

export default LineItem;
