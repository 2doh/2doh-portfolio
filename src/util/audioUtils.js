export const audioContext = stream => {
  const context = new AudioContext();
  const analyser = context.createAnalyser();
  const microphone = context.createMediaStreamSource(stream);
  microphone.connect(analyser);
  analyser.fftSize = 256; // 256 ~ 2048
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  return { context, analyser, bufferLength, dataArray };
};

export const audioFrequency = (dataArray, bufferLength) => {
  let total = 0;
  for (let i = 0; i < bufferLength; i++) {
    total += dataArray[i];
  }
  return total / bufferLength;
};

export const listeningText = (config, onStartCallback, onEndCallback) => {
  if (!("speechSynthesis" in window)) {
    alert("해당 브러우저는 음성을 지원하지 않습니다.");
    return;
  }

  const speech = new SpeechSynthesisUtterance(config.speechword);
  speech.lang = config.speechlang;
  speech.rate = 0.7;
  speech.volume = config.speechvolume;

  speech.onstart = () => {
    if (onStartCallback) onStartCallback();
  };

  speech.onend = () => {
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};
