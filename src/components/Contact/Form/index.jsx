import React from 'react';

import style from './Form.module.scss'

const Form = () => {
    return (
        <form className={style.form}>
            <h2 className={style.form__title}>Send Messege</h2>
            <p className={style.form__desc}>If you have any questions, you can send us an SMS or contact us by phone you can also contact us via social networks.</p>
            <div className={style.form__inputs}>
                <input type="text" placeholder='Your name'/>
                <input type="email" placeholder='Email address'/>
                <input type="number" placeholder='Phone number'/>
                <input type="text" placeholder='Subject'/>
            </div>
            <textarea className={style.form__area} placeholder='Message'></textarea>
            <button className={style.form__btn}>Send message</button>
        </form>
    );
}

export default Form;
