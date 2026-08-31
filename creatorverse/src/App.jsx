import { useState } from 'react'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'

import siteIcon1 from './assets/site-icon-1.png'

import './App.css'

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showCreators, setShowCreators] = useState(false)

  const goBackToList = () => {
    setShowCreators(true)
    navigate('/')
  }

  return (
    <>
      <section id="center">
        <div>
          <h1 style={{ marginBottom: '8px' }}> Creatorverse </h1>
          <img src={siteIcon1} className="framework" alt="Creatorverse Icon" />
          <p> Your favorite <code> content creators</code> in one place! </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button onClick={goBackToList}> View all creators </button>
          { location.pathname === '/' && (
              <button onClick={() => setShowCreators(false)}> Hide creators </button>
          )}
          <button onClick={() => navigate('/add')}> Add Creator </button>
        </div>
      </section>

      <Routes>
        <Route path="/" element={showCreators ? <ShowCreators /> : null} />
        <Route path="/creator/:id" element={<ViewCreator onBack={goBackToList} />} />
        <Route path="/creator/:id/edit" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </>
  )
}

export default App
