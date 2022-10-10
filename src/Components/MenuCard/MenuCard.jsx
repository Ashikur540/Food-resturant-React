import React from 'react';
import './MenuCard.css';
const MenuCard = ({ menuData }) => {

    // console.log(menuData);
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center p-8 ">
            {
                menuData.map(menuItem => {
                    const { id, price, name, picture, about, category } = menuItem;
                    // console.log(price);
                    return (
                        <div key={id}>

                            <div key={id} className="card w-96 bg-base-100 shadow-xl border min-h-[400px] justify-self-center">
                                <figure><img className='w-[96%] mx-auto h-[90%] rounded-2xl relative top-2 ' src={picture} alt="Shoes" /></figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title">{name}  <div className="badge badge-secondary">{category}</div></h2>
                                    <p>{about.length > 100 ? about.slice(0, 110) : about}</p>

                                    <p>Price: <b>{price ? price : "no data found"} $</b></p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default MenuCard;