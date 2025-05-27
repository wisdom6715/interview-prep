import { useRef, useEffect } from "react";

const PracticeUseRef = () => {
  const countRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log("Timer:", countRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Check console for timer count: {countRef.current}</p>;
};

export default PracticeUseRef