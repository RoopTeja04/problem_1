import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
    const [activeAnswer, setActiveAnswer] = useState(null);

    const FAQData = [
        {
            question: "How long does it take to receive a booking confirmation?",
            answer: [
                "✅ Instant Bookings: Most flight and hotel bookings are confirmed instantly.",
                "⏱ Pending Confirmations: In rare cases, confirmation may take up to 24 hours."
            ]
        },
        {
            question: "How can I track my trip status or itinerary?",
            answer: [
                "📍 Using the App: Go to the 'My Trips' section in the MakeMyTrip app.",
                "🔗 On the Website: Log in > My Bookings > Click your trip to see live tracking."
            ]
        },
        {
            question: "Where can I check the refund status after cancellation?",
            answer: [
                "💳 Refund Tracker: Use the 'Refund Status' tracker under 'My Bookings'.",
                "🕒 Timeline: Refunds reflect within 5–7 business days."
            ]
        },
        {
            question: "Can I modify or cancel a booking after payment?",
            answer: [
                "✏️ Modification: Allowed via 'Manage Bookings' if permitted.",
                "❌ Cancellations: Use cancellation tracker for status updates."
            ]
        },
        {
            question: "How can I contact MakeyourTrip customer support?",
            answer: [
                "📞 Via App/Web: Use Help for chat or callback.",
                "📧 Email: support@makeyourtrip.com",
                "🧾 24/7 assistance for active bookings."
            ]
        }
    ];

    const toggleAnswer = (index) => {
        setActiveAnswer((prev) => (prev === index ? null : index));
    };

    return (
        <div
            className="bg-gray-300 w-[90%] mx-auto mt-10 p-6 rounded-2xl shadow-lg"
        >
            <h1 className="text-3xl font-bold text-gray-800 mb-6 ml-4">FAQs</h1>
            <div className="space-y-4">
                {FAQData.map((faq, index) => {
                    const isOpen = activeAnswer === index;
                    return (
                        <motion.div
                            key={index}
                            className="bg-white p-4 rounded-xl shadow-md"
                            layout
                            transition={{ duration: 0.7 }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                                <motion.button
                                    className={`text-gray-500 text-xl transition-transform duration-300 cursor-pointer ${isOpen ? "rotate-180" : "rotate-0"}`}
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                >
                                    <IoIosArrowDown />
                                </motion.button>
                            </div>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul className="list-disc list-inside pl-2 text-gray-700 text-sm space-y-1">
                                            {faq.answer.map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;