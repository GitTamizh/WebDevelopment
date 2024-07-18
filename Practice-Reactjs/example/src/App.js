import logo from './logo.svg';
import './App.css';

function App() {
  function nameChange(){
    const names = ["give", "grow", "earn", "save", "invest", "split"];
    const id = Math.floor(Math.random() * names.length);
    return names[id];
  }
  return (
    <div >
      <p>Let's {nameChange()} Moneny</p>

    </div>
  );
}

export default App;
