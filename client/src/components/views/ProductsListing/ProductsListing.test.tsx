import { shallow } from 'enzyme';
import * as React from 'react';

import { ProductsListing } from './ProductsListing';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <ProductsListing {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});
