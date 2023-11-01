import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './view/home/home';
import Detail from './view/detail/detail';
import Create from './view/create/create';
import Cards from './components/cards/cards';


function App() {
  return (   
      <>
       <Routes>
          <Route path="/home" element={<Cards />} />
          <Route path= "/detail/:id" element= {<Detail />} />
          <Route exact path= "/" component={Create} />
       </Routes>
      
      </>
  
  );
}

export default App;
