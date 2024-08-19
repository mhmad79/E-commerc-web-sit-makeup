import React from "react";

const Loaderr = () => {
    return (
        <div className=" w-20 h-20">
            <svg version="1.1" 
            id="L4"
            y='10px'
            x='10px'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100" 
            enableBackground="new 0 0 0 0">
            <circle fill=" #000" 
                stroke=""
                cx="6" cy="50" r="6">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"/>    
            </circle>
            <circle fill="#000" 
            stroke="none" 
            cx="26" cy="50" r="6">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite" 
                begin="0.2"/>       
            </circle>
            <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite" 
                begin="0.3"/>     
            </circle>
            </svg>
        </div>
    )
}


export default Loaderr