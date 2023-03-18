import './App.css';
import Header from './components/Header';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom'
import Films from './components/Films';
import Characters from './components/Characters';
import Starships from './components/Starships';


function App() {
  return (
    <div className="App">
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles
      withNormalizeCSS >
        <Header />
        <Routes>
          <Route path="/" element={<Films />} />
            <Route path="characters" element={<Characters />} />
            <Route path="starships" element={<Starships />} />
        </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;
