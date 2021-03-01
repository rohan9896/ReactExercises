import "./styles.css";
import Text from "./components/Text";
import Header from "./components/Header";

export default function App() {
  const textStyle = {
    fontSize: 20
  };

  return (
    <div className="App">
      <Header />
      <Text />
    </div>
  );
}
