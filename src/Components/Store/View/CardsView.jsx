import React from 'react';
import "./CardView.css";
export const CardsView = (props) => {
    return (
        <div className="cards_container">
            {
                props.cards.map((item,index) => {
                    return(
                        <div className="ShopCard" key={index}>
                            <div className="CardName">{item.name}</div>
                            <div className="CardColor"> {item.color}</div>
                            <img className="CardImg" src={item.img} alt="img"/>
                            <div className="CardPrice">${item.price}</div>
                            <button className="CardButton">ADD TO CART</button>
                        </div>
                    )
                })
            }
        </div>
    );
}