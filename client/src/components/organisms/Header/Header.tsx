import * as React from 'react';

import { Container } from 'src/components/atoms/Container';
import { NavItem } from 'src/components/atoms/NavItem';
import { Logo } from 'src/components/molecules/Logo';
import {
  getDishCreationPath,
  getDishesListPath,
  getProductCreationPath,
  getProductsListPath,
} from 'src/constants/paths';
import { Margin } from 'src/styles/decorators/Margin';

import { StyledHeader } from './Header.styled';

interface IHeaderProps {
  setRef?: (instance: HTMLElement | null) => void;
}

const Header: React.SFC<IHeaderProps> = ({ setRef }) => {
  return (
    <StyledHeader innerRef={setRef}>
      <Container>
        <Logo />

        <Margin left="auto">
          <div>
            <NavItem to={getDishCreationPath()}>Add dish</NavItem>
            <NavItem to={getProductCreationPath()}>Add product</NavItem>
            <NavItem to={getDishesListPath()}>Dishes</NavItem>
            <NavItem to={getProductsListPath()}>Products</NavItem>
          </div>
        </Margin>
      </Container>
    </StyledHeader>
  );
};

export { Header };
