import React from "react";
import BannerImg from "./bannerImg.jpeg"
// import { Link } from "react-router-dom";
import BouttonLink from "../BouttonLink";

const Banner = () => {
    return (
        <div className=" container mx-auto flex flex-col-reverse md:flex-row items-center mt-0 md:mt-20 mb-10 ">
            <div> 
                <h1 className=" mb-6 text-3xl font-font-krona">The Makeup e-commerce project</h1>
                <p className=" text-sm mb-6 ">   This project is built with data from a MakeUp API using Axios, Tailwind CSS, ReactJS, PropTypes, React
                Context API and React Router </p>

                <p className=" text-sm mb-6 ">  Webtwo ipsum divvyshot. disqus elgg klout. Jumo wufoo hulu spotify trulia, twitter nuvvo. Omgpop tumblr
                odeo mog palantir squidoo balihoo nuvvo, etsy yuntaa elgg reddit kiko oovoo. Kno revver oovoo, blyve. </p>

                    <BouttonLink path="/about" text="see more" isMain />
            
            </div>


            <div className=" flex justify-center ml-0 md:ml-4 mb-4 md:mb-0 py-10 md:py-0 w-2/3 md:w-full  ">
                <img className="" src={BannerImg} alt="" />
            </div>
        </div>
        // ml-0 md:ml-4 mb-4 md:mb-0
    )
}

export default Banner