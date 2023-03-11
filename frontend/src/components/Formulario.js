
import React from 'react'
import "../components/Formulario.css";
import { Form, Button } from 'react-bootstrap'; 

function FormDisabledInputExample() {
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