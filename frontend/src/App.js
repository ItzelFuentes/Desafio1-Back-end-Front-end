import React, { useState } from 'react';
import Formulario from './components/formulario';
import Registro from './components/registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProduct from './components/EditProduct'
import ProductsList from './components/ProductsList';


function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductsList/>}/>
        <Route path={'Formulario'} element={<Registro/>}/>
        <Route path={'products'} >
          <Route path={':id'} element={<EditProduct/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;