import React from 'react';
import navImg from "../../assets/logo.png"
import coinImg from "../../assets/coin.png"

const Navbar = ({availableBalance}) => {
    return (
        <div>
              <div className="navbar w-11/12 mx-auto mb-4">
  <div className="flex-1">
    <a className="text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center gap-7">
    <a>Home</a>
    <a>Fixture</a>
    <a>Teams</a>
    <a>Schedule</a>
    <button className='flex btn border-gray-300 rounded-3xl bg-white'><span className='mr-1'>{availableBalance}</span>
    <div className='flex'><span className='mr-1'>Coin</span>
    <img className='w-[20px] h-[20px]' src={coinImg} alt="" /></div></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;