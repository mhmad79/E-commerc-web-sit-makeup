import React from "react";

const BenefitsItem = ({item}) => {
    return (
        <div className="flex flex-1">
            <div className=" mr-4">

                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" h-10 w-10">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>

            </div>

            <div>
                <h2 className=" font-font-krona text-sm">{item.title}</h2>
                <p className=" text-xs">{item.text}</p>
            </div>
        </div>

    )
}

export default BenefitsItem