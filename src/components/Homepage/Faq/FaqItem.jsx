import React, { useRef } from 'react';
import { ReactComponent as ArrowIcon } from "../../../img/decoration/faq-arrow.svg";

const FaqItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    const toggleFaq = () => {
        setOpenIndex(isOpen ? null : index);
    };

    const itemRef = useRef(null);

    return (
        <div className="faq-item-container">
            <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleFaq}>
                {question}
                <button className="faq-button" onClick={toggleFaq}>
                    <ArrowIcon className={`faq-arrow ${isOpen ? "active" : ""}`} />
                </button>
            </div>
            <div className='faq-collapse'
                style={
                    isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
                }
            >
                <div className="faq-answer" ref={itemRef}>{answer}</div>
            </div>
        </div>
    );
};

export default FaqItem;