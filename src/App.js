import React from 'react';
import Datafetch from './Datafetch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singlepage from './Singlepage';


function App() {

  return (
    <>


      <Routes>

        <Route path="/" element={<Datafetch />} />
        <Route path="/Singlepage/:id" element={<Singlepage />} />


      </Routes>


    </>
  );
}

export default App;
