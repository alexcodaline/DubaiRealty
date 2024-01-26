import React, { useState } from 'react';
import FaqItem from './FaqItem';
import { useTranslation } from 'react-i18next';
const FaqList = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  return (
    <div className="faq-list">
      {data.map((item, index) => (
        <FaqItem
          key={index}
          index={index}
          question={t(item.question)}
          answer={t(item.answer)} 
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default FaqList;