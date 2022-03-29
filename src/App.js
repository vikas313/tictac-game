
import './App.css';
import Game from './components/Game';
import Randomquotes from './components/Randomquotes';
let player1 = prompt("enter your name",'player1')
let player2 = prompt("enter your name",'player2')

function App() {
 
  return (
    <>
    <Randomquotes/>
    <div className="App">
       <Game player1={player1} player2={player2} />
    </div>
    </>
  );
}

export default App;
