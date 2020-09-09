import React from 'react';
import classes from './signIn.module.scss';


// pictures
import house from '../../pictures/house.svg';
import lock from '../../pictures/lock.svg';
import eye from '../../pictures/shape.svg';
import close from '../../pictures/close.svg';

export const SignIn = () => {
    return (
        <>
            <div className={classes.titlecontainer}>
                <h1 className={classes.title1}>Вход в личный кабинет</h1>
                <h3 className={classes.title2}>Введите данные в поля ниже, чтобы войти.</h3>
            </div>
            <div className={classes.formcontainer}>

                <h1 className={classes.labeluser}>Номер лицевого счета:</h1>
                <div className={classes.inputusername}>
                    <input className={classes.inputline} />
                    <img src={house} alt="" className={classes.input_img} />
                    <img src={close} alt="" className={classes.input_second_img} />
                </div>

                <h1 className={classes.labelpassword}>Пароль</h1>
                <div className={classes.inputpassword}>
                    <input className={classes.inputline} />
                    <img src={lock} alt="" className={classes.input_img} />
                    <img src={eye} alt="" className={classes.input_second_img} />
                </div>

                <div className={classes.terms_and_conditions}>
                    <label><input type="checkbox" />Сохранить пароль</label>
                    <label><input type="checkbox" />
                         Я согласен <span className={classes.color_text}>Условиями использования</span> 
                    </label> 
                </div>

                <span className={classes.check_in}  >
                    <span className={classes.further}>ВОЙТИ</span>
                </span>
            </div>
        </>
    )
}