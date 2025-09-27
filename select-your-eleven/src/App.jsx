// App.jsx
import './App.css'
import BannerSection from './components/BannerSection'
import { ToastContainer} from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense, useState, useMemo } from 'react'
import Footer from './components/Footer/Footer';

// fetch function
const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(10000000)
  const [purchasedPlayers,setPurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(ply => ply.name!=p.name)
    // console.log(filteredData)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))
  }

  // Memoize promise to avoid fallback on every render
  const playersPromise = useMemo(() => fetchPlayers(), [])
console.log(purchasedPlayers)
  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <BannerSection />

      <div className='flex justify-between w-11/12 mx-auto items-center my-4'>
        <h1 className='font-bold text-2xl'>{
          toggle === true?"Available Players":`Selected Player (${purchasedPlayers.length}/6)`
          }</h1>
        <div className='font-bold'>
          <button
            onClick={() => setToggle(true)}
            className={`${toggle ? "bg-[#E7FE29]" : "bg-white"} border-gray-400 py-3 px-4 rounded-l-2xl border-1 border-r-0`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${!toggle ? "bg-[#E7FE29]" : "bg-white"} border-gray-400 py-3 px-4 rounded-r-2xl border-1 border-l-0`}
          >
            Selected (<span>{purchasedPlayers.length}</span>)
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers 
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          availableBalance={availableBalance}
            playersPromise={playersPromise} 
            setAvailableBalance={setAvailableBalance} 
          />
        </Suspense>
      ) : (
        <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
