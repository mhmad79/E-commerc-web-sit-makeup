import React from "react";
import Brandlink from "../Brandlink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import links from "../../data/footerLinks.json"

const Footer = () => {

    return (
       <footer className=" flex bg-dark text-light p-8">

        <Brandlink classes=" text-yellow pl-4 inline-block "/>

            <div className=" flex justify-between mx-auto flex-wrap">
            {/* flex justify-between mx-auto */}
                {links.map(item => (
                    <div className=" flex flex-col flex-wrap mr-10 mb-10 " key={item.title }>
                        {/**/}
                        <h6 className="font-font-krona text-sm ml-4">{item.title}</h6> 
                        <div className=" flex flex-col">
                        {item.links.map(link  => (
                            <Link to={link.path} key={link.name}  className=" ml-4 hover:text-yellow"> 
                                {link.name}
                            </Link>
                        ))} 
                    </div>
                </div>
                ))}
            </div>

    
            <div className=" flex flex-col">
                <FontAwesomeIcon className=" text-yellow mb-2 hover:text-white" icon={faFacebook} size='2x' />
                <FontAwesomeIcon className="  text-yellow mb-2 hover:text-white" icon={faTwitter} size='2x' />
                <FontAwesomeIcon className="  text-yellow mb-2 hover:text-white" icon={faInstagram} size='2x' />
            </div> 


       </footer>
    )
}

export default Footer