
import RemixedCoffeeLogo from './Images/RemixedCoffeLogo';
import Navigation from './Components/Navigation/Navigtation';
import Index from './Pages/Index';
import Index1 from './Pages/Index1';
import { Routes, Route } from "react-router-dom"
import './App.scss';

import { PageTransition } from "@steveeeie/react-page-transition";

function App() {
  
  return (
    <div className="App">
      something
      <Navigation></Navigation>
      
      {/* <Index></Index> */}
{/* <RemixedCoffeeLogo></RemixedCoffeeLogo> */}
   <p> where coffee and tea can make music better!</p>
   <PageTransition
                preset="moveToLeftFromRight"
                transitionKey={location.pathname}
              >
   <Routes>
  <Route path="/" element={<Index />}>
  </Route>
  <Route path="index1" element={<Index1 />} />
</Routes>
</PageTransition>
    </div>
  );
}

export default App;
