import React from 'react'
import LineTime from './LineItem';

const ListItem = ({items}) => {
  return (
    <ul>
       {items.map((item) => <LineTime item={item}/>)} 
    </ul>
  )
}

export default ListItem;
