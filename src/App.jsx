import "./App.css"

// we using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Button } from 'react-bootstrap'

// react router
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'

//import { useState } from 'react'

// we use local storage instead
import { useLocalStorage } from 'usehooks-ts'


import Landing from './pages/Landing'
import Apartments from './pages/Apartments'
import Saved from './pages/Saved'
import ErrorPage from './pages/ErrorPage'

// This is our navbar
// "Outlet" means children is appended there
function Layout() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar className="af-navbar">
        <Container className="af-navbar-inner">
          <Navbar.Brand className="af-brand">Apartfind</Navbar.Brand>
          <div className="af-nav-links">
            {/*The list of apartments button*/}
            <Button
              className="af-nav-btn af-nav-btn-outline"
              onClick={() => navigate('/apartments')}
            >
              Browse
            </Button>

            {/*The saved apartments button*/}
            <Button
              className="af-nav-btn af-nav-btn-fill"
              onClick={() => navigate('/saved')}
            >
              Saved
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container className="af-page">
        <Outlet />
      </Container>
    </>
  )
}

function App() {
  // we push all saved apartments into this saved state
  //const [saved, setSaved] = useState([])

  const [saved, setSaved] = useLocalStorage('apartfind-saved', [])

  // what happens when user saves/unsaves an apartment
  function toggleSave(apartment) {
    const isAlreadySaved = saved.some((item) => item.id === apartment.id)

    if (isAlreadySaved) {
      // filter it out (Remove)
      setSaved(saved.filter((item) => item.id !== apartment.id))
    }
    else {
      // append it to the list (Save)
      setSaved([...saved, apartment])
    }
  }

  return (

    /*BrowserRouter -> Routes -> Route (each page)*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />

          <Route path="apartments" element={<Apartments saved={saved} onSave={toggleSave} />} />

          <Route path="saved" element={<Saved saved={saved} onSave={toggleSave} />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

