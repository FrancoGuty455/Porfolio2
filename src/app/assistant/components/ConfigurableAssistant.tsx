"use client";
import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa"; 
import wave from "../animations/wave.json";
import walk from "../animations/walk.json";
import sleep from "../animations/sleep.json";
import typing from "../animations/typing.json";
import note from "../animations/note.json";
const animationMap = {
  wave,
  walk,
  sleep,
  typing,
  note,
};
type Props = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: string;
  delaySleep?: number;
  dialog?: string;
};
export default function ConfigurableAssistant({
  position = "bottom-right",
  size = "140px",
  delaySleep = 30000,
  dialog,
}: Props) {
  const [animation, setAnimation] = useState<keyof typeof animationMap>("wave");
  const [displayedText, setDisplayedText] = useState("");
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [originalDialog, setOriginalDialog] = useState<string>("");
  const [isMuted, setIsMuted] = useState(false);
  const [showMuted, setShowMuted] = useState(false);
  const isTyping = useRef(false);
  const typingIndex = useRef(0);
  const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inactivityTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentDialogRef = useRef<string>("");
  const [messageInput, setMessageInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState("");
  const [sendError, setSendError] = useState("");
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;

  useEffect(() => {
    const waitForVoices = () =>
      new Promise<SpeechSynthesisVoice[]>((resolve) => {
        const voices = speechSynthesis.getVoices();
        if (voices.length) return resolve(voices);
        const interval = setInterval(() => {
          const loadedVoices = speechSynthesis.getVoices();
          if (loadedVoices.length > 0) {
            clearInterval(interval);
            resolve(loadedVoices);
          }
        }, 100);
      });

    const initVoice = async () => {
      const voices = await waitForVoices();
      const preferred =
        voices.find((v) => v.name === "Google UK English Male" || v.name === "Microsoft David Desktop - English (United States)") ||
        voices.find((v) => v.lang === "en-US");
      setVoice(preferred || voices[0]);
    };

    initVoice();
  }, []);

  const speak = (text: string) => {
    if (!synth || !voice || isMuted) return;
    if (synth.speaking) {
      synth.cancel();
      setTimeout(() => speak(text), 250);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = voice.lang || "en-US";

    synth.speak(utterance);
  };

  const positionClasses = {
    "top-left": "fixed top-4 left-4",
    "top-right": "fixed top-4 right-4",
    "bottom-left": "fixed bottom-4 left-4",
    "bottom-right": "fixed bottom-4 right-4",
  }[position];

  useEffect(() => {
    const text = typeof dialog === "string" ? dialog : "";
    const isInitialGreeting = dialog?.toLowerCase().includes("tell you who i am");

    if (!text || !voice) return;
    isTyping.current = true;
    setDisplayedText("");
    typingIndex.current = 0;
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    setAnimation("typing");

    if (!isMuted) {
      speak(text);
    }

    const typeChar = () => {
      typingTimeout.current = setTimeout(() => {
        typingIndex.current++;
        setDisplayedText(text.slice(0, typingIndex.current));

        if (typingIndex.current < text.length) {
          typeChar();
        } else {
          isTyping.current = false;
          setAnimation(isInitialGreeting ? "wave" : "typing");
        }
      }, 50);
    };

    typeChar();

    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      isTyping.current = false;
    };
  }, [dialog, voice]);

  useEffect(() => {
    if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
    inactivityTimeout.current = setTimeout(() => {
      setAnimation("sleep");
    }, delaySleep);

    const handleScroll = () => {
      if (!isTyping.current) {
        setAnimation("walk");
      }
      if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
      inactivityTimeout.current = setTimeout(() => {
        if (!isTyping.current) {
          setAnimation("sleep");
        }
      }, delaySleep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
    };
  }, [delaySleep]);

  useEffect(() => {
    const handleHoverMessage = (e: Event) => {
      const custom = e as CustomEvent;
      const detail = custom.detail;
      if (typeof detail !== "string") return;

      const text = detail.trim();
      if (text.length === 0) {
        if (originalDialog) {
          setOriginalDialog("");
          setDisplayedText("");
          speak(currentDialogRef.current);
          typingIndex.current = 0;
          if (typingTimeout.current) clearTimeout(typingTimeout.current);
          setAnimation("typing");

          const fullText = currentDialogRef.current;
          isTyping.current = true;
          const typeChar = () => {
            typingTimeout.current = setTimeout(() => {
              typingIndex.current++;
              setDisplayedText(fullText.slice(0, typingIndex.current));
              if (typingIndex.current < fullText.length) {
                typeChar();
              } else {
                isTyping.current = false;
              }
            }, 40);
          };
          typeChar();
        }
        return;
      }

      if (!originalDialog) {
        setOriginalDialog(dialog ?? "");
        currentDialogRef.current = dialog ?? "";
      }

      isTyping.current = true;
      setDisplayedText("");
      speak(text);
      typingIndex.current = 0;
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      setAnimation("note");

      const typeChar = () => {
        typingTimeout.current = setTimeout(() => {
          typingIndex.current++;
          setDisplayedText(text.slice(0, typingIndex.current));
          if (typingIndex.current < text.length) {
            typeChar();
          } else {
            isTyping.current = false;
          }
        }, 40);
      };
      typeChar();
    };

    window.addEventListener("assistantMessage", handleHoverMessage);
    return () => {
      window.removeEventListener("assistantMessage", handleHoverMessage);
    };
  }, [dialog, originalDialog]);

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    setSending(true);
    setSendSuccess("");
    setSendError("");

    const templateParams = {
      message: messageInput,
      from_name: "Visitor",
      to_email: "yo.franco654@gmail.com",
    };

    emailjs
      .send("service_zylrahn", "template_7n4wzik", templateParams, "1L4JC0YvZPoGM8kWm")
      .then(
        () => {
          setSendSuccess("Message sent successfully!");
          setMessageInput("");
          setSending(false);
          setTimeout(() => setSendSuccess(""), 5000);
        },
        (error) => {
          setSendError("Failed to send message. Try again later.");
          setSending(false);
          console.error(error);
          setTimeout(() => setSendError(""), 5000);
        }
      );
  };

  return (
    <div
      className={`${positionClasses} z-50 flex flex-col items-center`}
      style={{ width: size }}
      onDoubleClick={() => {
        setIsMuted((prev) => !prev);
        window.speechSynthesis.cancel();
        setShowMuted(true);
        setTimeout(() => setShowMuted(false), 3000);
      }}
    >
      {showMuted && (
        <div className="absolute -top-6 right-0 px-3 py-1 bg-black text-white text-xs rounded-full shadow-md animate-fadeIn">
          🔇 Muted
        </div>
      )}

      {/* Globo de diálogo */}
      {dialog && (
        <div className="relative flex justify-center mb-2">
        <div
  className="shadow-lg text-sm max-w-xs relative font-semibold animate-fadeIn"
  style={{
    backgroundColor: "white",
    color: "black",
    padding: "1rem 2rem", 
    borderRadius: "1.5rem", 
    fontFamily: "'Dancing Script', cursive",
fontWeight: 400,
fontStyle: "normal",
fontSize: "1rem",
lineHeight: 1.4,
  }}
>
  {displayedText}
  <span className="animate-pulse">|</span>
  <div
    style={{
      position: "absolute",
      bottom: "-10px", 
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "12px solid transparent",
      borderRight: "12px solid transparent",
      borderTop: "12px solid white", 
      filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.1))", 
    }}
  />
</div>

        </div>
      )}

      <Lottie
        animationData={animationMap[animation]}
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: isMuted ? "grayscale(80%) brightness(80%)" : "none",
          transform: isMuted ? "scale(0.95)" : "scale(1)",
          transition: "all 0.3s ease",
        }}
      />

