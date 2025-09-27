import React from 'react';
import bannerImg from "../assets/banner-main.png"
import bannerShadow from "../assets/bg-shadow.png"

const BannerSection = () => {
    return (
        <div>
            <div className='bg-[#131313] w-11/12 mx-auto p-[40px] mb-8 items-center border-gray-200 rounded-3xl text-white flex justify-center flex-col gap-4 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bannerShadow})` }}>
  
<img src={bannerImg} alt="" />
<h1 className='text-xl md:text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
  <p className='text-[18px] font-medium'>Beyond Boundaries Beyond Limits</p>
  <button className='btn outline outline-offset-4 outline-[#E7FE29] border-0 rounded-2xl p-4 bg-[#E7FE29]'>Claim Free Credit</button>
  {/* http://localhost:5173/ */}
  
</div>
        </div>
    );
};

export default BannerSection;