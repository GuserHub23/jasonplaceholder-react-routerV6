import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from './routes/Blog'
import Post from './routes/Post';

import Contacto from './routes/Contacto'
import Inicio from './routes/Inicio'
import NoEncontrada from './routes/NoEncontrada';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio/>}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='blog/:id' element={<Post />}/>
          <Route path='contacto' element={<Contacto />}/>
          <Route path='*' element={<NoEncontrada />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
