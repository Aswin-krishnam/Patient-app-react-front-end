import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AddPatient/>}/>
            <Route path="/viewall" element={<ViewAll/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
