/*import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import './styles.css'

function Formulario() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/products') //URL de listado de productos
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("Products", products);

  return (
    <>
    <h1>Lista de productos</h1>
    <div>
        <div className="row">
          <div className="cards">
            {products.map((product) => (<div>
              <Card>
                <Card.Body>
                  <Card.Title>Producto: {product.name}</Card.Title>
                  <Card.Img variant="top" src={product.images} />
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <p> {product.price} </p>
                </Card.Body>
              </Card><br />
            </div>))}
          </div>
        </div>
    </div>
    </>
  );
}

export default Formulario;*/
