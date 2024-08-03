import React from "react";
import Brandlink from "../Brandlink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import links from "../../data/footerLinks.json"

const Footer = () => {

    return (
       <footer className=" flex bg-dark text-light flex-col md:flex-row justify-between  p-8">

        <Brandlink classes=" text-yellow mb-4 md:mb-0 md:pl-4 inline-block order-1 " />

            <div className=" flex flex-col justify-between md:flex-row md:mx-auto 
            space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
            {/* flex justify-between mx-auto */}
                {links.map(item => (
                    <div className=" flex flex-col flex-wrap " key={item.title }>
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

    
            <div className=" text-yellow space-x-4 md:space-x-0 flex order-2 md:order-3 md:block mb-6 md:mb-0 ">

                <a href="https://facebook.com" className="  mb-2 hover:text-light-grey block" target="_blank" rel="noreferrer">
                <FontAwesomeIcon   
                    icon={faFacebook}
                    size='2x' />
                </a>

                <a href="https://twitter.com" className="   mb-2 hover:text-light-grey block" target="_blank" rel="noreferrer">
                <FontAwesomeIcon  
                    icon={faTwitter}  
                    size='2x' />
                </a>

                <a href="https://instagram.com" className="   mb-2 hover:text-light-grey block" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon   
                icon={faInstagram} 
                size='2x' />
                </a>

            </div> 


       </footer>
    )
}

export default Footer