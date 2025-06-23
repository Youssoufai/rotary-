"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/hor.jpg",
    "/images/witIya.jpg",
    "/images/IMG-20250623-WA0011.jpg",
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-11 bg-gray-100 overflow-hidden">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-black">
                    About <span className="text-green-600">Speaker Abbas</span>
                </h1>
            </div>

            {/* Slideshow Section */}
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        )
                    }
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === images.length - 1 ? 0 : prevIndex + 1
                        )
                    }
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* About Text */}
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-6">
                <p className="mb-4">
                    Hon. Abbas Tajuedeen hails from Kwarbai, Zaria LGA, Kaduna State. Born 1st October 1965, he comes from a distinguished lineage as a prince of the Zazzau Emirates. He holds the esteemed traditional title of{" "}
                    <span className="font-semibold text-black">Iyan Zazzau</span>.
                </p>

                <p>
                    Abbas began his professional journey as a primary school teacher, where he developed a strong passion for shaping young minds and contributing to grassroots development. {" "}
                    <span className="font-semibold text-black"></span>His dedication to education led him to academia, where he served as a lecturer at Kaduna State Polytechnic from 1993 to 2001.
                </p>
            </div>
        </section>
    );
}
