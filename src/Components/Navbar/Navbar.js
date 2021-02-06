const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">SpaceWiki</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Astronauts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Agencies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Missions</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;