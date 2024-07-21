import React from "react";
import BannerImg from "./leaf.jpg"
// import { Link } from "react-router-dom";
import BouttonLink from "../BouttonLink";

const Banner = () => {
    return (
        <div className=" container mx-auto flex items-center mt-20 mb-10 ">
            <div> 
                <h1 className=" mb-6 text-3xl font-font-krona">
                    The React project with API using Axios taiwind CSS and React Router
                    </h1>
                <p className=" text-sm mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis veniam ut provident ab quis inventore eaque enim neque
                    sed, deserunt, </p>

                    <BouttonLink path="/about" text="see more" isMain />
            
            </div>


            <div className=" ml-4">
                <img className=" p-4" src={BannerImg} alt="" />
            </div>
        </div>
    )
}

export default Banner