import {
  HeadCard,
  NameInput,
  MultipleChoice,
  Form,
  ShortText,
  Submit,
} from "./components/hooks";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="App">
      <HeadCard show={show} setShow={setShow} />
      <NameInput show={show} />
      <MultipleChoice show={show} />
      <Form show={show} />
      <ShortText show={show} />
      <Submit show={show} setShow={setShow} />
      <Analytics/>
    </div>
  );
}

export default App;
