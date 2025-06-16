import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Componenets/Dashboard";
import Uploads from './Componenets/Upload';
import Manage from './Componenets/Manage';
import Editbooks from './Componenets/Editbooks';
import Home from './Componenets/Home';
import FavBooks from './Componenets/Favbooks';
import More from './Componenets/More';


function App() {
  return (
       
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="uploads" element={<Uploads/>} />
          <Route path='manage' element={<Manage/>}/>
          <Route path='edit/:id' element={<Editbooks/>}/>
          <Route path="favorites" element={<FavBooks/>} />
          <Route path='more' element={<More/>}/>

        </Route>
      </Routes>
  
  );
}

export default App;
