import React from 'react';
import { render } from '@testing-library/react';
import Experience from './experience';

describe('Experience', () => {
  it('should be <ul> element', () => {
    const { container } = render(<Experience />);
    expect(container.firstChild).toHaveProperty('tagName', 'UL');
  });

  it('should have 9 <h2> elements', () => {
    const { container } = render(<Experience />);
    expect(container.querySelectorAll('h2')).toHaveLength(9);
  });

  it('should have 3 <h3> elements', () => {
    const { container } = render(<Experience />);
    expect(container.querySelectorAll('h3')).toHaveLength(3);
  });
});
