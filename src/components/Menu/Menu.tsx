import React from 'react';
import { NavLink } from 'react-router-dom';
import { FAMILY } from '../../constants/global';
import StyledMenu from './Menu.styled';

interface IProps {
  setPersonName: (personName: string) => void;
  personName: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function Menu({ setPersonName, personName, open, setOpen }: IProps) {
  return (
    <StyledMenu open={open}>
      {FAMILY.map((familyMember) => {
        const person = familyMember.toLowerCase();
        return (
          <NavLink
            to={{ pathname: `/about/${person}`, state: { personName: person } }}
            onClick={() => {
              setPersonName(person);
              setOpen(false);
            }}
            activeClassName="selected"
            isActive={(match, location) => {
              if (location && !location.state) {
                return person === personName;
              }

              // @ts-ignore
              return person === location.state?.personName;
            }}
          >
            {familyMember}
          </NavLink>
        );
      })}
    </StyledMenu>
  );
}
