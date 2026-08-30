import { useNavigate, Routes, Route } from 'react-router-dom'

import siteIcon1 from './assets/site-icon-1.jpeg'

import './App.css'

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const navigate = useNavigate()

  return (
    <>
      <section id="center">
        <div>
          <img src={siteIcon1} className="framework" alt="Creatorverse Icon" />
        </div>
        <div>
          <h1> Creatorverse </h1>
          <p> Your favorite <code> content creators</code> in one place! </p>

          <button onClick={() => navigate('/add')}> Add Creator </button>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/creator/:id/edit" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </>
  )
}

export default App
