import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Blog from './Pages/Blog';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import AddBlog from './Pages/AddBlog';
import View from './Pages/View';
import Remove from './Pages/Remove';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="add" element={<AddBlog />} />
          <Route path="view/:id" element={<View />} />
          <Route path="remove/:id" element={<Remove />} />
          <Route path="" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
