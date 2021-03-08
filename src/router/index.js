import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Homepage from 'views/Homepage'
export default function Router() {
    return (
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>
    )
}
