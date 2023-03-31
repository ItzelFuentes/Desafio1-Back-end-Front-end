import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAddNewProductMutation } from './productsApiSlice';
import './styles.css';
import Button from 'react-bootstrap/Button';

function Registro() {
  const navigate = useNavigate();

	const [addNewProduct, { isSuccess}] =
		useAddNewProductMutation();

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [images, setImages] = useState('');

	useEffect(() => {
		if (isSuccess) {
			setName('');
			setPrice('');
			setDescription('');
			setImages('');
			navigate('/');
		}
	}, [isSuccess, navigate]);

	const onNameChanged = e => setName(e.target.value);
	const onPriceChanged = e => setPrice(e.target.value);
	const onDescriptionChanged = e => setDescription(e.target.value);
	const onImageChanged = e => setImages(e.target.value);

	const onSaveProductClicked = async e => {
		e.preventDefault();
		await addNewProduct({ name, price, description, images });
	};

  return (
	<div className='contenedor'>
		<div className='contenedor-2'>
			<div className='formulario'>
				<form onSubmit={onSaveProductClicked}>
				<label htmlFor='name' className='label'>Name:</label>
				<input type="text" value={name} onChange={onNameChanged} className='input' />
				<label htmlFor='price' className='label'>Price:</label>
				<input type="text" value={price} onChange={onPriceChanged} className='input' />
				<label htmlFor='description' className='label'>Description:</label>
				<input type="text" value={description} onChange={onDescriptionChanged} className='input' />
				<label htmlFor='image' className='label'>Image:</label>
				<input type="text" value={images} onChange={onImageChanged} className='input' />
				<Button type="submit" value={'Guardar'} onSubmit={onSaveProductClicked} variant="primary">Guardar</Button>
			</form>
			</div>
		
		</div>
	</div>

  );
}

export default Registro;
