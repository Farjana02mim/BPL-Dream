import React, {use} from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData);
    return (
        <div>
            available
        </div>
    );
};

export default AvailablePlayers;