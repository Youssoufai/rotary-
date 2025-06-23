"use client";
import React from "react";
import { motion } from "framer-motion";

const newsData = [
    {
        id: 1,
        title: "Speaker Abbas Tajudeen had the honour of representing President Bola Ahmed Tinubu",
        date: "June 18, 2025",
        description: "Today, Speaker Abbas Tajudeen had the honour of representing President Bola Ahemd Tinubu, GCFR, at the commissioning of the ultra-modern Mabushi Bus Terminal in Abuja",
        image: "/images/comission.jpg",
    },
    {
        id: 2,
        title: "Today I had the honour of joining the President for Juma'at Prayers",
        date: "June 20, 2025",
        description: "Today, I had the honour of joining His Excellency, President Bola Ahmed Tinubu, GCFR, for Juma'at prayers at the Ansarudeen Mosque in Abuja.",
        image: "/images/prayers.jpg",
    },
    {
        id: 3,
        title: "The recent killings in Benue State are a tragic reminder for Justice, Peace and Security",
        date: "June 19, 2025",
        description: "I am deeply pained by the senseless and barbaric attacks on the people of Yelwata and Daudu in Guma LGA. My heart goes out to the victims, their families, and entire people of Benue State. No one deserves to live in fear or mourn loved ones lost to such evil",
        image: "/images/benue.jpg",
    },
];

const NewsCard = ({ news }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
            whileHover={{ scale: 1.05 }}
        >
            <img src={news.image} alt={news.title} className="w-full h-52 object-cover" />
            <div className="p-5">
                <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">News</span>
                <p className="text-gray-600 text-sm mt-2">{news.date}</p>
                <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{news.description}</p>
            </div>
        </motion.div>
    );
};

export default function NewsSection() {
    return (
        <section className="py-10 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Latest News</h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {newsData.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
