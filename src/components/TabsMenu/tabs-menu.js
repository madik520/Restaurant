import React, { useState } from 'react';
import BtnFilter from './btn-filter';
import { MENU_ARR } from './menuArr';
import Card from './tabs-card';

const TabsMenu = () => {
  const [arrCard, setArrCard] = useState(MENU_ARR);
  const [active, setActive] = useState(0);

  const ClickOnTabs = ({ target: { id, dataset: { index } }}) => {
    setActive(+index);
    switch(id){
      case 'Breakfast':
      case 'Lunch':
      case 'Dinner':
      case 'Desart':
      case 'KidsMenu':
        const newFilter =  MENU_ARR.filter(i => i.isFiltered === id);
        return setArrCard(newFilter);
      default:
        return setArrCard(MENU_ARR);
    }
  }

  const openFullMenu = () => {
    setActive(0);
    setArrCard(MENU_ARR);
  }
    return(
        <>
          <div className="btn-group">
            <BtnFilter active={active} onClick={ClickOnTabs} />
          </div>
            <Card items={arrCard} />
            <button onClick={openFullMenu} className="btn-full-menu">full menu</button>
        </>
    )
};

export default TabsMenu;