"use client";

import { useState, useEffect, useCallback } from "react";

export function useOtpCountdown(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => Math.max(s - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const reset = useCallback(() => setSecondsLeft(initialSeconds), [initialSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formatted = `${minutes}:${String(seconds).padStart(2, "0")}`;

  return { secondsLeft, isExpired: secondsLeft <= 0, reset, formatted };
}