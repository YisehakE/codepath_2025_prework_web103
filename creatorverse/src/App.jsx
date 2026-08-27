import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import siteIcon1 from './assets/site-icon-1.jpeg'
import siteIcon2 from './assets/site-icon-2.jpg'
import siteIcon3 from './assets/site-icon-3.jpg'

import './App.css'

import mockCreators from './data/mockCreators.js';

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {

  const [showCreators, setShowCreators] = useState();

  return (
    <>
      <section id="center">
        <div>
          <img src={siteIcon1} className="framework" alt="Creatorverse Icon" />
        </div>
        <div>
          <h1> Creatorverse </h1>
          <p> Your favorite <code> content creators</code> in one place! </p>

          <button onClick={() => setShowCreators(true) }> View all creators </button>
          <button onClick={() => setShowCreators(false) }> Hide creators </button>

          { showCreators && <ShowCreators creators={mockCreators} /> } 
        </div>
      </section>
    </>
  )
}

export default App
