
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CardGrid from './Components/CardGrid';

import { astronauts } from './data/mockup';

function App() {
  return (
    <div id='root'>
      <Navbar />
      <CardGrid astronauts={astronauts.results} />
      <Footer />
    </div>
  );
}

export default App;