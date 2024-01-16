import React, { useState } from 'react';
import './Articles.scss';

export default function Articles() {
    const [isHoveredBlock1, setIsHoveredBlock1] = useState(false);
    const [isHoveredBlock2, setIsHoveredBlock2] = useState(false);
    const [isHoveredBlock3, setIsHoveredBlock3] = useState(false);

    return (
        <section className='articles'>
            <div className='container'>
                <div className="container-articles">
                    <div className='articles-title'>
                        <span className='articles-name'>Useful articles</span>
                        <a href="/"> View all articles </a>
                    </div>
                    <div className='articles-items'>

                        <div
                            className={`articles-item-1 ${isHoveredBlock1 ? 'hover-item' : ''}`}
                            onMouseEnter={() => {
                                setIsHoveredBlock1(true);
                            }}
                            onMouseLeave={() => setIsHoveredBlock1(false)}
                        >
                            {!isHoveredBlock1 && <span className='article-item-name'>Discover Architecture</span> }
                            {isHoveredBlock1 && (
                                <div className='hover-item'>
                                    <div className='hover-item-desc'>
                                        <span className='hover-name'>Discover Architecture</span>
                                        <p>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
                                        <a href="/">Learn more</a>
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
                            {!isHoveredBlock2 && <span className='article-item-name'>Discover Architecture</span>}
                            {isHoveredBlock2 && (
                                <div className='hover-item'>
                                    <div className='hover-item-desc'>
                                        <span className='hover-name'>Discover Architecture</span>
                                        <p>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
                                        <a href="/">Learn more</a>
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
                            {!isHoveredBlock3 && <span className='article-item-name'>Discover Architecture</span>}
                            {isHoveredBlock3 && (
                                <div className='hover-item'>
                                    <div className='hover-item-desc'>
                                        <span className='hover-name'>Discover Architecture</span>
                                        <p>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
                                        <a href="/">Learn more</a>
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