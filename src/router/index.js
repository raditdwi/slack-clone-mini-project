import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from 'views/Landing'
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}
