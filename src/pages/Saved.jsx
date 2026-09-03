import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ApartmentCard from '../components/ApartmentCard'

function Saved({ saved, onToggle }) {
  const navigate = useNavigate()

  if (saved.length === 0) {
    return (
      <Container className="af-saved-empty">
        <h1 className="af-page-title">Saved</h1>
        <p className="af-empty-copy">
          Nothing saved yet. Browse the list and tap Save on a few you like.
        </p>
        <Button className="af-cta" onClick={() => navigate('/apartments')}>
          Browse apartments
        </Button>
      </Container>
    )
  }

  return (
    <Container className="af-saved">
      <h1 className="af-page-title">Saved</h1>
      <Row className="af-grid">
        {saved.map((apartment) => (
          <Col key={apartment.id} xs={12} sm={6} lg={4} className="af-grid-col">
            <ApartmentCard
              apartment={apartment}
              saved={saved}
              onToggle={onToggle}
              removeMode={true}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Saved
