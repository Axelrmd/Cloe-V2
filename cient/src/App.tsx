import { useState } from 'react';
import './App.css'
import fetes from "./data/feteDuJour.json";


export function App() {
  const [page, setPage] = useState("Home");
  const today = new Date();
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const fete = fetes[today.getMonth()][day - 1][0]

  function changePage(p: string) {
    setPage(p)
  }

  return (
    <view className='body'>
      {page == "Home" && (
        <view className='feteDuJour'>
          <text className='jour'>{formattedDate}</text>
          <text className='h2'>Fête du jour : </text>
          <text className='fete'>{fete + " " + fete}</text>
        </view>
      )}
      <view className='footer'>
        <view className='btn' bindtap={() => changePage("Passées")}>
          <text>Passées</text>
        </view>
        <view className='btn' bindtap={() => changePage("Mois")}>
          <text>Mois</text>
        </view>
      </view>
    </view>
  );
}
