import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import 'flowbite';
import 'flowbite-react'
const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
  </Routes>
</BrowserRouter>
);

export default App