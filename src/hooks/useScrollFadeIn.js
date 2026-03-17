import { useEffect, useRef } from "react";

export const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = name => {
    switch (name) {
      case "up":
        return "translate3d(0, 50px, 0)";
      case "down":
        return "translate3d(0, -50px, 0)";
      case "left":
        return "translate3d(50px, 0, 0)";
      case "right":
        return "translate3d(-50px, 0, 0)";
      default:
        return;
    }
  };

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            current.style.transitionProperty = "all";
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction =
              "cubic-bezier(0, 0, 0.2, 1)";
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = "translate3d(0, 0, 0)";
          }
        },
        { threshold: 0.1 }, // 요소가 10% 정도 보일 때 실행
      );
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [delay, duration]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
