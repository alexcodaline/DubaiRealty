import React, { useState } from 'react';
import FaqItem from './FaqItem';

const FaqList = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {data.map((item, index) => (
        <FaqItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default FaqList;