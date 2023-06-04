import React from "react";
import CardBg from '../../assets/card-bg.png';
import Avatar from '../../assets/avatar-1.png';
import styles from './Card.module.scss';

const Card = ({ fullName, url, btnLabel, avatar }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={CardBg} alt="Card background" />
      </div>
      <div className={styles.body}>
        <div className={styles.avatar}>
          <span>
            <img src={Avatar} alt="Avatar" />
          </span>
          <h5>{fullName}</h5>
        </div>
        <button>{btnLabel}</button>
      </div>
    </div>
  );
};

export default Card;
