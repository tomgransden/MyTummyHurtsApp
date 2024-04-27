import { fireEvent, render, screen } from '@testing-library/react-native';

import Button from './Button';

const mockOnPress = jest.fn();

const defaultProps = {
  label: 'Hello Jest',
  onPress: mockOnPress,
};

describe('Button', () => {
  it('renders label correctly', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText('Hello Jest')).toBeVisible();
  });

  it('fires onPress when clicking button', () => {
    render(<Button {...defaultProps} />);
    fireEvent.press(screen.getByRole('button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('shows spinner when loading', () => {
    render(<Button {...defaultProps} loading />);
    expect(screen.getByLabelText('Loading, please wait')).toBeOnTheScreen();
  });
});
