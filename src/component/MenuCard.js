import React, {useState} from 'react';
import Popup from '../component/Popup';
import PopupOrder from '../component/PopupOrder';

function MenuCard({image, name, price, details, linkgfs, linkgfk, linksfs, linksfk}) {
  const[isOpen, setIsOpen] = useState(false);

  const togglePopup = ()=>{
    setIsOpen(!isOpen);
  }

  const[orderOpen, setOrderOpen] = useState(false);

  const toggleOrderPopup = () =>{
    setOrderOpen(!orderOpen)
  }

  return (
    <div className='card'>
      <div className='menuCard'>
          <div style={{ backgroundImage: `url(${image})`}}></div>
          <h1>{name}</h1>
          <p>Rp. {price}</p> 
      </div>
      <div className='btn-detail'>
            <button onClick={togglePopup}>Details</button>
            {isOpen && <Popup content={<>
              <h2>{name}</h2>
              <div style={{ backgroundImage: `url(${image})`}}></div>
              <p>{details}</p>
            </>}
            handleClose={togglePopup}
            />}      
      </div>  
      <div className='btn-order'>
          <button onClick={toggleOrderPopup}>Order</button>
          {orderOpen && <PopupOrder content ={<>
            <h3>{name}</h3>
            <p>Order at :</p>
            <div className='app'>
            <a href= {linkgfs} rel="ugc" target="_blank">Gofood Sukajadi</a> 
            <a href= {linkgfk} rel="ugc" target="_blank">Gofood Karanganyar</a>
            <a href="https://grab.onelink.me/2695613898?pid=inappsharing&amp;c=6-CYTURTXVR36WAE&amp;is_retargeting=true&amp;af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-CYTURTXVR36WAE&amp;af_force_deeplink=true&amp;af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload" rel="ugc" target="_blank">Grabfood Sukajadi</a>
            <a href="https://grab.onelink.me/2695613898?pid=inappsharing&amp;c=6-C243E4NTNCCEKA&amp;is_retargeting=true&amp;af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C243E4NTNCCEKA&amp;af_force_deeplink=true&amp;af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload" rel="ugc" target="_blank">Grabfood Kebon Jeruk</a>
            <a href= {linksfs} rel="ugc" target="_blank">ShopeeFood Sukajadi</a>
            <a href= {linksfk} rel="ugc" target="_blank">ShopeeFood Kebon Jeruk</a>
            </div>
            </>}
            handleClose={toggleOrderPopup}
            />}
      </div>
    </div>
     )
}

export default MenuCard