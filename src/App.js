import logo from './logo.svg';
import './App.css';

const App = () => {

  const persona = {nombre: "luna", altura: "174"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        hola {persona.nombre} de la altura {persona.altura}cm
        </p>
        <buttonComponent/>
      </header>
    </div>
  );
}
const buttonComponent = () => {
  return (
    <button>LB TURNOS</button>
  );
}
export default App;
