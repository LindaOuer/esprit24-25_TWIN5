import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import CounterC from "./CounterC";
import CounterF from "./CounterF";
import Pokemon from "./Pokemon";
import Ex2 from "./ex2";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const [name, setName] = useState("Mohamed");
    const handleClick = () => setCount((count) => count + 1);

    return (
        <>
            <Header name={name} />

            <CounterC counter={10} />
            <br />
            <input
                type="number"
                value={step}
                onChange={(e) => setStep(e.target.value)}
            />
            <br />
            <CounterF step={step} />
            <br />
            <br />
            <Ex2 initialItems={["React", "Angular", "Vue"]} />
            <br />
            <br />
            <Pokemon />
        </>
    );
}

export default App;
