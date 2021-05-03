import React, {useEffect, useRef} from "../../snowpack/pkg/react.js";
import p5 from "../../snowpack/pkg/p5.js";
export const P5Canvas = ({sketch, className}) => {
  const divRef = useRef(null);
  const P5Ref = useRef();
  useEffect(() => {
    const node = divRef.current;
    if (P5Ref.current !== void 0) {
      P5Ref.current.remove();
    }
    const delay = setTimeout(() => {
      const p5Instance = new p5(sketch, node);
      P5Ref.current = p5Instance;
    }, 100);
    return () => {
      clearTimeout(delay);
      if (P5Ref?.current) {
        const P5Instance = P5Ref.current;
        P5Instance.remove();
      }
    };
  }, [P5Ref, divRef, sketch]);
  return /* @__PURE__ */ React.createElement("div", {
    ref: divRef,
    className
  });
};
