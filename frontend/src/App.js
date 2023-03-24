import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productlist from './components/Productlist.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productlist/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
