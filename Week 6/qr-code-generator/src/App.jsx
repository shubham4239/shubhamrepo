import { useRef, useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  const generateQRCode = () => {
    if (!text.trim()) {
      alert("Please enter some text or URL");
      return;
    }
    qrRef.current.innerHTML = "";
    new window.QRCode(qrRef.current, {
      text: text,
      width: 200,
      height: 200,
    });
  };
  return (
    <div className="container">
      <div className="card">
        <h2>QR Code Generator</h2>
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={generateQRCode}>Generate QR Code</button>
        <div id="qrcode" ref={qrRef}></div>
      </div>
    </div>
  );
}

export default App;
