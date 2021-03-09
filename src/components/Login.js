import React from 'react'
import { LoginContainer, LoginInnerContainer } from 'assets/style/app';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SlackLogo from 'assets/images/slack-logo-clone.png';

export default function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => toast(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }))
    }

    return (
        <>
            <LoginContainer>
                <LoginInnerContainer>
                    <img src={SlackLogo} alt="Slack Clone"
                    />
                    <h1>Sign in to YokGhibahGaes</h1>
                    <p>ghibah.slack.com</p>

                    <Button onClick={signIn}>
                        Sign in with Google
                    </Button>
                </LoginInnerContainer>
            </LoginContainer>

            <ToastContainer />
        </>
    )
}
