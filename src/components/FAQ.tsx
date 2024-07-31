import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from 'framer-motion';
const faqs = [
    {
        question: 'Lorem ipsum dolor sit, sed do eiusmod?',
        answer: 'Lorem ipsum dolor sit Nam eius ratione quas, dolore delectus consequatur illo odio corrupti excepturi deleniti.',
    },
    {
        question: 'Duis aute irure dolor in cillum dolore eu fugiat nulla pariatur?',
        answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        question: 'Quis autem vel eum esse quam nihil molestiae consequatur?',
        answer: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    },
];
export default function FAQ() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <div className="faq mini_title">
            <h1 className="">Вопросы и ответы</h1>
            <div className="faq__boxs">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq_box_drop ${expandedIndex === index ? 'active' : ''}`}>
                        <div className="faq__box" onClick={() => toggleFAQ(index)}>
                            <h2>{faq.question}</h2>
                            {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                        {expandedIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{faq.answer}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
