import React from 'react';
import style from './Faq.module.scss'

type FAQPropsType = {}
export const FAQ: React.FC<FAQPropsType> = ({}) => {

    return (
        <div className={style.faqWrapper}>

            <div className={style.faqItem}>
                <h3>Get started</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis doloribus eligendi
                    expedita
                    laboriosam soluta tempore veniam? Commodi enim eum harum, iusto maiores nihil nulla possimus,
                    provident
                    qui sapiente, tempore.
                </p>
            </div>

            <div className={style.faqItem}>
                <h3>How to create inventory card</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis doloribus eligendi
                    expedita
                    laboriosam soluta tempore veniam? Commodi enim eum harum, iusto maiores nihil nulla possimus,
                    provident
                    qui sapiente, tempore.
                </p>
            </div>

            <div className={style.faqItem}>
                <h3>Get started</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis doloribus eligendi
                    expedita
                    laboriosam soluta tempore veniam? Commodi enim eum harum, iusto maiores nihil nulla possimus,
                    provident
                    qui sapiente, tempore.
                </p>
            </div>

        </div>
    );
};