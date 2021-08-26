import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  personName: string;
  view: string;
  setView: (view: string) => void;
}
export default function TopNav({ personName, view, setView }: IProps) {
  return (
    <>
      <NavLink
        to={{ pathname: `/about/${personName}`, state: { personName } }}
        onClick={() => setView('about')}
        activeClassName="selected"
        isActive={(match, location) => {
          if (location?.pathname === '/' || location?.pathname === '/my-family/home') {
            return view === 'about';
          }

          return new RegExp('about').test(location.pathname);
        }}
      >
        About
      </NavLink>
      <NavLink
        to={{ pathname: `/moments/${personName}`, state: { personName } }}
        onClick={() => setView('moments')}
        activeClassName="selected"
        isActive={(match, location) => {
          if (location?.pathname === '/' || location?.pathname === '/my-family/home') {
            return view === 'moments';
          }
          return new RegExp('moments').test(location.pathname);
        }}
      >
        Moments
      </NavLink>
    </>
  );
}
