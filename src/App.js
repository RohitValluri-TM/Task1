import './App.css';

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

const Fruits = () =>{
  return(
    <div>
      <TypesOfFruit/>
    </div>
  )
}


const TypesOfFruit = () => {
  return (
    <div>
      <h2>FRUITS:</h2>
      <ul>
        <li>Mango</li>
        <li>Watermelon</li>
        <li>Apple</li>
      </ul>
    </div>
  );
};



const TypesOfFood = () => {
  return (
    <div className="App">
      <JSX/>
      <Fruits/>
    </div>
  );
}

export default TypesOfFood;
