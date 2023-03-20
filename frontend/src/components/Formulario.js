
import React from 'react'
import "../components/Formulario.css";
import { Form, Button } from 'react-bootstrap';
/*import { useState, useEffect } from 'react';
import { UseAddNewProductMutation } from '../components/productsApiSlice';
import { useNavigate } from 'react-router-dom'; */


function FormDisabledInputExample() {
 /* const navigate = useNavigate();

      const [addNewProduct, { isLoading, isSuccess, isError, error }] =
        UseAddNewProductMutation();

      const [name, setName] = useState('');
      const [price, setPrice] = useState('');
      const [description, setDescription] = useState('');
      const [images, setImages] = useState('');

      
      const onNameChanged = e => setName(e.target.value);
      const onPriceChanged = e => setPrice(e.target.value);
      const onDescriptionChanged = e => setDescription(e.target.value);
      const onImagesChanged = e => setImages(e.target.value);

      useEffect(() => {
        if (isSuccess) {
          setName('');
          setPrice('');
          setDescription('');
          setImages('');
          navigate('/Cards');
        }
      }, [isSuccess, navigate]);

      const onSaveProductClicked = async e => {
        await UseAddNewProductMutation({ name, price, description, images });
        
      };
      
       <input value={name} onChange={onNameChanged}/>

        <input value={description} onChange={onDescriptionChanged} />
       
        <input value={price} onChange={onPriceChanged}/>

        <input value={images} onChange={onImagesChanged}/>

       */
      

  return (
    <>
      
       <div className="card-container" style={{marginBottom:"6px", marginTop:"5px"}}>
        <div id="cardServ" >
        <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type='number' placeholder=" ID" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>NAME</Form.Label>
       
        <Form.Control placeholder="Nombre del Producto" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>DESCRIPTION</Form.Label>
       
        <Form.Control placeholder="Descripción del Producto" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PRICE</Form.Label>
        
        <Form.Control type='number' placeholder="Precio del Producto" />
      </Form.Group>
     <Form.Group className="mb-3">
        <Form.Label>IMAGES</Form.Label>
        
        <Form.Control placeholder="Imagen" />
      </Form.Group> 
      <Button id="button" variant="primary">Agregar</Button>
      <Button id="button" variant="danger">Eliminar</Button>
      <Button id="button" variant="warning">Editar</Button>
      </div>
      </div>
      
    </>
  );
}

export default FormDisabledInputExample;
