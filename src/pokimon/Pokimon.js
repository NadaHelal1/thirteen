import React from 'react'
import  './Pokimon.css'


function Pokimon() {
    const pokeNum=Math.floor(Math.random()*151)+1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;

  return (
    <div className="piko">
        <h1> Pokemon #{pokeNum}</h1>
        <img src={url} alt="" />

      
    </div>
  )
}
export default Pokimon;

