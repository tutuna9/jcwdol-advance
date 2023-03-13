import { Routes, Route } from "react-router-dom";
import Hoc from "./pages/Hoc";

function App() {
  const Button = (props) => <button style={props.style}>Click Me</button>
  const Text = (props) => <p style={props.style}>Test</p>

  const StyleButton = Hoc(Button)
  const StyleText = Hoc(Text)

  return (
    <div>
      <StyleButton />
      <StyleText />
      <Routes>
        <Route path="/" element={<Hoc />}/>
      </Routes>
    </div>
  );
}

export default App;
