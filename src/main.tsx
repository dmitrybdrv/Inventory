import React from 'react'
import ReactDOM from 'react-dom/client'
import Inventory from './Inventory'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/Store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <Provider store={store}>
        <BrowserRouter>
            <Inventory />
        </BrowserRouter>
    </Provider>

)
