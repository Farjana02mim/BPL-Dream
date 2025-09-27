import React, { useState } from 'react';

import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/report-1.png"
import { toast } from 'react-toastify';

const PlayerCard = ({player, setAvailableBalance, availableBalance , purchasedPlayers, setPurchasedPlayers}) => {
    const [isSelected, setSelected] = useState(false)

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
        if(availableBalance<playerPrice){
            toast("Not enough coins");
            return;
        }
        if(purchasedPlayers.length===6){
          toast("6 players already selected!")
          return
        }
            setSelected(true)
        setAvailableBalance(availableBalance-playerPrice);
        setPurchasedPlayers([...purchasedPlayers,playerData])
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={player.image}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex '>
      <img src={userImg} alt="" />
    <h2 className="card-title ml-2">{player.name}</h2>
    </div>
    <div className='flex justify-between mt-4'>
      <div className='flex items-center'>
        <img className='h-[20px] w-[20px]' src={flagImg} alt="" />
        <span>{player.country}</span>

      </div>
      <button className='btn'>{player.role}</button>
    </div>
    <hr className='text-gray-400 mt-4' />

    <div className='flex justify-between'>
        <span className='font-bold'>Rating</span>
        <span>{player.rating}</span>
    </div>

    <div className='flex justify-between'>
      <p className='font-bold'>{player.batting_style}</p>
      <p>{player.bowling_style}</p>
    </div>

    <div className="card-actions mt-4 flex justify-between items-center">
      <p>Price: {player.price}</p>
      <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn">{isSelected==true?"Selected":"Choose player"}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PlayerCard;