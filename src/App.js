import './App.css';

const myName= "William Cairns";
const toDoList = [
  "Office Work",
  "Gardening",
  "Bike ride",
  "Hang Picture"
]

function App() {
  let task = toDoList[Math.floor(Math.random()*4)]
  return (
    <div className="App">
      Hello {myName} you have a task {task} to finish
    </div>
  );
}

export default App;
