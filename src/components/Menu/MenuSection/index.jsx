import React from 'react';

import MenuCard from '../../MenuCard'
import Filter from '../Filter'

import style from './MenuSection.module.scss'

const MenuSection = () => {
    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <Filter />
                <div className={style.section__cards}>
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        </section>
    );
}

export default MenuSection;
