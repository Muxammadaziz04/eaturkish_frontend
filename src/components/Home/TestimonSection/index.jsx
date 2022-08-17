import React from 'react';

import arrow from '../../../assets/arow.svg'
import CommentItem from './CommentItem';

import style from './TestimonySection.module.scss'

const TestimonySection = () => {
    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <span className={style.section__title}>
                    <h3>Testimony</h3>
                    <img src={arrow} alt="icon" />
                </span>

                <h2 className={style.section__name}>Happy customers</h2>

                <div className={style.section__cards__block}>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </div>
            </div>
        </section>
    );
}

export default TestimonySection;
