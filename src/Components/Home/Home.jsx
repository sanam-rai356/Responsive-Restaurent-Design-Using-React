import React from 'react';
import "./Home.css"

const Home = () => {
  return (
    <>
        <section className="homeSection" id='home'>
            <div className="homeDetails">
                <h1>fresh <span>food in the</span> morning</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
                <button className='mainBTN'>Get Yours Now</button>
            </div>
        </section>
    </>
  );
};

export default Home;
