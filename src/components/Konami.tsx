import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function Konami() {
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === SEQUENCE[position]) {
        const next = position + 1;
        if (next === SEQUENCE.length) {
          setActive(true);
          setPosition(0);
        } else {
          setPosition(next);
        }
      } else {
        setPosition(0);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [position]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white text-4xl cursor-pointer"
      onClick={() => setActive(false)}
    >
      <div className="animate-pulse">✨ Secret Unlocked! ✨</div>
    </div>
  );
}
