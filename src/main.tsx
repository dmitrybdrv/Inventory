import {store} from "@/app/store";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Inventory from '@/app/Inventory'
import './index.css'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

<Provider store={store}>
    <BrowserRouter>
        <Inventory />
    </BrowserRouter>
</Provider>


)
