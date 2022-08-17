import React from 'react';

import img from '../../assets/card_img.png'

import style from './MenuCard.module.scss' 
import Star from './Star';

const MenuCard = ({stars = 0}) => {
    const status = new Array(5).fill(true, 0, stars).fill(false, stars, 5)

    return (
        <div className={style.card}>
            <img className={style.card__img} src={img} alt="food img" />
            <h4 className={style.card__name}>Barbecue Shish kebab Shashlik Skewer</h4>
            <div className={style.card__stars}>
                {
                    status.length > 0 && stars !== false 
                    ? status.map((sts, index) => <Star active={sts} key={index}/>) 
                    : <></>
                }
            </div>
            <span className={style.card__price}>$12.00</span>
        </div>
    );
}

export default MenuCard;