<div className="mt-2 w-full max-w-xs flex gap-2 text-black items-center">
  <input
    type="text"
    placeholder="Write a message..."
    value={messageInput}
    onChange={(e) => setMessageInput(e.target.value)}
    className="
      flex-grow
      p-2
      h-10
      rounded-full
      border
      border-gray-300
      focus:outline-none
      focus:border-purple-500
      placeholder-black
      placeholder-opacity-50
      placeholder-shadow-sm
      text-sm
      "
    onKeyDown={(e) => {
      if (e.key === "Enter" && !sending) {
        e.preventDefault();
        handleSendMessage();
      }
    }}
    disabled={sending}
    style={{
      textShadow: "0 0 3px rgba(0,0,0,0.15)"
    }}
  />

  <button
    onClick={handleSendMessage}
    className="
      bg-purple-600
      hover:bg-purple-700
      text-white
      p-2
      rounded-full
      flex
      items-center
      justify-center
      transition
      disabled:opacity-50
      "
    disabled={sending}
    aria-label="Send message"
  >
    <FaPaperPlane size={18} />
  </button>
</div>
      {sendSuccess && <p className="text-green-500 mt-2">{sendSuccess}</p>}
      {sendError && <p className="text-red-500 mt-2">{sendError}</p>}
    </div>
  );
}
