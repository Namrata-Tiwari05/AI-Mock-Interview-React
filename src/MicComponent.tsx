import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const MicComponent: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Browser not supported</p>;
  }

  const sendTextToAPI = () => {
    console.log("Sending to API:", transcript);
    alert("Text sent to API (check console)!");
    resetTranscript();
  };

  return (
    <div style={{ padding: "20px", border: "1px solid gray", width: "400px", margin: "20px auto" }}>
      <button onClick={() => SpeechRecognition.startListening()} style={{ margin: "5px" }}>
        Start Mic
      </button>
      <button onClick={() => SpeechRecognition.stopListening()} style={{ margin: "5px" }}>
        Stop Mic
      </button>
      <button onClick={resetTranscript} style={{ margin: "5px" }}>
        Reset
      </button>
      <button onClick={sendTextToAPI} style={{ margin: "5px" }}>
        Send to API
      </button>

      <p>Listening: {listening.toString()}</p>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default MicComponent;