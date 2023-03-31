import { store } from '../../app/store';
import { productsApiSlice } from './productsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
	useEffect(() => {
		console.log('subscribing');
		const products = store.dispatch(
			productsApiSlice.endpoints.getProducts.initiate()
		);

		return () => {
			console.log('unsubscribing');
			products.unsubscribe();
		};
	}, []);

	return <Outlet />;
};
export default Prefetch;