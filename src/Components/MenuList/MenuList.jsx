import React from 'react';

const MenuList = ({ filterMenuItem, menuList }) => {

    return (

        <>
            <div className="btn-group my-6">

                {
                    menuList.map(listItem => <button key={filterMenuItem.id} className="btn" onClick={() => filterMenuItem(listItem)} >{listItem}</button>
                    )
                }

                {/* <button className="btn" onClick={() => filterMenuItem("Launch")} value="Launch">Launch</button>
                <button className="btn" onClick={() => filterMenuItem("Snakes")}>Snakes</button>
                <button className="btn" onClick={() => filterMenuItem("Dinner")}>Dinner</button> */}
                {/* <button className="btn" onClick={() => setMenuData(Menu)}>All</button> */}
            </div>
        </>
    );
};

export default MenuList;