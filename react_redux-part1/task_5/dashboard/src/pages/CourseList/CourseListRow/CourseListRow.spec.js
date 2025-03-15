import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('test compnement',() =>{


      it('renders a single column header with colSpan=2 when isHeader is true and textSecondCell is null', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Test Header"/>);
        const thElement = screen.getByText('Test Header');
        expect(thElement).toHaveAttribute('colSpan', '2');
      });

      it('renders two column headers when isHeader is true and textSecondCell is not null', () => {
        render(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
        expect(screen.getByText('Header1')).toBeInTheDocument();
        expect(screen.getByText('Header2')).toBeInTheDocument();
      });
    
      it('renders two data cells when isHeader is false', () => {
        render(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />);
        expect(screen.getByText('Data1')).toBeInTheDocument();
        expect(screen.getByText('Data2')).toBeInTheDocument();
      });

      it('applies the correct background color for header row when isHeader is true', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
        const rowElement = container.querySelector('tr');
        expect(rowElement).toHaveStyle('background-color: #deb5b545');
      });

      if('Add a test that check when the isHeader prop is true and secondTextCell is not null, the cell background color is #deb5b545.', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Data1" textSecondCell="Data2" />);
        const rowElement = container.querySelector('tr');
        expect(rowElement).toHaveStyle('background-color: #deb5b545');

      });
      if('Add a test that check when the isHeader prop is false, the cell background color is #f5f5f5ab.', () => {
        const { container } =  render(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />);
        const rowElement = container.querySelector('tr');
        expect(rowElement).toHaveStyle('background-color: #f5f5f5ab');

      });
      
    });
