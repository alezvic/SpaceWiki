import { CardDeck } from 'react-bootstrap';
import InfoCard from '../../Components/InfoCard';

const CardGrid = ({ astronauts }) => {

  return (
    <div className="container">
      <div className="row justify-content-md-center">
          {
            astronauts.map((astronaut) => {
              return (<InfoCard className="col-md-auto" key={astronaut.id} astronaut={astronaut} />)
            })
          }
      </div>
    </div>
  )
}

export default CardGrid;