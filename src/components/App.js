import NavBar from './NavBar'
import Header from './Header'
import Body from './Body'
import Lekcija from './Lekcija'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="lekcija" element={<Lekcija />} />
      </Routes>
    </div>
  );
}

export default App;
