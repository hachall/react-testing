import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-react-adapter-16';
configure({ adapter: newAdapter() });


import CheckboxWithLabel from '../checkbox_with_label';

test('CheckboxWithLabel changes the text after click', () => { // Render a checkbox with label in the document
  const checkbox = shallow(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
});
