import {
  HeadCard,
  NameInput,
  MultipleChoice,
  Form,
  ShortText,
  Submit,
  MusicPlayer,
  Letter,
} from "./components/hooks";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [available, setAvailable] = useState(true);
  const [showLetter, setShowLetter] = useState(false);

  const [data, setData] = useState({
    date : "",
    name: "",
    handsome: "",
    memories: "",
    message: "",
  });
  //check if data is on local storage
  const localData = localStorage.getItem("data");
  useEffect(() => {
    if (localData) {
      setData(JSON.parse(localData));
      setAvailable(false);
    }
  }, []);

  console.clear();
  console.log(data, available, showLetter);

  return (
    <div className="App">
      <HeadCard show={show} setShow={setShow} setData={setData} available={available} showLetter={showLetter} setShowLetter={setShowLetter}/>
      {/* <MusicPlayer/> */}
      <Letter show={show} data={data} showLetter={showLetter}/>
      <NameInput show={show} setData={setData}  data={data}/>
      <MultipleChoice show={show} setData={setData}  data={data}/>
      <Form show={show} setData={setData} data={data}/>
      <ShortText show={show} setData={setData}  data={data}/>
      <Submit show={show} setShow={setShow} setData={setData} data={data} setAvailable={setAvailable}/>
      <Analytics/>
    </div>
  );
}

export default App;
