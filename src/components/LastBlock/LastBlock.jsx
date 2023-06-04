import React from 'react';
import s from './LastBlock.module.scss';
import firstCardImage from '../../assets/Image.png';
import secondCardImage from '../../assets/Image2.png';
import thirdCardImage from '../../assets/Image3.png';
import ServicesCard from '../ServicesCard/ServicesCard';

const cards = [
    {
        title: "Опишите услугу",
        description: "Опишите свою задачу и условия. Это бесплатно и займёт 3‑4 минуты",
        img: firstCardImage,
        id: 1
    },
    {
        title: "Получите отклики",
        description: "Отклики с ценами от исполнителей. Обычно они приходят в течение 30 минут",
        img: secondCardImage,
        id: 2
    },
    {
        title: "Выберите исполнителя",
        description: "Выберите подходящего исполнителя и обсудите сроки выполнения",
        img: thirdCardImage,
        id: 3
    }
]

const LastBlock = () => {
    return (
        <div className={s.last_block}>
            <h2 className={s.heading}>Как работает сервис?</h2>
            <div className={s.cards_container}>
                {cards.map((item)=>(
                    <ServicesCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
};

export default LastBlock;