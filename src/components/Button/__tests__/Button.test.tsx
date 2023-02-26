import { fireEvent, render, screen } from '@testing-library/react-native';

import Button from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const onPress = jest.fn();
    render(<Button title="My mock button" onPress={onPress} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    render(<Button onPress={onPress} title="My mock button" />);
    screen.debug();
    fireEvent.press(screen.getByText('My mock button'));
    expect(onPress).toBeCalledTimes(1);
  });
});
