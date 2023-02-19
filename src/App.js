
import './App.css';
// import Emplisting from './Emplisting';

import {Routes ,Route} from "react-router-dom";
import Create from './components/Create';
import Emplisting from './Emplisting';
import Edit from './components/Edit';

function App() {

  return (
    <>
    <div className='container'>
        <Routes>
          <Route exact path="/" element={<Emplisting />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit" element={<Edit/>} />
        </Routes>
    </div>
  
   
    
   
     
    </>
  );
}

export default App;
