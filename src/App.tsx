import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavbar from './components/Header/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style/Index.css'
import Facebook from './Pages/Facebook';
import Instagram from './Pages/Instagram';
import ChatBot from './Pages/ChatBot';
function App() {
  return (
    <>
      <TopNavbar Navs={[{ titls: "Facebook", nav: "/" }, { titls: "Instagram", nav: "/Instagram" }, { titls: "Chat Bot", nav: "/ChatBot" }]} />
      <Routes>
        <Route path='/' element={<Facebook />} />
        <Route path='/Instagram' element={<Instagram />} />
        <Route path='/ChatBot' element={<ChatBot />} />
      </Routes>

    </>
  );
}

export default App;
