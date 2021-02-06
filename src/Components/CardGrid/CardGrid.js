import { CardDeck } from 'react-bootstrap';
import InfoCard from '../../Components/InfoCard';

const CardGrid = ({ data }) => {

  return (
    <div className="container">
      <div className="row justify-content-md-center">
          {
            data.map((item) => {
              return (<InfoCard className="col-md-auto" key={item.id} astronaut={item} />)
            })
          }
      </div>
    </div>
  )
}

export default CardGrid;