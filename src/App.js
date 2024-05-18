// import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserRouter, R} from 'react-router-dom';
import {Routes,Route} from "react-router-dom";
import Home from './screens/Home';
import BookStore from './screens/BookStore';
import WTseller from './screens/WTseller';
import TestSeries from './screens/TestSeries';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bookStore" element={<BookStore/>} />
          <Route path="/wtSeller" element={<WTseller/>} />
          <Route path="/testSeries" element={<TestSeries/>} />
        </Routes>
    </>
  )
}

export default App