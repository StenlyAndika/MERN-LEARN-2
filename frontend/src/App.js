import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addproduct from './components/Addproduct.jsx';
import Editproduct from './components/Editproduct.jsx';
import Productlist from './components/Productlist.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productlist/>}/>
        <Route path="add" element={<Addproduct/>}/>
        <Route path="edit/:id" element={<Editproduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
