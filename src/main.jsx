import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

const headers = (
    <div>
        <h1>info site</h1>
        <h2>animals</h2>
        <h2>locations</h2>
        <h2>how many</h2>
    </div>
)
ReactDOM.createRoot(document.getElementById("root")).render(
        headers
)