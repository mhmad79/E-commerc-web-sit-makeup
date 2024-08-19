import React from "react";

const BenefitsItem = ({item}) => {
    return (
        <div className="flex flex-1">
            <div className=" mr-4 relative">
                <div className=" w-10 h-10 absolute
                    rounded-full bg-yellow top-0 -z-10 "></div>
                        

            {item.title === "Products" &&( 
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24"
                strokeWidth={1} 
                stroke="currentColor"
                className=" h-10 w-10 ml-4">
                <path strokeLinecap="round"
                strokeLinejoin="round" 
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                
                )}
                {item.title === 'Payments' && (
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1} 
                stroke="currentColor" 
                className=" h-10 w-10 ml-4">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
                
                
            )}

            {item.title === 'Delivery' && (
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1" 
                stroke="currentColor" 
                className=" h-10 w-10 ml-4">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

            )}


            </div>

            <div>
                <h2 className=" font-font-krona text-md">{item.title}</h2>
                <p className=" text-xs">{item.text}</p>
            </div>
        </div>

    )
}

export default BenefitsItem