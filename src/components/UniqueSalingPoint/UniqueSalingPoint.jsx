import React from "react";

import BannerImg from "./imag.jpg"

const UniqueSalingPoint  = () => {
    return (
        <div className=" bg-light-grey relative -top-32 -z-10 pt-20 pb-16">
        <div className="container mx-auto flex items-center pt-20"> 
            
        <div className=" ml-4">
            <img className=" p-4" src={BannerImg} alt="" />
        </div>

        <div>

        <h2 className=" mb-4 text-3xl font-font-krona">
               Clean code that you deserve
                </h2>
            <p className=" text-sm mb-2 "> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Amet incidunt totam ut necessitatibus possimus quod? Iusto consectetur alias omnis nobis facere?
                </p>

            <p className=" text-sm"> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Amet incidunt totam ut necessitatibus possimus quod? Iusto consectetur alias omnis nobis facere?
                </p>

            </div>

        </div>
    </div>
    )
}


export default UniqueSalingPoint