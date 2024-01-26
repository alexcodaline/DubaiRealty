import React from 'react';
import FaqList from './FaqList';
import './Faq.scss'
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();

  const faqData = Object.values(t('faqData', { returnObjects: true }));
  return (
    <section className="faq-section">
      <div className='container'>
        <div className='faq-container'>
          <div className='faq-title'><h2>FAQ</h2></div>
          <FaqList data={faqData} />
        </div>
      </div>
    </section>
  );
};

export default Faq;