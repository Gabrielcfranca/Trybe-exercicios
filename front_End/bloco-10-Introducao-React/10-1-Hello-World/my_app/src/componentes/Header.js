import React from "react";

class Header extends React.Component {
  showMessage () {
    const message = 'Olá Turma nova';
    return message;
  }
  render(){
    const turma = 1+19;
    return <header>{this.showMessage()} {turma} - A</header>
  }

}
export default Header;