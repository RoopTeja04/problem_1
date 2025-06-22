import { useState } from "react";
import { IoIosArrowDown  } from "react-icons/io";

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
        <div className="bg-gray-100 w-[90%] mx-auto mt-10 p-6 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 ml-4">FAQs</h1>
            <div className="space-y-4">
                {FAQData.map((faq, index) => {
                    const isOpen = activeAnswer === index;
                    return (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-xl shadow-md transition-all duration-300"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                                <button className={`text-gray-500 text-xl transition-transform duration-300 cursor-pointer ${isOpen ? "rotate-180" : "rotate-       0"}`}>
                                    {isOpen ? (
                                        <IoIosArrowDown/>
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </button>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-3" : "max-h-0"
                                    }`}
                            >
                                <ul className="list-disc list-inside pl-2 text-gray-700 text-sm space-y-1">
                                    {faq.answer.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;