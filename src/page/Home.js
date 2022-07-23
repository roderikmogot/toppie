import React from 'react'
import Banner from '../asset/HomeBanner.jpg';
import {Link} from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Banner})`}}>
      <div className='header'>
        <h1>Toppie Burger</h1>
        <br></br>
        <br></br>
        <p>Juaranya Cheese Burger!!</p>
        <Link to='/menu'>
        <button>Order Now</button>
        </Link>
      </div>     
    </div>
  )
}

export default Home