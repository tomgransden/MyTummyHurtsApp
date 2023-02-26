import { render } from '@testing-library/react-native';
import React from 'react';

import { RecordType } from './src/components/Summary/Summary.types';
import FoodTile from './src/components/Summary/subcomponents/FoodTile/FoodTile';

describe('<App />', () => {
  it('has 1 child', () => {
    const { debug, toJSON } = render(
      <FoodTile
        item={{
          createdDate: new Date('2023-01-01'),
          type: RecordType.Food,
          metadata: { image: 'string', description: 'Food' },
        }}
      />
    );
    debug();
    expect(toJSON()).toMatchSnapshot();
  });
});
