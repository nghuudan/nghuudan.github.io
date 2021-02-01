import React from 'react';
import { render } from '@testing-library/react';
import Education from './education';

describe('Education', () => {
  it('should be <ul> element', () => {
    const { container } = render(<Education />);
    expect(container.firstChild).toHaveProperty('tagName', 'UL');
  });

  it('should have 3 <h2> elements', () => {
    const { container } = render(<Education />);
    expect(container.querySelectorAll('h2')).toHaveLength(3);
  });
});
