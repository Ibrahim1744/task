import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Signup from './pages/Signup';
import RegisteredSuccessfully from './pages/RegisteredSuccessfully';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/success' element={<RegisteredSuccessfully/>} />


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
