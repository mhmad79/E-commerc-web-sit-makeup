import React  from "react";
import BouttonLink from "../BouttonLink";
import bannerImg from "./bannerImg.jpeg"

const HeaderBanner = () => {
    return (
        <div className=" mx-6 mb-4" >
        <div className="  flex justify-between items-center 
            mx-auto md:px-20 bg-green w-full">
            <div> 
                <h3 className=" mb-4 font-font-krona text-sm text-light-grey">
                   Be natural <br/> be beautiful, <br/> be you.
                    </h3>
            </div>
            <div className=" ml-4">
                <img
                className="py-4"
                width="100" 
                src={bannerImg}
                alt="" />
            </div>
            </div>
        </div>
    )
}

export default HeaderBanner