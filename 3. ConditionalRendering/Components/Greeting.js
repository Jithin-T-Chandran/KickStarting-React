import React, { useState } from "react";

function Greeting() {
  const [loggedIn, setLoggedIn] = useState(true);
  return loggedIn ? <div>Greetings</div> : <div>Bye</div>;
}

export default Greeting;
