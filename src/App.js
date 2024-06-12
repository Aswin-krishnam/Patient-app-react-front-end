import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/AddPatient';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AddPatient/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
