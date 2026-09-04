import { Card, Badge, Button } from 'react-bootstrap'

function ApartmentCard({ apartment, saved, onSave, isRemove }) {
  // just a QoL, on the saved page, instead of 'Save/Saved' the button becomes 'Remove'
  const isSaved = saved.some((item) => item.id === apartment.id)

  let label = 'Save'
  if (isRemove) {
    label = 'Remove'
  }
  else if (isSaved) {
    label = 'Saved'
  }

  const details = `${apartment.bedrooms} bed - ${apartment.bathrooms} bath - ${apartment.sizeSqft} sqft`
  const altText = `${apartment.name} in ${apartment.area}`

  const toggleClass = isSaved ? 'af-toggle-btn af-toggle-btn-active' : 'af-toggle-btn'

  return (
    <Card className="af-card">
      <div className="af-card-media">
        <Card.Img variant="top" src={apartment.image} alt={altText} />
        {isSaved && <Badge className="af-badge">Saved</Badge>}
      </div>

      <Card.Body className="af-card-body">
        <Card.Title className="af-card-title">{apartment.name}</Card.Title>
        <Card.Subtitle className="af-card-area">{apartment.area}</Card.Subtitle>
        <p className="af-card-specs">{details}</p>
        <div className="af-card-footer">
          <span className="af-card-price">RM {apartment.price}</span>
          <Button className={toggleClass} onClick={() => onSave(apartment)}> {label} </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ApartmentCard
