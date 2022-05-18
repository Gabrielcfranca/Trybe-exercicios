const Redux = require('redux');

// const store = Redux.createStore();
// actionCreator (função responsável por enviar uma action ao reducer
// com a intenção de alterar para verdadeiro a chave login da store.)
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
}

const reducer = (state = ESTADO_INICIAL) => {
  switch (action.type){
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: //No Switch, sempre precisamos ter um caso default
      return state;
    }
  };
  
  const store = Redux.createStore(reducer);

  store.dispatch(fazerLogin("exemplo@email.com"));

  console.log(store.getState());