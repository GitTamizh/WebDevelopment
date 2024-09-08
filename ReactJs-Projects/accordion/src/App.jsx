
import Accordion from './Accordion';
import './App.css';
const items = [
  { title: 'Section 1', content: 'Content for section 1.' },
  { title: 'Section 2', content: 'Content for section 2.' },
  { title: 'Section 3', content: 'Content for section 3.' }
];
function App() {
  return (
    <div className="App">
      <h1>Accordion example</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
