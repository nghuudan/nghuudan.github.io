import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

jest.mock('../experience/experience', () => function ExperienceMock() {
  return <div data-testid="experience-mock" />;
});

jest.mock('../skills/skills', () => function SkillsMock() {
  return <div data-testid="skills-mock" />;
});

jest.mock('../education/education', () => function EducationMock() {
  return <div data-testid="education-mock" />;
});

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

  it('should render Experience component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('experience-mock')).toBeDefined();
  });

  it('should render Skills component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('skills-mock')).toBeDefined();
  });

  it('should render Education component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('education-mock')).toBeDefined();
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
