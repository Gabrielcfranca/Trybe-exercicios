import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se existe um input de email na tela', () => {
  // acessar os elementos da tela
  render(<App />);
  // esta puxando uma label que contenha o texto 'Email' 
  const inputEmail = screen.getByLabelText("Email");

  // variável criada acima é colocada no expect, para garantir 
  // que algo está sendo renderizado na tela, através do comando 'toBeInTheDocument();'.
  expect(inputEmail).toBeInTheDocument();
  // garantir o tipo do input, sendo ele do tipo email
  expect(inputEmail.type).toBe("email")
  // interagir com os elementos (se for necessário)
});

test('verifica se existe um botão', () => {
  // acessar os elementos da tela
  render(<App />);
  // const para verificar se existem 2 botões na tela 
  const buttons = screen.getAllByRole("button");
  // variável criada acima é colocada no expect, para garantir 
  // que algo está sendo renderizado na tela, através do comando 'toBeInTheDocument();'.
  expect(buttons).toHaveLength(2);
  // garantir que possuem dois buttons na tela
  
  // interagir com os elementos (se for necessário)
});


test('verifica se existe um botão de enviar', () => {
  // acessar os elementos da tela
  render(<App />);
  // const para verificar se existe 1 botão na tela através do ID 
  const button = screen.getByTestId("id-send");
  // variável criada acima é colocada no expect, para garantir 
  // que algo está sendo renderizado na tela, através do comando 'toBeInTheDocument();'.
  expect(button).toBeInTheDocument();
  // garantir que existe um button com id no data-testid "id-send"
  expect(button).toHaveValue("Enviar");
  // verificar que o botao está renderizado na tela e que existe o value="enviar"
  // interagir com os elementos (se for necessário)
});