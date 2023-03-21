import './Inventory.module.scss'
import style from './Inventory.module.scss'
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {Counter} from "./components/Counter/Counter";
import {CompanyOwnerMenu} from "./components/CompanyOwnerMenu/CompanyOwnerMenu";
import {Route, Routes} from 'react-router-dom';
import {About} from "./components/About/About";
import {Main} from "./components/Main/Main";
import {FAQ} from "./components/FAQ/FAQ";
import {Upgrades} from "./components/Upgrades/Upgrades";
import {AddNewInventoryCard} from "./components/AddNewInventoryCard/AddNewInventoryCard";
import {SearchInventoryCard} from "./components/SearchInventoryCard/SearchInventoryCard";
import {CompanyCard} from "./components/CompanyCard/CompanyCard";
import {UsersCard} from "./components/UsersCard/UsersCard";
import {useState} from "react";

function Inventory() {
    const [companyName, setCompanyName] = useState('Company Name')

  return (
      <div className={`${style.inventorContainer}`}>
          <Header companyName={companyName}/>
          <div className={style.inventorMain}>
              <Menu/>
              <Counter inventoryItemCount={17}/>
              <CompanyOwnerMenu/>
          </div>

          <div className={style.routeWrapper}>
              <Routes>
                  <Route path={'/*'} element={<About/>}/>
                  <Route path={'/main/'} element={<Main/>}/>
                  <Route path={'/faq/'} element={<FAQ/>}/>
                  <Route path={'/upgrades/'} element={<Upgrades/>}/>

                  <Route path={'/add/'} element={<AddNewInventoryCard/>}/>
                  <Route path={'/search/'} element={<SearchInventoryCard/>}/>

                  <Route path={'/companyCard/'} element={<CompanyCard title={companyName} callBack={setCompanyName}/>}/>
                  <Route path={'/usersCard/'} element={<UsersCard/>}/>
              </Routes>
          </div>

      </div>
  )
}

export default Inventory
