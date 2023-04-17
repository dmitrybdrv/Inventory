import {About} from "@/features/about/About";
import {AddNewUser} from "@/features/addNewUser/AddNewUser";
import {Auth} from "@/features/auth/Auth";
import {Catalog} from "@/features/catalog/Catalog";
import {Company} from "@/features/company_info/Company";
import {Counter} from "@/features/counter/Counter";
import {Guide} from "@/features/guide/Guide";
import {Header} from "@/features/header/Header";
import {Search} from "@/features/Search";
import {AddNewUnit} from "@/features/unit/AddNewUnit";
import {Users} from "@/features/users/Users";
import {Version} from "@/features/version/Version";

import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import style from '@/app/Inventory.module.scss';


const Inventory = () => {


    return (
        <div className={`${style.inventorContainer}`}>

            <Header/>
            <div className={style.listsMenu}>
                <NavLink to={'/catalog'}>UNIT CATALOG</NavLink>
                <NavLink to={'/users'}>USERS</NavLink>
            </div>
            <Counter unitCount={25}/>
            <div className={style.commonMenu}>
                <NavLink to={'/company'}>COMPANY INFO</NavLink>
                <NavLink to={'/search'}>SEARCH</NavLink>
            </div>
            <Auth/>
            <div className={style.addMenu}>
                <NavLink to={'/addNewUser'}>ADD NEW USER</NavLink>
                <NavLink to={'/addNewUnit'}>ADD NEW Unit</NavLink>
            </div>

            <Routes>
                <Route path={'/'} element={<h1>first</h1>}/>
                {/*<Route path={'/login'} element={<h1>login</h1>}/>*/}
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/version'} element={<Version/>}/>
                <Route path={'/guide'} element={<Guide/>}/>
                <Route path={'/catalog'} element={<Catalog/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/company'} element={<Company/>}/>
                <Route path={'/search'} element={<Search/>}/>
                <Route path={'/addNewUser'} element={<AddNewUser/>}/>
                <Route path={'/addNewUnit'} element={<AddNewUnit/>}/>
                <Route path={'*'} element={<h1>404</h1>}/>
            </Routes>

        </div>
    )
}

export default Inventory