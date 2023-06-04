import React from 'react';
import s from './Button.module.scss';

const MyButton = ({children, color, ...props}) => {
    return (
        <button {...props} className={s.myBtn}>
            {children}
        </button>
    );
};

export default MyButton; 
