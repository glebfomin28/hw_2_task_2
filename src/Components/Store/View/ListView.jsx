import React from 'react';

export const ListView = (props) => {
    return (
        <div className="item_container">
            {
                props.items.map((item, index) => {
                    return(
                        <div className="ShopItem" key={index}>
                            <img className="ItemImg" src={item.img} alt="img"/>
                            <div className="ItemName">{item.name}</div>
                            <div className="ItemColor"> {item.color}</div>
                            <div className="ItemPrice">${item.price}</div>
                            <button className="ItemButton">ADD TO CART</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

