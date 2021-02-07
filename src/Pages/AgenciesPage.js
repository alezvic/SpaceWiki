import AgencyCard from '../Components/AgencyCard';

const AgenciesPage = ({ data }) => {
  return (
    <>
      {
        data.results.map((item) => {
          return (<AgencyCard className="col-md-auto" key={item.id} agency={item} />)
        })
      }
    </>
  )
}

export default AgenciesPage;