import './App.css';
import TypesOfFood from './TypesOfFood';


const JSX = ()=> {
  return(
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
      <ul>List
        <li>JSX1</li>
        <li>JSX2</li>
        <li>JSX3</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <JSX/>
      <TypesOfFood/>
    </div>
  );
}

export default App;
