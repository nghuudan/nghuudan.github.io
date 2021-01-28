import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

jest.mock('../copyright/copyright', () => function CopyrightMock() {
  return <div data-testid="copyright-mock" />;
});

jest.mock('../nav-menu/nav-menu', () => function NavMenuMock() {
  return <div data-testid="nav-menu-mock" />;
});

describe('App', () => {
  it('should be <article> element', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveProperty('tagName', 'ARTICLE');
  });

  it('should render 4 <section> elements', () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll('section')).toHaveLength(4);
  });

  it('should render Copyright component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('copyright-mock')).toBeDefined();
  });

  it('should render NavMenu component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('nav-menu-mock')).toBeDefined();
  });
});
