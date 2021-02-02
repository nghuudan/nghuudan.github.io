import React from 'react';
import { render } from '@testing-library/react';
import Experience from './experience';
import { jobs } from '../../data/experience.json';

describe('Experience', () => {
  it('should be <ul> element', () => {
    const { container } = render(<Experience jobs={jobs} />);
    expect(container.firstChild).toHaveProperty('tagName', 'UL');
  });

  it('should have 9 <h2> elements', () => {
    const { container } = render(<Experience jobs={jobs} />);
    expect(container.querySelectorAll('h2')).toHaveLength(9);
  });

  it('should have 3 <h3> elements', () => {
    const { container } = render(<Experience jobs={jobs} />);
    expect(container.querySelectorAll('h3')).toHaveLength(3);
  });
});
