import React from 'react';
import { render } from '@testing-library/react';
import NavMenu from './nav-menu';

describe('NavMenu', () => {
  it('should be <nav> element', () => {
    const { container } = render(<NavMenu />);
    expect(container.firstChild).toHaveProperty('tagName', 'NAV');
  });

  it('should have 1 <ul> element', () => {
    const { container } = render(<NavMenu />);
    expect(container.querySelectorAll('ul')).toHaveLength(1);
  });

  it('should have 4 <li> elements', () => {
    const { container } = render(<NavMenu />);
    expect(container.querySelectorAll('li')).toHaveLength(4);
  });

  it('should have 4 <a> elements', () => {
    const { container } = render(<NavMenu />);
    expect(container.querySelectorAll('a')).toHaveLength(4);
  });
});
