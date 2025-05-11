import { useState, useEffect } from "react";

export const useLoadingProgress = (duration = 3000, onComplete) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        
        setTimeout(() => {
          setIsComplete(true);
          
          setTimeout(() => {
            setIsHidden(true);
            if (onComplete) onComplete();
          }, 700);
        }, 200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return { progress, isComplete, isHidden };
};