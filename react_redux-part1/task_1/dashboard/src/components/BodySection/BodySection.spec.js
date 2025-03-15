import { render, screen , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import BodySection from './BodySection';

test('Test that the BodySection component renders a heading with the title prop value."', () => {
    const { container } = render(<BodySection title="Test Title"><p>Test Content</p></BodySection>);
    console.log(container.innertText);
    expect(screen.getByText('Test Content')).toBeInTheDocument();

});

test('Test that the BodySection component renders any number of children passed to it."', () => {
    render(<BodySection title="Test Title"><p>Test Content</p></BodySection>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
});
