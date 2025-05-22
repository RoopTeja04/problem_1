import React from 'react';
import Data_Plans from '../Data/Plans';

const Plans = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-10 w-full'>
                <h1 className='text-xl font-semibold tracking-wider font-sans'>Trip Plans</h1>
                <div className="grid grid-cols-4 gap-10 p-12 mt-2">
                    {Data_Plans.map((item, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-white px-10 py-10 min-h-full">
                            <img src={item.image} alt={item.Trip_name} className="w-full h-36 object-cover rounded-md mb-2" />
                            <h2 className="text-xl font-semibold text-center pt-4">{item.Trip_name}</h2>
                            <p className="text-xl mt-4">Budget: ₹ {item.Budget.toLocaleString(2)} /-</p>
                            <ul className="text-xs mt-2 list-disc list-inside">
                                {item.Trip_Details.slice(0, 3).map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                                {item.Trip_Details.length > 3 && <button className='underline-offset-4 underline'>more</button>}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Plans