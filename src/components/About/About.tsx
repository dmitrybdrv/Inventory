import React from 'react';
import style from './About.module.scss'

type AboutPropsType = {}
export const About: React.FC<AboutPropsType> = ({}) => {

    return (
        <div className={style.aboutWrapper}>
            <h3>Hello Fried</h3>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, atque aut delectus
                dolore dolorem minima molestias nam nesciunt officiis, omnis porro provident saepe similique vitae
                voluptate voluptatibus.
            </article>
            <br/>
            <h3>Just to know</h3>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate dignissimos officia
                quidem sit sunt voluptate. Assumenda at cupiditate dicta dignissimos esse et inventore laboriosam minus
                natus, odit possimus quae qui quisquam reprehenderit rerum saepe sed sit tempore ullam vero? Ab alias
                aspernatur at atque commodi consequatur cumque cupiditate deleniti earum eos error excepturi
                exercitationem fuga ipsum itaque iure iusto labore laudantium molestiae molestias, nam, nisi officia
                omnis optio praesentium qui rem saepe sunt, suscipit temporibus vel vitae voluptate voluptatibus.
            </article>
            <br/>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptates.
            </article>
            <hr/>
        </div>
    );
};