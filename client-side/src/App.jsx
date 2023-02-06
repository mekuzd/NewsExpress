import { useState } from "react";
import DefaultLayout from "./Layouts/DefaultLayouts";
import httpClient from "./Services/httpClient";

function App() {
  const [apiMes, setApimes] = useState("");
  let calc = {
    Fn: 20,
    Sn: 3,
    operator: "-",
  };
  async function add() {
    try {
      let response = await httpClient.post("/calc", calc);
      console.log(response);
      setApimes(response.data.message);
    } catch (error) {
      setApimes(error.response.data.message);
    }
  }

  return (
    <DefaultLayout>
      <button className="btn btn-primary m-2" onClick={add}>
        click me
      </button>
      <h1>{apiMes}</h1>
    </DefaultLayout>
  );
}

export default App;
