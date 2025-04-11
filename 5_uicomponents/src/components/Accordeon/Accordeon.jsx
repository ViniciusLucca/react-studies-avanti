import React, { useState } from 'react'
import styles from './Accordeon.module.css'
const Accordeon = () => {

    const toggleAccordeon = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const [activeIndex, setActiveIndex] = useState(null)
    const items = [{ question: 'O que é React?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt quaerat sequi tenetur tempore eveniet ab enim earum cupiditate quod laborum fugiat, error illo dolorem illum optio maiores dolor non?' },
    { question: 'O que é React?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt quaerat sequi tenetur tempore eveniet ab enim earum cupiditate quod laborum fugiat, error illo dolorem illum optio maiores dolor non?' },
    { question: 'O que é React?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt quaerat sequi tenetur tempore eveniet ab enim earum cupiditate quod laborum fugiat, error illo dolorem illum optio maiores dolor non?' }
    ]


    return (
        <div className={styles.accordeon}>
            {items.map((item, index) => (
                <div key={index} className={`${styles.item} ${activeIndex === index ? styles.open : ''}`}>
                    <button className={styles.button} onClick={() => toggleAccordeon(index)}>{item.question}</button>
                    {activeIndex === index && <p className={styles.answer}>{item.answer}</p>}
                </div>
            ))}
        </div>
    )
}

export default Accordeon