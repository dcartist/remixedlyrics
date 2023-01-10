import logo from './Images/remixedCoffeeLogo.svg';
// import logo from './Images/more-coffee.png';
import RemixedCoffeeLogo from './Images/RemixedCoffeLogo';
import Navigation from './Components/Navigation/Navigtation';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <Navigation></Navigation> */}
<RemixedCoffeeLogo></RemixedCoffeeLogo>
   <p> where coffee and tea can make music better!</p>
    </div>
  );
}

export default App;
