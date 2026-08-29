import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import siteIcon1 from './assets/site-icon-1.jpeg'

import './App.css'

import ShowCreators from './pages/ShowCreators';

function App() {
  const navigate = useNavigate()
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
          <button onClick={() => navigate('/add')}> Add Creator </button>

          { showCreators && <ShowCreators /> }
        </div>
      </section>
    </>
  )
}

export default App
