import React from 'react';
import image from '../src/img/image1.jpg'
import './Showcase.css'

const Showcase = () => {
    return (
        <div>
            <div style={{overflow: 'hidden', minHeight: '600px', backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', textAlign: 'left', borderBottom:'2px solid #ff41b0'}} >
            <div className='pl5 pt5 f4 dark-pink'>
                <h1>DELIS RESTAURANT</h1>
                <p className ='washed-yellow'>GET ALL YOUR AFRICAN AND EUROPEAN DISHES IN ONE PLACE</p>
            </div>
            <a href='##' className='br-pill-l' style={{color:'#d5008f', textDecoration: 'none', textTransform: 'none', fontSize:'18px', backgroundColor: '#ff80cc',marginTop:'350px',marginLeft:'120px',padding: '15px'}}>
            Contact Us for reservations</a>
            <a href='##' className='br-pill-l' style={{color:'#d5008f', textDecoration: 'none', textTransform: 'none', fontSize:'18px', backgroundColor: '#ff80cc',marginTop:'350px',marginLeft:'10px',padding: '15px'}}>
                GO to Menu</a> 
            </div>
        </div>
         
    );
}

export default Showcase;