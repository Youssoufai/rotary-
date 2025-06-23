"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Briefcase, Globe, Target } from "lucide-react";

export default function Achievements() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

    return (
        <motion.section
            ref={sectionRef}
            className="py-16 px-6 bg-white overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-green-600 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <span className="text-black">Achievements &</span> Impact
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: false }}
                >
                    Over the years, Rt. Hon. Tajudeen Abbas has demonstrated unwavering commitment to national development, youth inclusion, and responsible governance. Through legislation, advocacy, and community engagement, he has championed policies and programs that uplift citizens — especially the younger generation — and strengthen democratic institutions in Nigeria.
                </motion.p>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Award,
                            title: "Distinguished Legislative Leadership",
                            text: "Sponsored the highest number of bills in the 8th Assembly and a record-breaking 74 bills in the 9th Assembly, 21 of which were signed into law — covering education, national security, infrastructure, and governance reform."
                        },
                        {
                            icon: Users,
                            title: "Community Development & Philanthropy",
                            text: "Funded and supported numerous community-based projects including education scholarships, rural healthcare initiatives, and economic empowerment programs that have positively impacted thousands of citizens across Kaduna and beyond."
                        },
                        {
                            icon: Briefcase,
                            title: "Policy Advocacy & National Impact",
                            text: "Led and contributed to strategic legislation and oversight in committees such as Finance, Commerce, Defence, and Land Transport — driving policy reforms that strengthen national development, infrastructure, and inclusive governance."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-2xl shadow-lg text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <item.icon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                            <h3 className="text-2xl font-semibold text-green-600 mb-3">{item.title}</h3>
                            <p className="text-gray-700">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-green-600 mb-6">Impact in Numbers</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[

                            { icon: Users, number: "50K+", label: "Citizens Reached Through Empowerment Programs" },
                            { icon: Briefcase, number: "10+", label: "Committees Served" },
                            { icon: Globe, number: "200+", label: "Projects Supported Nationally" },
                            { icon: Target, number: "2011–Present", label: "Years of Active Legislative Service" }

                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-green-600 text-white p-6 rounded-2xl shadow-lg text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: false }}
                            >
                                <item.icon className="w-12 h-12 mx-auto mb-3" />
                                <h4 className="text-4xl font-bold">{item.number}</h4>
                                <p className="text-lg">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
