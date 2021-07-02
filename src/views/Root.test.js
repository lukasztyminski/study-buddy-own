import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Display error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: 'Makrelo' } });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Display authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Test123' } });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
