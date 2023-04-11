import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import 'flowbite';
import 'flowbite-react'
const App = () => (
  <div className='font-poppins bg-primary'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App