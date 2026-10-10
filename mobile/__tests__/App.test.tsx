import { render, screen } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  test('shows the product name as a heading and the tagline', async () => {
    await render(<App />);

    expect(screen.getByRole('header', { name: '1%' })).toBeOnTheScreen();
    expect(screen.getByText('One question. Every day.')).toBeOnTheScreen();
  });
});
