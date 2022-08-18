import React from 'react';

import arrow from '../../assets/kapkir.svg'
import NewsCard from '../NewsCard';

import style from './News.module.scss'

const NewsSection = () => {
    return (
        <div className={style.news}>
            <div className={style.news__block + ' container'}>
                <span>
                    <h3 className={style.news__title}>News</h3>
                    <img src={arrow} alt="icon" />
                </span>
                <div className={style.news__cards}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
                <button className={style.news__btn}>View More</button>
            </div>
        </div>
    );
}

export default NewsSection;
