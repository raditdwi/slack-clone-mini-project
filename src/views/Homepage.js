import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { AppBody } from 'assets/style/app';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export default function Homepage() {
    return (
        <>
            <Header />
            <AppBody>
                <Sidebar/>
                <Switch>
                    <Route exact path="/">
                        {/* Chat */}
                    </Route>
                </Switch>
            </AppBody>    
        </>
    )
}