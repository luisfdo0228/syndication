import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let props;
  let shallowhome;
  let renderedhome;
  let mountedhome;

  const shallowTestComponent = () => {
    if (!shallowhome) {
      shallowhome = shallow(<Home {...props} />);
    }
    return shallowhome;
  };

  const renderTestComponent = () => {
    if (!renderedhome) {
      renderedhome = render(<Home {...props} />);
    }
    return renderedhome;
  };

  const mountTestComponent = () => {
    if (!mountedhome) {
      mountedhome = mount(<Home {...props} />);
    }
    return mountedhome;
  };  

  beforeEach(() => {
    props = {};
    shallowhome = undefined;
    renderedhome = undefined;
    mountedhome = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
