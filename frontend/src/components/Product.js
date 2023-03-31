import { useSelector } from 'react-redux';
import { selectProductById } from './productsApiSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Product = ({ productId }) => {
	const product = useSelector(state => selectProductById(state, productId));

	const navigate = useNavigate();

	if (product) {
		console.log('calling card');

		const handleEdit = () => {
			navigate(`products/${productId}`);
		};
		

		return (
			<div>
					
				<br></br>
				<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<img
							className="p-8 rounded-t-lg"
							src={product.images}
							alt={product.images}
						/>
					<div className="px-5 pb-5">
							<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
								{product.name}
							</h5>
						<div >
							<span className="text-3xl font-bold text-gray-900 dark:text-white">
								{`$${product.price}`}</span>
							<br></br>
						</div>
						<Button onClick={handleEdit} variant="dark">Editar</Button>
					</div>
				</div>
			</div>
		);
	} else return null;
};

export default Product;