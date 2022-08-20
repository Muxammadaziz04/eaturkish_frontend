import React from 'react';

import adminLogo from '../../../assets/admin.svg'
import menuIcon from '../../../assets/server.svg'
import newsIcon from '../../../assets/settings.svg'
import messagesIcon from '../../../assets/plus-circle.svg'

import style from './Layout.module.scss'

const AdminLayout = ({children}) => {
    const handleClick = (e) => {
        let items = document.querySelectorAll('[data-item]')
        items.forEach(item => item.classList.remove(style.admin__item__active))
        e.target.closest('div').classList.add(style.admin__item__active)
    }

    return (
        <div className={style.admin}>
            <div className={style.admin__nav}>
                <div className={style.admin__nav__logo}>
                    <img src={adminLogo} alt="admin panel" />
                    <p>Admin Panel</p>
                </div>
                <div className={style.admin__item} data-item='true' onClick={handleClick}>
                    <img src={menuIcon} alt="icon" />
                    <p>Menu </p>
                </div>
                <div className={style.admin__item} data-item='true' onClick={handleClick}>
                    <img src={newsIcon} alt="icon" />
                    <p>News </p>
                </div>
                <div className={style.admin__item} data-item='true' onClick={handleClick}>
                    <img src={messagesIcon} alt="icon" />
                    <p>Messages</p>
                </div>
            </div>
            <div>
                {
                    children
                }
            </div>
        </div>
    );
}

export default AdminLayout;
