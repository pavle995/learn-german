import NavBar from './NavBar'
import Header from './Header'
import Home from './Home'
import { Routes, Route } from "react-router-dom";
import Glagoli from './Glagoli';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="glagoli" element={<Glagoli />} />
      </Routes>
    </div>
  );
}

export default App;
