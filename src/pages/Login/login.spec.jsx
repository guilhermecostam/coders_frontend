import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Login from '.';

describe('Testando página de Login', () => {
  it('deve renderizar a página de login', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const emailInput = screen.getByLabelText('Email ou usuário');
    const passwordInput = screen.getByLabelText('Senha');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
