import React from "react";
import imgsrc from "../images/mail.jpeg"

function Email() {
    return (
        <div>
            <button type="button" className="email">
                <img src={imgsrc} className="buttonImg"/>
                Email
            </button>
        </div>
    )
}

export default Email