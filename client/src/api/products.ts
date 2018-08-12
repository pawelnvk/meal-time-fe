import { get, post } from 'src/services/api';

export const makeGetProductsRequest = () => get('/products');

export const makePostProductRequest = ({
  calories,
  carbohydrates,
  fats,
  name,
  proteins,
}: {
  calories: string,
  carbohydrates: string,
  fats: string,
  name: string,
  proteins: string,
}) => post('/products', {
  calories,
  carbohydrates,
  fats,
  name,
  proteins,
});
