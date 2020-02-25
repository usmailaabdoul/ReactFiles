import React from 'react';
import Header from './Header';
import Showcase from './Showcase';
import Menu from './Menu';

const App = () => {
 
    return (
        <div>
            <Header/>
            <Showcase/>
            <h1 className='tc  dib br3 ba3 ma3 shadow-5 fl w-90 dark-pink'>TOP Cuisines</h1>
            <Menu/>
        </div>
    )
}

export default App;