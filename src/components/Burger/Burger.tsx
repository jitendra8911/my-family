import React from 'react';
import StyledBurger from './Burger-styled';

interface IProps {
  open: boolean;
  setOpen(open: boolean): void;
}
const Burger = ({ open, setOpen }: IProps) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;
