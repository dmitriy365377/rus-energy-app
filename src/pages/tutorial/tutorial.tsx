import React, { useState } from 'react';
import classes from './tutorial.module.scss';

const items = [
    { title: 'Получить доступ', firstContent: 'Для входа в личный кабинет необходимо знать', secondContent: 'Ваш номер лицевого счета.' },
    { title: 'Передать показания', firstContent: 'Вы можете передать и оплатить показания', secondContent: 'без авторизации прямо в приложении.' },
    { title: 'Узнать о задолженности', firstContent: 'Посмотреть задолженность историю оплат', secondContent: 'показания за выбранной период.' },
]

type oneItem = { title: string, firstContent: string , secondContent: string};


const Content = ({ title, firstContent, secondContent }: oneItem) => (
    <>
        <h1 className={classes.welcome}>{title}</h1>
        <p className={classes.informationfirst}>{firstContent}</p>
        <p className={classes.informationsecond}>{secondContent}</p>
    </>
)

export const Tutorial: React.FC = () => {
    const [active, setActive] = useState<number>(0);

    // if (active >= items.length){
    //     return <Redirect to="/" />
    // }
    
    const changeText = ()  => {
        setActive(prev => prev + 1);
    }


    return (
        <>
            <div className={classes.sphere}></div>
            <div className={classes.ellipse}></div>
            <div className={classes.content}>

                {items[active] && <Content {...items[active]} />}

                <span className={classes.action} onClick={changeText} >
                    <span className={classes.further}>Далее</span>
                </span>
                {active === items.length - 1 ? null : <p className={classes.skip}>Пропустить</p>}
            </div>
        </>
    )
}