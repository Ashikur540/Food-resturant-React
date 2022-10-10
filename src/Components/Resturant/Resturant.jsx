import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import MenuList from '../MenuList/MenuList';
import './Resturant.css';
import Menu from './userAPI.json';



const uniqueMenuList = [...new Set(Menu.map(singleItem => singleItem.category)
), "All"];
// console.log(typeof uniqueMenuList);
console.log(uniqueMenuList.forEach(elem => console.log(elem)));

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    const [menuList, setMenuList] = useState(uniqueMenuList);

    // filtering the cards
    const filterMenuItem = (category) => {
        console.log(category);
        const filteredMenu = Menu.filter(item => item.category === category);
        setMenuData(filteredMenu);
        //  for all button
        if (category === "All") setMenuData(Menu);
    }



    return (
        <div>

            <h2 className="text-3xl font-bold font-C_header text-slate-700-600 my-4"> Welcome to Our Resturant</h2>

            <MenuList filterMenuItem={filterMenuItem} setMenuData={setMenuData} menuList={menuList} ></MenuList>
            <MenuCard menuData={menuData}></MenuCard>
        </div>
    );
};

export default Resturant;