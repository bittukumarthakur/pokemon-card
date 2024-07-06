import logo from "./logo.svg";
import "./App.css";
import MirrorInput from "./mirrorInput";
import PokemonDeck from "./pokemon";

const Greating = ({ name, style }) => <h1 style={style}>Hello {name}</h1>;

function App() {
  const colorRed = { color: "red" };
  const names = ["bittu", "raj", "biswa"];

  const greetings = names.map((name) => {
    return <Greating name={name} style={colorRed} />;
  });

  return (
    <div>
      <PokemonDeck />
    </div>
  );
}

export default App;
