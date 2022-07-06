import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"
import './index.css'


function NumberedList() {
    return(
        <span className='container'>
            {/* console.log(Header) */}
            <h1>things I like about react</h1>
            <ol>
                <li>its composable</li>
                <li>its declaritive</li>
                <li>its common(easier to find courses)</li>
            </ol>
        </span>
    )

}

function Footer() {
    return (
        <footer>
            <small>© 20xx frank development. all rights reserved.</small>
        </footer>
    )
}

function Page() {
    const page = (
        <div>
            <Header/>
            <NumberedList/>
            <Footer/>
        </div>
    )
    // console.log(page)
    return page
}
ReactDOM.createRoot(document.getElementById("root")).render(
    <Page/>
)
    
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <Header/>
// )

