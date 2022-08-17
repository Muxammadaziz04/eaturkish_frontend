import React from 'react';

import style from './MenuItem.module.scss'

const MenuItem = ({text}) => {
    return (
        <div className={style.item}>
            {text}
        </div>
    );
}

export default MenuItem;
