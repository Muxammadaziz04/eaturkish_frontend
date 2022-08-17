import React from 'react';
import { Link } from 'react-router-dom'

import news_img from '../../assets/news_img.png'

import style from './NewsCard.module.scss'

const NewsCard = () => {
    return (
        <div className={style.card}>
            <img src={news_img} alt="news img" />
            <span className={style.card__info}>
                <h3 className={style.card__title}>tips for prepping and caring for your grill</h3>
                <p className={style.card__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                <span>
                    <Link to='/news/1' className={style.card__link}>Read More</Link>
                    <time className={style.card__date}>16 Apr 2021</time>
                </span>
            </span>
        </div>
    );
}

export default NewsCard;
