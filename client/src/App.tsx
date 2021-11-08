import React, { useState } from 'react';
import axios from "axios";
import * as config from './config';

console.log(config.API);

const App = () => {
  const [num, setNum] = useState(1);
  const [requestArray, setRequestArray] = useState<number[] | null>(null);
  const [responceError, setResponceError] = useState<string | null>(null);

  const handleSend = async (event: any) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${config.API}/array`, { number: num });
      console.log("Array:", res.data);
      setRequestArray(res.data.reversedArray);
      setResponceError(null);
    } catch (e: any) {
      setRequestArray(null);
      console.log("error", e);
      setResponceError((e.response.data &&e.response.data.errors) ? e.response.data.errors : "Serrver error");
    }
  }

  const handleInput = (event: any) => {
    setNum(event.target.value);
  }

  return (
    <div>
      <form>
        <input type="text"
          value={num}
          onChange={handleInput}
          placeholder="Enter number"
          className="form-field" />
        <button type="submit"
          onClick={handleSend}
          className="form-btn">
          {'Send'}
        </button>
      </form>
      {requestArray ? (
        <>
          <div className="results">Results: </div>
          <div>
            {requestArray.length
              ? requestArray.map((item) => (
                <span key={item}> {item} </span>
              ))
              : "[Empty]"}
          </div>
        </>
      ) : null}
      {responceError ? (
        <>
          <div className="results">Results: </div>
          <div>
            {responceError}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;