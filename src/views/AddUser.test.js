import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Adam' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Adam');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Adam' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Adam');
    expect(newUser).not.toBeInTheDocument();
  });
});
