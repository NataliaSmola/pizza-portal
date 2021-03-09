import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import {shallow} from 'enzyme';

describe('Component App', () => {
  it('should render without crashing', () => {
    const component = shallow(<App titleText='Lorem ipsum' />);
    expect(component).toBeTruthy();
  });
});
