import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from "./Hello";

it('renders the correct text when no enthusiasm level is given', () => {
   const hello = enzyme.shallow(<Hello name='Gopi' />);
   expect(hello.find('.greeting').text()).toEqual('Hello Gopi!')
});

it('renders the correct text when enthusiasm level is given', () => {
   const hello = enzyme.shallow(<Hello name='Gopi' enthusiasmLevel={3}/>);
   expect(hello.find('.greeting').text()).toEqual('Hello Gopi!!!')
});

it('throws error when enthusiasm level is lest than or equal to zero', () => {
   expect(() => {
      enzyme.shallow(<Hello name='Gopi' enthusiasmLevel={-3}/>);
   }).toThrow();
});