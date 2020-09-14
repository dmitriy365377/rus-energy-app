import React from 'react';
import { MainLayouts } from '../components/layouts/mainLayouts';
import { HomePage } from './homePage/homePage'
import { SignIn } from './sign-in/signIn';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import { Tutorial } from './tutorial/tutorial'

//type 

type UserState = {
    currentUser: string | null;
};


export const IndexPage = () => {

    const auth = useSelector((state: any) => state.auth.currentUser);

    return (
        <Switch>
            {!auth && <Route exact path="/" component={Tutorial} />}
            <MainLayouts>
                <>
                    <Route path="/homepage" component={HomePage} />
                    <Route path="/sign-in" component={SignIn} />
                </>
            </MainLayouts>
        </Switch>
    )
}
