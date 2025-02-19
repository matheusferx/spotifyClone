import React from 'react'
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({title, items, itemsArray, path, idPath}) => {

  const {pathname} = useLocation();
  const isHome = pathname === '/';
  const finalItems = isHome ? items : Infinity;

  const validItemsArray = Array.isArray(itemsArray) ? itemsArray : [];

  return (
    <div className="item-list">
        <div className="item-list__header">
            <h2>{title} populares</h2>
            {isHome ? <Link to={path} className="item-list__link">
                Mostrar tudo 
            </Link> : <></>}
            
        </div>
              
        <div className="item-list__container">
            
            {validItemsArray.filter((currentValue, index) => index < finalItems).map((currObj, index) => {return <SingleItem idPath={idPath}{...currObj} key={`${title}-${index}`} />})}
        </div>
    </div>
  )
}

export default ItemList