import { Container, Row, Col } from 'react-bootstrap'
import apartments from '../data/apartments.json'
import ApartmentCard from '../components/ApartmentCard'

function Apartments({ saved, onToggle }) {
  return (
    <Container className="af-apartments" fluid={false}>
      <h1 className="af-page-title">Apartments</h1>
      <Row className="af-grid">
        {apartments.map((apartment) => (
          <Col key={apartment.id} xs={12} sm={6} lg={4} className="af-grid-col">
            <ApartmentCard apartment={apartment} saved={saved} onToggle={onToggle} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Apartments
