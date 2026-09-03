import { useLocalStorage } from 'usehooks-ts'
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import { Container, Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Landing from './pages/Landing'
import Apartments from './pages/Apartments'
import Saved from './pages/Saved'
import ErrorPage from './pages/ErrorPage'

function Layout() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar className="af-navbar">
        <Container className="af-navbar-inner">
          <Navbar.Brand className="af-brand">ApartFind</Navbar.Brand>
          <div className="af-nav-links">
            <Button
              className="af-nav-btn af-nav-btn-outline"
              onClick={() => navigate('/apartments')}
            >
              Browse
            </Button>
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
  const [saved, setSaved] = useLocalStorage('apartfind-saved', [])

  function toggleSave(apartment) {
    const matches = saved.filter((item) => item.id === apartment.id)
    if (matches.length === 0) {
      setSaved([...saved, apartment])
    } else {
      setSaved(saved.filter((item) => item.id !== apartment.id))
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route
            path="apartments"
            element={<Apartments saved={saved} onToggle={toggleSave} />}
          />
          <Route
            path="saved"
            element={<Saved saved={saved} onToggle={toggleSave} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
