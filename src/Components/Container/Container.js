import React from 'react';
import { PropTypes } from 'prop-types';
import ContainerStyled from './ContainerStyled';

const Container = ({ title, children }) => {
  return (
    <ContainerStyled>
      {title && <h1>{title}</h1>}
      {children}
    </ContainerStyled>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
