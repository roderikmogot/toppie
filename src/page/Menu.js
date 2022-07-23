import React from 'react'
import Banner from '../asset/BannerAll.jpg';
import '../style/Menu.css';
import { card } from '../card/list';
import MenuCard from '../component/MenuCard';
import '../style/Catbar.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
        <div className='MenuTop'>
            <img src= {Banner} alt='BannerDrinks'></img>
        </div>
        <div className='CategoryBar'>
            <Link to='/menu' className='active'>All</Link>
            <Link to='/signature'>Signature Burger</Link>
            <Link to='/burger'>Burger</Link>
            <Link to='/chicken'>Chicken</Link>
            <Link to='/drinks'>Drinks</Link>
        </div>
        <div className= 'ProductCard'>
            {card.map((menuCard, key)=> {
                return <MenuCard 
                key={key}
                image={menuCard.image} 
                name={menuCard.name} 
                price={menuCard.price}
                details={menuCard.details}
                linkgfs={menuCard.linkgfs}
                linkgfk={menuCard.linkgfk}
                linksfs={menuCard.linksfs}
                linksfk={menuCard.linksfk}/>
            })}
        </div>
    </div>
  )
}

export default Menu