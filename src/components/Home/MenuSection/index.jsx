import React from 'react';
import MenuCard from '../../MenuCard';

import MenuItem from './MenuItem';

import style from './MenuSection.module.scss'

const MenuSection = () => {
    return (
        <section className={style.section}>
            <div className="container">
                <h3 className={style.section__title}>Our Regular Menu Pack</h3>

                <div className={style.section__categories}>
                    <MenuItem text={'all'} />
                    <MenuItem text={'French fries Pizza'} />
                </div>

                <div className={style.section__cards__block}>
                    <MenuCard stars={false} />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        </section>
    );
}

export default MenuSection;
