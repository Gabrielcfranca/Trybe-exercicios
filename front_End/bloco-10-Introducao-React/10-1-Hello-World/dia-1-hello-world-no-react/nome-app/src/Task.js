import React from "react";
import './App';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const compromissos = ['estudar', 'acordar', 'ler', 'jogar Bola'];
class App1 extends React.Component{
  render(){
    return(
    <ul>{ compromissos.map(compromissos => Task(compromissos)) }</ul>
    );
  }
}
export default App1;