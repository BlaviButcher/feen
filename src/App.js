import "./App.css";
import JoelsButton from "./components/button";
import PropExample from "./components/propExample";

function helloWorld() {
  console.log("Hello World");
}

function goodbyeWorld() {
  console.log("Goodbye World");
}
function App() {
  return (
    <div className="App">
      <JoelsButton />
      <br />
      <br />
      <br />
      <PropExample
        prop1="hello1"
        prop2="goodbye1"
        callback={() => helloWorld()}
      />
      <br />
      <br />
      <br />
      <PropExample
        prop1="hello2"
        prop2="goodbye2"
        callback={() => goodbyeWorld()}
      />
    </div>
  );
}

export default App;
