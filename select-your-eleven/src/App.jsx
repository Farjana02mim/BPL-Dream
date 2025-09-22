import './App.css'
import BannerSection from './components/BannerSection'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense } from 'react'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}
function App() {
  const playersPromise = fetchPlayers()

  return (
    <>
   <Navbar></Navbar>

    <BannerSection></BannerSection>

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
    </Suspense>

    {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App
