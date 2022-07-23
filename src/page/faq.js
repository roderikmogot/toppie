import React from 'react';
import Faq from 'react-faq-component';
import '../style/faq.css';

function faq() {
    const data ={
        rows: [
            {
              title: "Di mana lokasi restorannya?",
              content: "Toppie Burger terdapat di Jl.Kalipah Apo 59B dan Jl.Jurang 103 (Kita Space)"
            },
            {
              title: "Apakah Toppie Burger terdapat di GoFood?",
              content: "Ya, selain GoFood Toppie Burger juga terdapat di Grabfood, ShoppeeFood, dan TravelokaEats"
            },
            {
              title: "Apakah halal?",
              content: "Semua makanan yang disajikan oleh Toppie Burger 'Halal' (No Pork, No Lard)"
            },
        ],
    };

    const styles = {
        bgColor: 'fcecae',
        rowTitleColor: "black",
        rowContentColor: 'grey',
    };
    
    const config = {
        animate: true,
        arrowIcon: "V",
        tabFocus: true
    };

  return (
    <div className='Faq'>
        <div className='FaqTitle'>
            <h1>FAQ</h1>
        </div>
        <div className='FaqAcc'>
            <Faq 
            data={data}
            styles={styles}
            config={config}/>
        </div>
    </div>
  )
}

export default faq