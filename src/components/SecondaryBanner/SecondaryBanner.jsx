import React  from "react";
import BouttonLink from "../BouttonLink";
import bannerImg from "./bannerImg.jpeg"

const SecondaryBanner = () => {
    return (
        <div className=" container flex justify-between items-center mx-auto md:px-20 bg-green w-full">
            <div> 
                <h3 className=" mb-4 font-font-krona text-light-grey">
                   Be natural <br/> be beautiful, <br/> be you.
                    </h3>
                    <BouttonLink path="/about" text="see more" />
            </div>
            <div className=" ml-4">
                <img
                className="py-8"
                width="200" 
                src={bannerImg}
                alt="A bundle of Cream prducts " />
            </div>
        </div>
    )
}

export default SecondaryBanner