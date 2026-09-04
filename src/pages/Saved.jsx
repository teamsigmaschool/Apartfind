import { Container, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

import ApartmentCard from '../components/ApartmentCard'

function Saved({ saved, onSave }) {
  // to redirect to browse apartments if nothing is saved, QoL feature
  const navigate = useNavigate()

  if (saved.length === 0) {
    return (
      <Container className="af-saved-empty">
        <h1 className="af-page-title">Saved</h1>
        <p className="af-empty-copy">
          Nothing saved yet. Go find.
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

      {/*Inline styling so no css import*/}
      <div className="af-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {/*also mapping but from the saved state apartments only*/}
        {saved.map((apartment) =>
        (
          <div key={apartment.id} className="af-grid-col">
            <ApartmentCard
              apartment={apartment}
              saved={saved}
              onSave={onSave}
              isRemove={true} // this what triggers the 'Remove' label
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Saved

