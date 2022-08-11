import logo from './logo.svg';
import './App.css';

const App = () => {

  const persona = {nombre: "ONLY GIRLS TATTOO APP", creador: "Luna Bercernelo"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {persona.nombre} creador por: {persona.creador}
        </p>
        <ButtonComponent />
      </header>
    </div>
  );
}
const ButtonComponent = () => {
return <button> ENTRAR </button>
}
export default App;
