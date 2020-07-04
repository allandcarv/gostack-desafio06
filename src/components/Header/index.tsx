import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Menu } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Menu>
          <li>
            <NavLink exact to="/">
              Listagem
            </NavLink>
          </li>
          <li>
            <NavLink to="/import">Importar</NavLink>
          </li>
        </Menu>
      </nav>
    </header>
  </Container>
);

export default Header;
