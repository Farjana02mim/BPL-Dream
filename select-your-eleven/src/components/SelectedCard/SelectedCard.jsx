import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    console.log(player)
    const handleRemove = () =>{
        removePlayer(player)
    }
    return (
        <div className='flex justify-between items-center p-3 border-1 mt-5 border-gray-400 rounded-xl'>
                <div className='flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-xl' src={player.image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.name}</h1>
                        <p className='text-xs'>{player.role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/zh9GQCR3/delete.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;