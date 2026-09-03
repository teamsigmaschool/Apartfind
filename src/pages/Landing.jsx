import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <Container className="af-landing">
      <h1 className="af-landing-title">Find a place that actually fits.</h1>
      <p className="af-landing-sub">
        Eight real Klang Valley apartments in one clean list, so comparing rent, size and area
        does not mean fifty open tabs.
      </p>
      <Button className="af-cta" onClick={() => navigate('/apartments')}>
        Browse apartments
      </Button>
    </Container>
  )
}

export default Landing
