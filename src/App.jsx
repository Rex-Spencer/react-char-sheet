import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Stats from './components/Stats_Tab';
import Features from './components/Features_Tab';
import Items from './components/Items_Tab';
import Spells from './components/Spells_Tab';
import Notes from './components/Notes_Tab';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/react-char-sheet'>
            <Route index element={<Stats />} />
            <Route path='/react-char-sheet/stats' element={<Stats />} />
            <Route path='/react-char-sheet/features' element={<Features />} />
            <Route path='/react-char-sheet/items' element={<Items />} />
            <Route path='/react-char-sheet/spells' element={<Spells />} />
            <Route path='/react-char-sheet/notes' element={<Notes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App