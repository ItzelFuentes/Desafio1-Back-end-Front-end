import Product from './Product';
import { useGetProductsQuery } from './productsApiSlice';
import Button from 'react-bootstrap/Button';
import './styles.css';
import {useNavigate} from 'react-router-dom'


const ProductsList = () => {
	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetProductsQuery(undefined, {
		pollingInterval: 60000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
	});

	let content;
	const navigate =useNavigate();

	const handleForm =() => {navigate('/formulario')}


	if (isLoading) content = <p>......</p>;

	if (isError) {
		content = (
			<p className="mb-0.5 inline-block p-0.5 text-red-500">
				{error?.data?.message}
			</p>
		);
	}

	
	if (isSuccess) {
		const { ids } = products;

		const cardContent =
			ids?.length &&
			ids.map(productId => <Product key={productId} productId={productId} />);


		content = (
			<>
			<div>
			<div>
			<Button variant="success" className='button' onClick={handleForm} >Agregar</Button>
			</div>
				<div className="grid grid-cols-3 gap-y-4 justify-center ml-8">
					{cardContent}
				</div>
			</div>
			</>
		);
	}

	return content;
};

export default ProductsList;
