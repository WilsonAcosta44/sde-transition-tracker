import { useState, useEffect } from 'react';

const STORAGE_KEY = 'sde-tracker-progress';

export function useProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const toggle = (taskId) => {
    setCompleted((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const reset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      setCompleted({});
    }
  };

  const importProgress = (data) => {
    setCompleted(data);
  };

  return { completed, toggle, reset, importProgress };
}
