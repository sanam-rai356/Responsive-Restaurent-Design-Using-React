import React from 'react';
import "./Menu.css";
import {MenuInfo} from "./../../Data.js"
const Menu = () => {
    
  return (
    <>
     <section className="menuSection" id='menu'>
        <h3 className='heading'>OUR <span>MENU</span></h3>
        <div className="menuDetails">
            {MenuInfo.map((detail,index)=>{
                return(
                    <>
                        <div className="menuBox" key={index}>
                            <img src={detail.img} />
                            <h4>Tasty And Healty</h4>
                            <p>$15.99 <span className='check'>20.99</span></p>
                            <button className='mainBTN'>Add To Cart</button>
                        </div>
                    </>
                );
            })}
        </div>
     </section>
    </>
  );
};

export default Menu;
