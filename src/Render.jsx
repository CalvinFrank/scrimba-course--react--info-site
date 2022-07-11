import React from 'react';
import Main from './components/Main';
import Image from "./components/Image";
import Footer from './components/Footer';
import Email from './components/Email';
import './index.css';
// import img from './OIP.jpg' 
function Render() {
    const page = (
        <div className='all'>
            {/* <h1>jdohiug</h1> */}
            <Image/>
            <div id='discriptions'>
                <Main/>
                <Email/>
                <Footer/>
            </div>
        </div>
    )
    return page
}
export default Render;