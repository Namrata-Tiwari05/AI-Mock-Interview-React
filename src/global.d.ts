declare module 'react-speech-recognition' {
  const SpeechRecognition: {
    browserSupportsSpeechRecognition: () => boolean;
    startListening: (options?: unknown) => void;
    stopListening: () => void;
  };

  export const useSpeechRecognition: () => {
    transcript: string;
    listening: boolean;
    resetTranscript: () => void;
  };

  export default SpeechRecognition;
}