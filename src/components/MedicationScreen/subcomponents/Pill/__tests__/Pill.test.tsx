import { render, screen } from '@testing-library/react-native';

import Pill from '../Pill';

describe('Pill', () => {
  it('renders name passed in', () => {
    render(<Pill onPress={jest.fn()} name="TestPill" />);
    expect(screen.getByText('TestPill')).toBeVisible();
  });
});
