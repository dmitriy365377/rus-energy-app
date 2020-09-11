import React from 'react';
import { MainLayouts } from '../components/layouts/mainLayouts';
import { SignIn } from './sign-in/signIn';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

// pages
import { HomePage } from './homePage/homePage'

export const IndexPage = () => {
    // const auth = useSelector(state => state.auth)
    return (
        <>
            <MainLayouts>
                <Switch>
                    {
                        false // path
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