import React from "react";
import BenefitsItem from "../BenefitsItem";


    const benefits = [
        
        {
            title: "Delivery",
            text:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iusto voluptas doloremque maxime aliquam dolor ad',
        },
        {
            title: "Products",
            text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        },
        {
            title: "Payments",
            text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iusto voluptas doloremque maxime aliquam dolor ad. Vitae cupiditate porro dolorum autem quae esse, molestiae',
        },
    ]

    const Benefits = () => {

    return (
        
        <div className=" container mx-auto flex flex-col md:flex-row  mb-20 space-y-8 md:space-y-0 md:space-x-8 sm:w-3/4 md:w-full "> 
           {benefits.map((item, index) => (
            <BenefitsItem key={index} item={item} />
           ))}
        </div>
    )
}

export default Benefits