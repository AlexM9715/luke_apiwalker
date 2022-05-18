import {BrowserRouter, Routes, Route} from "react-router-dom"
import HeaderForm from './components/HeaderForm';
import Character from './views/Character';
import Planet from './views/Planet';
import Starship from './views/Starship';

function App() {
  return (
    <BrowserRouter>
      <h1>SKYWALKER</h1>
      <HeaderForm />

      <Routes>
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="/starships/:id/" element={<Starship />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
