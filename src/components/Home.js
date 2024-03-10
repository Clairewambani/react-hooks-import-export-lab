import React from "react";
import { username, city } from "../data/user";

console.log(username); //=> "Liza"
// city(); //=> "New York"  // Not necessary since city is not a function

export { username, city };

function Home() {
  return (
    <div id="home">
     
       <h1>
        {username} is a Web Developer from {city}
        </h1>
    </div>
  );
}
export default Home;