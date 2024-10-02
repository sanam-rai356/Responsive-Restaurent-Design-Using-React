import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Product from './Components/Product/Product.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
