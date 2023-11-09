import { useRef } from "react";

function Test() {
  const helloRef = useRef<any>(null);

  return (
    <div>
      <h2 ref={helloRef}>hello</h2>
    </div>
  );
}

export default Test;
