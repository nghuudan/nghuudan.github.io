import React from 'react';
import { render } from '@testing-library/react';
import Skills from './skills';
import { skills } from '../../data/skills.json';

describe('Skills', () => {
  it('should be <ul> element', () => {
    const { container } = render(<Skills skills={skills} />);
    expect(container.firstChild).toHaveProperty('tagName', 'UL');
  });

  it('should have 5 <li> elements', () => {
    const { container } = render(<Skills skills={skills} />);
    expect(container.querySelectorAll('li')).toHaveLength(5);
  });

  it('should have 5 <h2> elements', () => {
    const { container } = render(<Skills skills={skills} />);
    expect(container.querySelectorAll('h2')).toHaveLength(5);
  });
});
