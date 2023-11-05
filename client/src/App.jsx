import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import Detail from './view/detail/detail';
import Cards from './components/cards/cards';
import Nav from './components/nav/nav';
import Landing from './view/landing/landing';
import Form from './components/form/form';
import { useState } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation();
  
  return (   
      <div>
        {location.pathname !== "/" ? <Nav /> : ""}     
       <Routes>
          <Route path="/home" element={<Cards currentPage={currentPage} setCurrentPage={setCurrentPage}/>} />
          <Route path= "/detail/:id" element= {<Detail />} />
          <Route path= "/" element={<Landing />} />
          <Route path= "/form" element={<Form />} />
       </Routes>
      
      </div>
  
  );
}

export default App;
