import React from 'react';

import style from './Filter.module.scss'

const Filter = () => {
    const categories = ['All', 'KEBABS', 'PIDES', 'BURGERS', 'OTHER DISHES', 'SIDES', 'DESSERTS']

    return (
        <div className={style.filter}>
            <h3 className={style.filter__name}>Our Regular Menu Pack</h3>
            <span>
                {
                    categories.length > 0 && categories.map((category, index) => <button className={style.filter__item} key={index}>{category}</button>)
                }
            </span>
        </div>
    );
}

export default Filter;
