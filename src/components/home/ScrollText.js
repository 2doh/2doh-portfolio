import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ScrollText = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {isVisible &&
        text.split("").map((char, index) => (
          <AnimatedChar key={index} delay={delay + index * 0.05}>
            {char === " " ? "\u00A0" : char}
          </AnimatedChar>
        ))}
    </span>
  );
};

export default ScrollText;

const AnimatedChar = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${typing} 0.1s forwards;
  animation-delay: ${props => props.delay}s;
`;
