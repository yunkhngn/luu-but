import {
  HeadCard,
  NameInput,
  MultipleChoice,
  Form,
  ShortText,
  Submit,
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
      <Submit />
    </div>
  );
}

export default App;
