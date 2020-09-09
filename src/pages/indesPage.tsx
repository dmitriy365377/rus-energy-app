import React from 'react';
import { MainLayouts } from '../components/layouts/mainLayouts';
import { SignIn } from './sign-in/signIn';

export const indexPage = () => {
    return (
        <>
            <MainLayouts>
                <SignIn />
            </MainLayouts>
        </>
    )
}