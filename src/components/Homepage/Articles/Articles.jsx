import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Articles.scss';

export default function Articles() {
    const [isHoveredBlock1, setIsHoveredBlock1] = useState(false);
    const [isHoveredBlock2, setIsHoveredBlock2] = useState(false);
    const [isHoveredBlock3, setIsHoveredBlock3] = useState(false);
    const { t } = useTranslation();

    return (
        <section className='articles'>
            <div className='container'>
                <div className="container-articles">
                    <div className='articles-title'>
                        <span className='articles-name'>{t('articles-title')}</span>
                        <a href="/">{t('article-link')}</a>
                    </div>
                    <div className='articles-items'>

                        <div
                            className={`articles-item-1 ${isHoveredBlock1 ? 'hover-item' : ''}`}
                            onMouseEnter={() => {
                                setIsHoveredBlock1(true);
                            }}
                            onMouseLeave={() => setIsHoveredBlock1(false)}
                        >
                            {!isHoveredBlock1 && <span className='article-item-name'>{t('articles-desc')}</span> }
                            {isHoveredBlock1 && (
                                <div className='hover-item'>
                                    <div className='hover-item-desc'>
                                        <span className='hover-name'>{t('articles-desc')}</span>
                                        <p>{t('articles-desc-hover')}</p>
                                        <a href="/">{t('article-link')}</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className={`articles-item-2 ${isHoveredBlock2 ? 'hover-item' : ''}`}
                            onMouseEnter={() => {
                                setIsHoveredBlock2(true);
                            }}
                            onMouseLeave={() => setIsHoveredBlock2(false)}
                        >
                            {!isHoveredBlock2 && <span className='article-item-name'>{t('articles-desc')}</span>}
                            {isHoveredBlock2 && (
                                <div className='hover-item'>
                                    <div className='hover-item-desc'>
                                        <span className='hover-name'>{t('articles-desc')}</span>
                                        <p>{t('articles-desc-hover')}</p>
                                        <a href="/">{t('article-link')}</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className={`articles-item-3 ${isHoveredBlock3 ? 'hover-item' : ''}`}
                            onMouseEnter={() => {
                                setIsHoveredBlock3(true);
                            }}
                            onMouseLeave={() => setIsHoveredBlock3(false)}
                        >
                            {!isHoveredBlock3 && <span className='article-item-name'>{t('articles-desc')}</span>}
                            {isHoveredBlock3 && (
                                <div className='hover-item'>
                                    <div className='hover-item-desc'>
                                        <span className='hover-name'>{t('articles-desc')}</span>
                                        <p>{t('articles-desc-hover')}</p>
                                        <a href="/">{t('article-link')}</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}