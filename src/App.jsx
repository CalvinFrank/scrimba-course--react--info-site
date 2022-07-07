import React from 'react';
import NavBar from './components/NavBar';
import Main from "./components/Main"
import './index.css';
// import img from './OIP.jpg' 
function App() {
    const page = (
        <div>
            <NavBar/>
            <Main/>
        </div>

    // console.log(page)
    )
    return page
}
export default App;