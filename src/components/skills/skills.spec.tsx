import React from 'react';
import { render } from '@testing-library/react';
import Skills from './skills';

describe('Skills', () => {
  it('should be <ul> element', () => {
    const { container } = render(<Skills />);
    expect(container.firstChild).toHaveProperty('tagName', 'UL');
  });

  it('should have 5 <li> elements', () => {
    const { container } = render(<Skills />);
    expect(container.querySelectorAll('li')).toHaveLength(5);
  });

  it('should have 5 <h2> elements', () => {
    const { container } = render(<Skills />);
    expect(container.querySelectorAll('h2')).toHaveLength(5);
  });
});
