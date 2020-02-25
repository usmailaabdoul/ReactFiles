import React from 'react';
import Button from './Button';


const Header = () => {
    return (
        <div >
            <div style= {{  fontSize: '10px',  background:'#ff41b4', paddingTop:'2px', paddingBottom:'2px', minHeight: '0px'}}>
                <Button/>
                <h1 style={{ paddingLeft: '100px'}} >DELIS RESTAURANT</h1>
            </div>
            
        </div>
    );
}

export default Header;