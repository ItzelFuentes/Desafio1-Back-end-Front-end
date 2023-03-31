import { useState, useEffect } from 'react';
import {
	useUpdateProductMutation,
	useDeleteProductMutation,
} from './productsApiSlice';
import { useNavigate } from 'react-router-dom';

const EditFormulario = ({ product }) => {
	const navigate = useNavigate();

	const [updateProduct, { isLoading, isSuccess, isError, error }] =
		useUpdateProductMutation();

	const [
		deleteProduct,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delerror },
	] = useDeleteProductMutation();

	const [name, setName] = useState(product.name);
	const [price, setPrice] = useState(product.price);
	const [description, setDescription] = useState(product.description);
	const [images, setImages] = useState(product.images);

	useEffect(() => {
		console.log(isSuccess);
		if (isSuccess || isDelSuccess) {
			setName('');
			setPrice('');
			setDescription('');
			setImages('');
			navigate(`/`);
		}
	}, [isSuccess, isDelSuccess, navigate]);

	const onNameChanged = e => setName(e.target.value);
	const onPriceChanged = e => setPrice(e.target.value);
	const onDescriptionChanged = e => setDescription(e.target.value);
	const onImageChanged = e => setImages(e.target.value);

	const onSaveProductClicked = async e => {
		await updateProduct({ id: product.id, name, price, description, images });
	};

	const onDeleteProductClicked = async () => {
		await deleteProduct({ id: product.id });
	};

	const content = (
		<form onSubmit={e => e.preventDefault()}>
      <label>
        Name:
      </label>
      <input type="text" value={name} onChange={onNameChanged} />
      <label>
        Price:
        <input type="text" value={price} onChange={onPriceChanged} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={onDescriptionChanged} />
      </label>
      <label>
        Image:
        <input type="text" value={images} onChange={onImageChanged} />
      </label>
      <button type="submit" onClick={onSaveProductClicked}>Guardar</button>
      <button type="submit" onClick={onDeleteProductClicked}>Eliminar</button>
    </form>
	);
	return content;
};

export default EditFormulario;