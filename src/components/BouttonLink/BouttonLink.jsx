import React from "react";
import { Link } from "react-router-dom";

const BouttonLink = ({text, path, isMain, className}) => {
    return(
            <div>
                <Link 
                    className={` rounded-full py-4 px-10 font-bold font-font-krona text-xs inline-block ${isMain ?
                        'bg-yellow' :
                        'bg-dark text-white py-2 px-4 '} ${className} `}
                        to={path}>
                        {text}
                    </Link>
            </div>
    )
}

export default BouttonLink