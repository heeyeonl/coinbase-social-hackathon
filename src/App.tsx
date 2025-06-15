import './App.css'
import Navigation from './components/Navigation'
import { navItems } from './data'

function App() {


  return (
    <>
      <p className="p-10">
        Coinbase Hackathon!!
      </p>
      <Navigation navItems={navItems} />
    </>
  )
}

export default App
