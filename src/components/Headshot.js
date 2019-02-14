import React from 'react';
import greatScott from '../assets/great-scott.png';

export default function Headshot() {
  console.log(greatScott);
  return (
    <div className="headshot">
      <img src={greatScott} alt="Headshot"/>
    </div>
  )
}
