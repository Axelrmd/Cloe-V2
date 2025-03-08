import { useState } from 'react';
import './App.css'
import fetes from "./data/feteDuJour.json";
import { Route, Routes, useNavigate } from 'react-router';
import { Home } from './pages/Home.jsx';
import { Passees } from './pages/Passees.jsx';
import { Mois } from './pages/Mois.jsx';
import { FetesMois } from './pages/FetesMois.jsx';


export function App() {
  const nav = useNavigate();

  return (
    <view className='body'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/passees" element={<Passees/>} />
        <Route path="/mois" element={<Mois/>} />
        <Route path='/mois/:mois' element={<FetesMois />} />
      </Routes>
      <view className='footer'>
        <view className='btn' bindtap={() => nav("/passees")}>
          <text>Passées</text>
        </view>
        <view className='btn' bindtap={() => nav("/")}>
          <text>Accueil</text>
        </view>
        <view className='btn' bindtap={() => nav("/mois")}>
          <text>Mois</text>
        </view>
      </view>
    </view>
  );
}
