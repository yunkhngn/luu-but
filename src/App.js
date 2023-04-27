import {
  HeadCard,
  NameInput,
  MultipleChoice,
  Form,
  ShortText,
} from "./components/hooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeadCard />
      <NameInput />
      <MultipleChoice />
      <Form />
      <ShortText />
    </div>
  );
}

export default App;
