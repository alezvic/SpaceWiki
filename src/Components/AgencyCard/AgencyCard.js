
const AgencyCard = ({ agency }) => {

  let img_url;

  if(agency.image_url) {
    img_url = agency.image_url;
  }
  else {
    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/574px-NASA_logo.svg.png";
  }

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
              <div class="card-horizontal" style={{'display': 'flex','flex': '1 1 auto'}}>
                <div class="img-square-wrapper">
                  <img style={{'max-width':'256px'}} class="" src={img_url} alt="Agency insignia" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">{agency.name}</h4>
                  <p class="card-text">{agency.country_code}</p>
                  <p class="card-text">{agency.type}</p>
                </div>
              </div>
              {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// TODO search a suitable placeholder for images

export default AgencyCard;