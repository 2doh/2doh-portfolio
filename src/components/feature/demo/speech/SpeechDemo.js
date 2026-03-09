import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import vocaData from "../../../../data/vackData.json";
import SoundControlGroup from "./SoundControlGrup";
import VocaCard from "./VocaCard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useRef, useState } from "react";
import {
  audioContext,
  audioFrequency,
  listeningText,
} from "../../../../util/audioUtils";
import VolumeMeter from "./VolumeMeter";
import VolumSlider from "./VolumSlider";

const SpeechDemo = () => {
  // const { step } = useParams();
  // const currentIndex = step ? parseInt(step, 10) - 1 : 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [audioStream, setAudioStream] = useState(null);
  // 음성 크기
  const [volume, setVolume] = useState(null);
  const [sound, setSound] = useState(() => {
    const saved = localStorage.getItem("soundVol");
    return !saved ? 0.5 : parseFloat(saved);
  });

  const currentItem = vocaData[currentIndex];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>브라우저가 음성 인식을 지원하지 않습니다.</span>;
  }

  const toggleListening = async () => {
    if (listening) {
      SpeechRecognition.stopListening();
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
        setAudioStream(null);
      }
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setAudioStream(stream);

        SpeechRecognition.startListening({
          language: "en-US",
          continuous: true,
        });
        resetTranscript();
      } catch (error) {
        alert("마이크 권한 또는 마이크 연결이 필요합니다.");
      }
    }
  };

  const handleListen = () => {
    const config = {
      speechword: currentItem.word,
      speechlang: "en-US",
      speechvolume: sound,
    };

    listeningText(
      config,
      () => true,
      () => false,
    );
  };

  useEffect(() => {
    if (!audioStream) {
      setVolume(0);
      return;
    }

    const { context, analyser, bufferLength, dataArray } =
      audioContext(audioStream);

    let animationFrameId;

    const update = () => {
      analyser.getByteFrequencyData(dataArray);
      const vol = audioFrequency(dataArray, bufferLength);
      setVolume(Math.min(vol / 50, 1));
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    // 클린업
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (context.state !== "closed") {
        context.close();
      }
    };
  }, [audioStream]);

  useEffect(() => {
    localStorage.setItem("soundVol", sound);
  }, [sound]);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      SpeechRecognition.stopListening();
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      resetTranscript();
    };
  }, []);

  // 정답 체크 + 자동 이동
  useEffect(() => {
    if (!transcript || !currentItem) return;

    const userSpeak = transcript.toLowerCase();
    const targetWord = currentItem.word.toLowerCase().trim();

    const getSimilarity = (s1, s2) => {
      const len1 = s1.length,
        len2 = s2.length;
      const matrix = Array.from({ length: len1 + 1 }, () =>
        Array(len2 + 1).fill(0),
      );
      for (let i = 0; i <= len1; i++) matrix[i][0] = i;
      for (let j = 0; j <= len2; j++) matrix[0][j] = j;
      for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
          const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + cost,
          );
        }
      }
      return 1 - matrix[len1][len2] / Math.max(len1, len2);
    };

    const similarity = getSimilarity(userSpeak, targetWord);

    if (userSpeak.includes(targetWord) || similarity > 0.5) {
      const timer = setTimeout(() => {
        if (currentIndex + 1 < vocaData.length) {
          resetTranscript();
          setCurrentIndex(prev => prev + 1);
        } else {
          alert("모든 학습을 완료했습니다!");
          navigate("/features");
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [transcript, currentItem, currentIndex, resetTranscript]);

  return (
    <VocaWrapStyle>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${((currentIndex + 1) / vocaData.length) * 100}%` }}
        />
        <span className="step-text">
          {currentIndex + 1} / {vocaData.length}
        </span>
      </div>

      <VocaCard currentItem={currentItem} />

      <SoundControlGroup>
        <VolumeMeter
          listening={listening}
          toggleListening={toggleListening}
          volume={volume}
        />
        <VolumSlider
          setSound={setSound}
          sound={sound}
          handleListen={handleListen}
        />
      </SoundControlGroup>
      <p style={{ color: "var(--color-text-secondary)" }}>{transcript}</p>
    </VocaWrapStyle>
  );
};

export default SpeechDemo;

const VocaWrapStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .progress-container {
    width: 100%;
    height: 8px;
    background: #eee;
    border-radius: 4px;
    position: relative;
    .progress-bar {
      height: 100%;
      background: var(--color-accent-olive);
      border-radius: 4px;
      transition: width 0.3s ease;
    }
    .step-text {
      position: absolute;
      right: 0;
      top: -25px;
      font-size: 0.8rem;
      color: var(--color-text-secondary);
    }
  }
`;
