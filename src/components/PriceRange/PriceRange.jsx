import React from "react";

const PriceRange = () => {
    return (
        <div className=" bg-gray-100 mb-4 py-4 px-4">
            <h4 className=" font-font-krona text-sm mb-2">select price</h4>
            <div className=" flex justify-between">
            <div className=" text-center text-sm"> 
                <input type="text" name="min" id="min"
                    className=" w-20 text-center p-2 text-sm focus:ring-2
                    focus:ring-yellow 
                    focus:ring-inset caret-yellow 
                    outline-none"
                        placeholder="min"
                    />
                    <label className="text-xs" htmlFor="min">min</label>
            </div>
                <hr className=" border border-yellow w-full mt-4" />
            <div className=" text-center ">
                    
                <input type="text" name="max" id="max"
                    className=" w-20 text-center p-2 text-sm focus:ring-2
                    focus:ring-yellow 
                    focus:ring-inset caret-yellow 
                    outline-none "
                    placeholder="max"
                    />
                    <label className="text-xs" htmlFor="max">max</label>
            </div>
            </div>
        </div>
    )
}

export default PriceRange