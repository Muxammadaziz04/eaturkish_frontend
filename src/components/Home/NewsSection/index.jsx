import React from 'react';
import { useNavigate } from 'react-router-dom'

import NewsCard from '../../NewsCard';
import arrow from '../../../assets/arow.svg'

import style from './NewsSection.module.scss'

const NewsSection = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/news', { replace: true })
    }

    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <span className={style.section__title}>
                    <h3>News</h3>
                    <img src={arrow} alt="icon" />
                </span>

                <h2 className={style.section__name}>Gerícht updates</h2>

                <div className={style.section__cards__block}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                <button className={style.section__btn} onClick={handleClick}>View More</button>
            </div>
        </section>
    );
}

export default NewsSection;
