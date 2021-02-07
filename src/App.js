
import NavigationBar from './Components/Navbar';
import Footer from './Components/Footer';
import AstronautsPage from './Pages/AstronautsPage';
import AgenciesPage from './Pages/AgenciesPage';

import { astronauts, agencies } from './data/mockup';

function App() {

  return (
    <div id='root'>
      <NavigationBar />
      {/* <AstronautsPage data={astronauts} /> */}
      <AgenciesPage data={agencies} />
      <Footer />
    </div>
  );
}

export default App;

// TODO next add router
// TODO custom hook and fetch to get real data
// TODO add favorites (state and actions)