import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    // console.log(purchasedPlayers)
    return (
        <div className='w-11/12 mx-auto'>
            {
                purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
            <button className='btn mt-7 mb-7 outline outline-offset-4 outline-gray-500 border-0 rounded-2xl p-4 bg-[#E7FE29]'>Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;