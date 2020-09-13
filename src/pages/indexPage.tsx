import React from 'react';
import { MainLayouts } from '../components/layouts/mainLayouts';
import { SignIn } from './sign-in/signIn';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

// pages
import { HomePage } from './homePage/homePage'

//type 

type UserState = {
    currentUser: string | null;
};

export const IndexPage = () => {

    // const auth = useSelector((state: any) => {
    //     currentUser: state.auth.currentUser
    // });

    return (
        <>
            <MainLayouts>
                <Switch>
                    {
                        false
                            ? (
                                <Route exact path="/" component={HomePage} />
                            ) : (
                                <>
                                    <Route path="/sign-in" component={SignIn} />
                                </>
                            )
                    }
                    <SignIn />
                </Switch>
            </MainLayouts>
        </>
    )
}