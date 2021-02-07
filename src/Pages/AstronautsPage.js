import AstronautCard from '../Components/AstronautCard';

const AstronautsPage = ({ data }) => {
  
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {
          data.results.map((item) => {
            return (<AstronautCard className="col-md-auto" key={item.id} astronaut={item} />)
          })
        }
      </div>
    </div>
  )
}

export default AstronautsPage;