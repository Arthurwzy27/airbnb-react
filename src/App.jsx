import './App.scss';
import Flat from './Flat.jsx';

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <input className="search" />
        <div className="flats">
          <Flat name="Flat1" price="59"/>
          <Flat name="Flat2" price="45"/>
          <Flat name="Flat3" price="75"/>

        </div>
      </div>

      <div className="map">
      </div>
    </div>
  );
}

export default App;
