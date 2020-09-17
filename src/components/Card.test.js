import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

// console.log(shallow(<Card />))
it('expect to render Card cmponent', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})