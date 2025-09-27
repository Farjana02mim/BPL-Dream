import React, {use} from 'react'; 
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers}) => {
    const playerData = use(playersPromise)
    // console.log(playerData);
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            playerData.map(player=><PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
          }
            
        </div>
    );
};

export default AvailablePlayers;