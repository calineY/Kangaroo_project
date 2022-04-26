import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
