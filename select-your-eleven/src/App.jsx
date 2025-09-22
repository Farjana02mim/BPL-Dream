import './App.css'
import navImg from "./assets/logo.png"
import coinImg from "./assets/coin.png"
function App() {
 

  return (
    <>
     <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex-none">
    <span>600000000</span>
    <span>Coin <img className='w-[20px] h-[20px]' src={coinImg} alt="" /></span>
  </div>
</div>
    </>
  )
}

export default App
