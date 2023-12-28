import { render, screen } from '@testing-library/react-native';

import CentreCircle from '../CentreCircle';

describe('CentreCircle', () => {
  it('shows text in middle of circle', () => {
    render(<CentreCircle />);
    expect(screen.getByText('Choose an entry to log')).toBeVisible();
  });
});
