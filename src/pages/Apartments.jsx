import { Container } from 'react-bootstrap'

import apartments from '../data/apartments.json'
import ApartmentCard from '../components/ApartmentCard'

function Apartments({ saved, onSave }) {
  return (
    <Container className="af-apartments" fluid={false}>
      <h1 className="af-page-title">Apartments</h1>

      {/*Inline styling so no css import*/}
      <div className="af-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {/*Using Mapping and Key to loop and display each apartment*/}
        {apartments.map((apartment) =>
        (
          <div key={apartment.id} className="af-grid-col">
            <ApartmentCard
              apartment={apartment}
              saved={saved}
              onSave={onSave}
            />
          </div>
        ))}
      </div>

    </Container>
  )
}

export default Apartments

