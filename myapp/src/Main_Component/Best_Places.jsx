import React, { useState } from 'react';
import Places from '../Data/Places';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Best_Places = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ImgView = 5;
    const totalImages = Places.length;

    const canGoNext = currentIndex + ImgView < totalImages;
    const canGoPrev = currentIndex > 0;

    const nextImage = () => {
        if (canGoNext) {
            setCurrentIndex((prev) => prev + ImgView);
        }
    };

    const prevImage = () => {
        if (canGoPrev) {
            setCurrentIndex((prev) => prev - ImgView);
        }
    };

    return (
        <div className="h-80 w-[90%] bg-gray-300 mx-auto rounded-xl shadow-2xl overflow-hidden">
            <div className="mt-6 mx-12 tracking-wide text-2xl text-black font-semibold flex justify-between items-center">
                <h1>Explore India's Most Beautiful Destinations</h1>
                <div className="flex space-x-2">
                    <button
                        className={`border-2 rounded-full p-1 ${!canGoPrev ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-200'} cursor-pointer`}
                        disabled={!canGoPrev}
                        onClick={prevImage}
                    >
                        <FaAngleLeft className="size-7" />
                    </button>
                    <button
                        className={`border-2 rounded-full p-1 ${!canGoNext ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-200'} cursor-pointer`}
                        disabled={!canGoNext}
                        onClick={nextImage}
                    >
                        <FaAngleRight className="size-7" />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden">
                <motion.div
                    className="flex ml-4"
                    animate={{ x: `-${(currentIndex / totalImages) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ width: `${(totalImages / ImgView + 0.3) * 100}%` }}
                >
                    {Places.map((item, index) => (
                        <div key={index} className='px-2 mt-10'>
                            <div className="relative h-40 w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-40 w-full object-cover"
                                />
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                                    <p className="text-white font-semibold text-xl">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Best_Places;