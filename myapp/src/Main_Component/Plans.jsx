import React, { useState, useRef, useEffect } from 'react';
import Data_Plans from '../Data/Plans';

const Plans = () => {

    const [expandedCards, setExpandedCards] = useState({});

    const toggleExpand = (index) => {
        setExpandedCards((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <>
            <div className='flex flex-col items-center mt-10 w-full'>
                <h1 className='text-xl font-semibold tracking-wider font-sans'>Trip Plans</h1>
                <div className="grid grid-cols-4 gap-10 p-12 mt-2">
                    {Data_Plans.map((item, index) => {
                        const isExpanded = expandedCards[index];
                        const detailRef = useRef(null);
                        const [height, setHeight] = useState('auto');

                        useEffect(() => {
                            if (detailRef.current) {
                                const scrollHeight = detailRef.current.scrollHeight;
                                setHeight(isExpanded ? `${scrollHeight}px` : `80px`);
                            }
                        }, [isExpanded]);

                        return (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-white px-10 py-8 transition-all duration-500"
                            >
                                <img
                                    src={item.image}
                                    alt={item.Trip_name}
                                    className="w-full h-36 object-cover rounded-md mb-2"
                                />
                                <h2 className="text-xl font-semibold text-center pt-4">{item.Trip_name}</h2>
                                <p className="text-xl mt-4">
                                    Budget: ₹ {item.Budget.toLocaleString()} /-
                                </p>

                                <div
                                    ref={detailRef}
                                    style={{
                                        maxHeight: height,
                                        overflow: 'hidden',
                                        transition: 'max-height 1.0s ease-in-out'
                                    }}
                                >
                                    <ul className="text-xs mt-2 list-disc list-inside">
                                        {(isExpanded ? item.Trip_Details : item.Trip_Details.slice(0, 3)).map(
                                            (detail, i) => (
                                                <li key={i}>{detail}</li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {item.Trip_Details.length > 3 && (
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="mt-2 text-blue-400 underline underline-offset-2 cursor-pointer transition-all"
                                    >
                                        {isExpanded ? 'Show Less' : 'Show More'}
                                    </button>
                                )}

                                <div className="w-full flex items-center justify-center mt-10 pb-2">
                                    <button className="bg-green-600 w-[85%] h-[40px] cursor-pointer rounded-lg transition hover:bg-green-500">
                                        Book Trip
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Plans