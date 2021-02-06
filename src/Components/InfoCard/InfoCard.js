import { Card } from 'react-bootstrap';

const InfoCard = ({ astronaut }) => {
  return (
    <>
      <Card style={{ width: '14rem', 'margin':'5px 5px'}}>
        <div style={{}}>
          <Card.Img style={{'max-height':'200px','object-fit':'cover','object-position':'0px 20px', 'overflow':'show'}} variant="top" src={astronaut.profile_image} />
        </div>
        <div style={{}}>
          <Card.Body>
            <Card.Title>{astronaut.name}</Card.Title>
            <Card.Text>
              {astronaut.nationality}
            </Card.Text>
            <Card.Text>
              {astronaut.date_of_birth}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default InfoCard;