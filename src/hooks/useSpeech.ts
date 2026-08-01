import { useState, useEffect, useCallback } from 'react';

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const [currentText, setCurrentText] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSupported(true);
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentText(null);
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!supported || typeof window === 'undefined') return;

    // Stop previous utterance
    window.speechSynthesis.cancel();

    if (currentText === text && isSpeaking) {
      setIsSpeaking(false);
      setCurrentText(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentText(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentText(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentText(null);
    };

    window.speechSynthesis.speak(utterance);
  }, [supported, currentText, isSpeaking]);

  return {
    supported,
    isSpeaking,
    currentText,
    speak,
    stopSpeaking
  };
}
