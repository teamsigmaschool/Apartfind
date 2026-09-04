import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <Container className="af-landing">
      <h1 className="af-landing-title">Find aparts in Apart-find.</h1>
      <p className="af-landing-sub">
        You get what I'm going for.
      </p>
      <Button className="af-cta" onClick={() => navigate('/apartments')}>
        Browse apartments
      </Button>
    </Container>
  )
}

export default Landing

