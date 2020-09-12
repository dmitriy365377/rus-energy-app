import React, { useState } from 'react';
import classes from './signIn.module.scss';

//custom hook
import { useForm } from './useForm';

// validate login 
import { validate } from './validateLogin';

// pictures
import house from '../../pictures/house.svg';
import lock from '../../pictures/lock.svg';
import eye from '../../pictures/shape.svg';
import close from '../../pictures/close.svg';
import { useDispatch } from 'react-redux';

// fetchAsync
import {fetchAsync} from '../../redux/reducers/actions'

export const SignIn = () => {
    const { handelChange, handleOnSubmit, setValues, values, errors } = useForm(submit, validate);
    const dispatch = useDispatch();

    function submit() {
        console.log('submitted succesfully')
        dispatch(fetchAsync())
    }

    const handelDelete = () => {
        console.log('submitted sad')
        setValues({ personalAccount: ""})
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                {console.log(values.personalAccount)}
                {console.log(values.password)}
                <div className={classes.titlecontainer}>
                    <h1 className={classes.title1}>Вход в личный кабинет</h1>
                    <h3 className={classes.title2}>Введите данные в поля ниже, чтобы войти.</h3>
                </div>
                <div className={classes.formcontainer}>

                    <h1 className={classes.labeluser}>Номер лицевого счета:</h1>
                    <div className={classes.inputusername}>
                        <input
                            className={classes.inputline}
                            value={values.personalAccount}
                            name="personalAccount"
                            id="personalAccount"
                            onChange={handelChange}
                        />
                        <img src={house} alt="" className={classes.input_img} />
                        <img src={close} alt="" className={classes.input_second_img} />
                    </div>
                    {errors.personalAccount && <p className={classes.errors}>{errors.personalAccount}</p>}

                    <h1 className={classes.labelpassword}>Пароль</h1>
                    <div className={classes.inputpassword}>
                        <input
                            className={classes.inputline}
                            value={values.password}
                            name="password"
                            id="password"
                            onChange={handelChange}
                        />
                        <img onClick={handelDelete} src={lock} alt="" className={classes.input_img} />
                        <img src={eye} alt="" className={classes.input_second_img} />    
                    </div>
                    {errors.password && <p className={classes.errors}>{errors.password}</p>}

                    <div className={classes.terms_and_conditions}>
                        <label><input type="checkbox" />Сохранить пароль</label>
                        <label><input type="checkbox" />
                         Я согласен <span className={classes.color_text}>Условиями использования</span>
                        </label>
                    </div>

                    <button className={classes.check_in} type="submit">
                        ВОЙТИ
                    </button>

                    <div className={classes.restore}>
                        <p className={classes.forgotpassword}>Забыли пароль?</p>
                        <p className={classes.recover}>Восстановить</p>
                    </div>
                </div>
            </form>
        </>
    )
}