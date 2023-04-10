
import RemixedCoffeeLogo from './Images/RemixedCoffeLogo';
import Navigation from './Components/Navigation/Navigtation';
import './App.scss';
import * as prismic from "@prismicio/client";
const client = prismic.createClient("remixedPrismic"); 
const repoName = "remixedPrismic";
const endpoint = prismic.getEndpoint(repoName);
// const client = prismic.createClient(endpoint);
console.log(client.endpoint);
console.log(endpoint);
const blogPosts =  client.getAllByType("song");
console.log(blogPosts);

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
