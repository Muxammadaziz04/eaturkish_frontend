import React from 'react';

import calendar from '../../../../assets/calendar.svg'
import clock from '../../../../assets/clock.svg'

import style from './CommentItem.module.scss'

const CommentItem = () => {
    return (
        <div className={style.card}>
            <h3 className={style.card__title}>Maria</h3>
            <p className={style.card__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
            <span className={style.card__date}>
                <time>
                    <img src={calendar} alt="calendar icon" />
                    06/02/2022
                </time>
                <time>
                    <img src={clock} alt="clock icon" />
                    11:15
                </time>
            </span>
        </div>
    );
}

export default CommentItem;
