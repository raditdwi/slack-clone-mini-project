import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { AppBody } from 'assets/style/app';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Chat from 'components/Chat';

export default function Homepage() {
    return (
        <>
            <Header />
            <AppBody>
                <Sidebar/>
                <Switch>
                    <Route exact path="/">
                        {/* Chat */}
                        <Chat />
                    </Route>
                </Switch>
            </AppBody>    
        </>
    )
}