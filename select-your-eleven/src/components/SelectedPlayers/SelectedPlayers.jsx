import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  return (
    <div className='w-11/12 mx-auto'>
      {purchasedPlayers.map(player => (
        <SelectedCard 
          key={player.id} 
          removePlayer={removePlayer} 
          player={player} 
        />
      ))}

      <button 
        onClick={() => setToggle(true)} 
        className='btn mt-7 mb-7 outline outline-offset-4 outline-gray-500 border-0 rounded-2xl p-4 bg-[#E7FE29]'
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
