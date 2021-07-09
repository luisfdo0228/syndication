import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let props;
  let shallownavbar;
  let renderednavbar;
  let mountednavbar;

  const shallowTestComponent = () => {
    if (!shallownavbar) {
      shallownavbar = shallow(<Navbar {...props} />);
    }
    return shallownavbar;
  };

  const renderTestComponent = () => {
    if (!renderednavbar) {
      renderednavbar = render(<Navbar {...props} />);
    }
    return renderednavbar;
  };

  const mountTestComponent = () => {
    if (!mountednavbar) {
      mountednavbar = mount(<Navbar {...props} />);
    }
    return mountednavbar;
  };  

  beforeEach(() => {
    props = {};
    shallownavbar = undefined;
    renderednavbar = undefined;
    mountednavbar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
