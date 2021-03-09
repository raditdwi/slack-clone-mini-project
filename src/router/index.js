import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Spinner from 'react-spinkit'

import Homepage from 'views/Homepage'
import Login from 'components/Login'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

import { AppLoading, AppLoadingContents } from 'assets/style/app';
import SlackLogo from 'assets/images/slack-logo-clone.png';
export default function Router() {
    // Create auth using Firebase Auth
    const [user, loading] = useAuthState(auth);

    if(loading) {
        return (
            <AppLoading>
                <AppLoadingContents>
                    <img src={SlackLogo} alt="Slack Clone"/>
                    <Spinner 
                        name="ball-beat"
                        color="green"
                        fadeIn="none"
                    />
                </AppLoadingContents>
            </AppLoading>
        )
    }

    return (
        <BrowserRouter>
            {!user ? (<Login/>) : (<Homepage />)}
        </BrowserRouter>
    )
}
