import React from 'react';
import './styles/index.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
        <div className='wrapper'>
            <Main/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
