// import React from "react";
// import Home from "./Components/Home";

// function App() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;


// App.js

import React from 'react';
import Post from './Components/Post'; 
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Post
        username="Jash Asmani"
        imageUrl="https://ceotoday.co/wp-content/uploads/2023/04/3-wrd.jpg"
        likes={123}
        caption="This is a sample caption."
      />
    </div>
  );
};

export default App;
