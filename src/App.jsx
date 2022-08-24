
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLightMode from './components/Navbar/NavbarLightMode';
import ItemListContainer from './Container/ItemListContainer';
import './Styles.css';

const App = () => {
  return (
    <header>
    <div>
    <NavbarLightMode/>
    </div>
    <div>
      <ItemListContainer greeting="Bienvenidxs a Only Girls Tattoo"/>
      
  </div>
  </header>
  );
}
export default App;
