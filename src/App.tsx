import React from 'react';
import './styles/index.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Header/>
        <div className='wrapper'>
            <Main/>
            <Footer/>
        </div>
        <ScrollToTop/>
    </div>
  );
}

export default App;
