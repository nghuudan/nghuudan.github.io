import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import './main';

jest.mock('react-dom');
jest.mock('./components/app/app');

describe('Main', () => {
  it('should call render with <App /> and document.getElementById("app")', () => {
    expect(render).toBeCalledWith(<App />, document.getElementById('app'));
  });
});
