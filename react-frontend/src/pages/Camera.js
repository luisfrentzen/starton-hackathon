import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function Camera() {
  const camref = useRef(null)
  const [camEnabled, setCamEnabled] = useState(false)

  function test() {
    fetch('/hello',  {method: 'POST'}).then(res => res.json()).then(res => console.log(res))
  }

  return (
    <div>
      <div>
        <button onClick={test}>Testing</button>
        <button onClick={() => setCamEnabled(!camEnabled)}>Webcam</button>
      </div>
      {camEnabled &&
        <Webcam ref={camref}/>
      }
    </div>
  );
};
