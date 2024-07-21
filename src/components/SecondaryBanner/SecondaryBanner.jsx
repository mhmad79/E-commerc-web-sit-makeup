import React  from "react";
import BouttonLink from "../BouttonLink";
import bannerImg from "./bannerImg.jpg"

const SecondaryBanner = () => {
    return (
        <div className=" container flex justify-between items-center mx-auto px-20 bg-pink w-full">
            <div> 
                <h4 className=" mb-4 font-font-krona">
                   Be natural <br/> be beautiful, <br/> be you.
                    </h4>
                    <BouttonLink path="/about" text="see more" />
            </div>
            <div className=" ml-4">
                <img
                className="py-8"
                width="200" 
                src={bannerImg}
                alt="" />
            </div>
        </div>
    )
}

export default SecondaryBanner