"use client";

import { useState, useEffect, type PointerEvent as ReactPointerEvent } from "react";

export default function AIAgent() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ right: 24, top: 24 });
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dragMoved, setDragMoved] = useState(false);

  // ✅ ADDED (chatbot state)
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me about my skills, projects, resume, or experience." }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPosition({ right: 24, top: 24 });
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    const handlePointerMove = (event: PointerEvent) => {
      setDragMoved(true);
      const right = window.innerWidth - event.clientX - dragOffset.x;
      const y = event.clientY - dragOffset.y;
      setPosition({
        right: clamp(right, 16, window.innerWidth - 96 - 16),
        top: clamp(y, 16, window.innerHeight - 96 - 16),
      });
    };

    const handlePointerUp = () => setDragging(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging, dragOffset]);

  const startDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    setDragMoved(false);
    setDragOffset({
      x: window.innerWidth - event.clientX - position.right,
      y: event.clientY - position.top,
    });
  };

  const handleButtonClick = () => {
    if (dragMoved) {
      setDragMoved(false);
      return;
    }
    setOpen((prev) => !prev);
  };

  // ✅ ADDED (send to Flask)
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://portfolio-ai-chatbot-backend-xxx9.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.response || "No response",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Cannot connect to Flask backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed z-[999999] flex flex-col items-end gap-4"
      style={{ top: position.top, right: position.right }}
    >
      {open && (
        <div className="w-[330px] h-[460px] overflow-hidden rounded-2xl border border-white/10 bg-black/95 text-white shadow-[0_0_40px_rgba(59,130,246,0.5)]">
          <div className="flex items-center justify-between bg-blue-600 px-4 py-3">
            <div>
              <h3 className="font-bold">AI Assistant</h3>
              <p className="text-xs text-blue-100">Ask about my portfolio</p>
            </div>

            <button onClick={() => setOpen(false)} className="text-2xl">
              ×
            </button>
          </div>

          {/* ✅ UPDATED (chat messages) */}
          <div className="h-[335px] overflow-y-auto p-4 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 ${
                    msg.sender === "user"
                      ? "bg-blue-600"
                      : "bg-zinc-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="bg-zinc-800 px-3 py-2 rounded-xl w-fit">
                Typing...
              </div>
            )}
          </div>

          {/* ✅ UPDATED (input control) */}
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white outline-none"
            />
            <button
              onClick={sendMessage}
              className="rounded-xl bg-blue-600 px-4 text-sm font-semibold hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onPointerDown={startDrag}
        onClick={handleButtonClick}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all hover:scale-110 hover:bg-blue-700"
      >
        💬
      </button>
    </div>
  );
}