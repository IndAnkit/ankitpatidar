import Header from "./components/header/Header";
import './App.css';
import NodeDef from "./topics/defination/NodeDef";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NodeDef />
    </div>
  );
}

export default App;
