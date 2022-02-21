import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import Play from './components/Play';
import Rules from './components/Rules';

function App() {

  const [userChoice, setUserChoice] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <div className='container'>
      <Header score={score}/>
      <Routes>
        <Route path="/" element={<Play setUserChoice={setUserChoice}/>} />
        <Route path="/game" element={<Game userChoice={userChoice} score={score} setScore={setScore}/>} />
      </Routes>
      <Rules/>
      <Footer/>
    </div>
  );
}

export default App;
