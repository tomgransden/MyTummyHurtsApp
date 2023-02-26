import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { RecordType } from '../../../Summary.types';
import FoodTile from '../FoodTile';

describe('FoodTile', () => {
  it('renders correctly', () => {
    render(
      <FoodTile
        item={{
          createdDate: new Date('2023-01-01'),
          type: RecordType.Food,
          metadata: { image: 'string', description: 'Food' },
        }}
      />
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
