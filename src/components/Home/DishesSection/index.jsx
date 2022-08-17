import React, { useRef } from 'react';

import MenuCard from '../../MenuCard'

import left_arrow from '../../../assets/Left_arrow.svg'
import right_arrow from '../../../assets/right_arrow.svg'

import style from './DishesSection.module.scss'

const DishesSection = () => {
    const cardsRef = useRef()
    
    const handleClick = (direction) => {
        const scrollLeft = cardsRef.current.scrollLeft
        const scrollWidth = cardsRef.current.clientWidth

        const scrollSize = direction === 'right' ? scrollLeft + scrollWidth : scrollLeft - scrollWidth

        cardsRef.current.scrollTo({
            left: scrollSize,
            behavior: 'smooth'
        })
    }

    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>

                <div className={style.section__nav}>
                    <h3 className={style.section__title}>Popular Dishes</h3>
                    <span className={style.section__btns}>
                        <button onClick={() => handleClick('left')}>
                            <img src={left_arrow} alt="left arrow icon" />
                        </button>
                        <button onClick={() => handleClick('right')}>
                            <img src={right_arrow} alt="right arrow icon" />
                        </button>
                    </span>
                </div>

                <div className={style.section__cards__block} ref={cardsRef}>
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        </section>
    );
}

export default DishesSection;
