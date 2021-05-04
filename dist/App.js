import React, {useState, useEffect, useRef} from "../snowpack/pkg/react.js";
import {P5Canvas} from "./components/P5Canvas.js";
import {sketch} from "./sketch.js";
import styled from "../snowpack/pkg/styled-components.js";
import {Slider} from "../snowpack/pkg/@reach/slider.js";
import "../snowpack/pkg/@reach/slider/styles.css.proxy.js";
import {GlobalValues} from "./globals.js";
const StyledP5Canvas = styled(P5Canvas)`
  margin: 10px auto;
  width: 600px;
`;
const StyledWrapperDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  max-width: 600px;
  margin: 10px auto;
  h1 {
    font-size: xx-large;
  }
  p {
    font-size: large;
  }
`;
function App({}) {
  const [vertex, setVertex] = useState(GlobalValues.vertices);
  const [subdivisions, setSubdivisions] = useState(GlobalValues.subdivisions);
  const [points, setPoints] = useState(GlobalValues.points);
  const [matrix, setMatrix] = useState(GlobalValues.matrix);
  const [showSubdivisions, setShowSubdivisions] = useState(GlobalValues.showSubdivisions);
  const [showVertices, setShowVertices] = useState(GlobalValues.showVertices);
  const [jumps, setJumps] = useState(GlobalValues.jumps);
  const [shouldSlowDraw, setShouldSlowDraw] = useState(GlobalValues.slowDraw);
  const hackTimeoutId = useRef(0);
  useEffect(() => {
    GlobalValues.vertices = vertex;
    GlobalValues.subdivisions = subdivisions;
    GlobalValues.points = points;
    GlobalValues.showSubdivisions = showSubdivisions;
    GlobalValues.showVertices = showVertices;
    GlobalValues.jumps = jumps;
    GlobalValues.slowDraw = shouldSlowDraw;
  }, [
    vertex,
    subdivisions,
    points,
    showSubdivisions,
    showVertices,
    jumps,
    shouldSlowDraw
  ]);
  useEffect(() => {
    hackTimeoutId.current = setTimeout(() => {
      setMatrix(GlobalValues.matrix);
    }, 250);
    return () => {
      clearTimeout(hackTimeoutId.current);
    };
  }, [GlobalValues.matrix, setMatrix]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(StyledP5Canvas, {
    sketch
  }), /* @__PURE__ */ React.createElement(StyledWrapperDiv, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "vertex-number-slider"
  }, "Vertex Slider"), /* @__PURE__ */ React.createElement(Slider, {
    min: 1,
    max: 20,
    id: "vertex-number-slider",
    onChange: (value) => setVertex(value),
    value: vertex
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "vertex-number-input"
  }, "Vertex Input"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "vertex-number-input",
    min: 1,
    max: 20,
    onChange: ({currentTarget: {value}}) => {
      setVertex(parseInt(value));
    },
    value: vertex
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "subdivision-number-slider"
  }, "Subdivision Slider"), /* @__PURE__ */ React.createElement(Slider, {
    min: 1,
    max: 1e3,
    id: "subdivision-number-slider",
    onChange: (value) => setSubdivisions(value),
    value: subdivisions
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "subdivision-number-input"
  }, "Subdivision Input"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "subdivision-number-input",
    min: 1,
    max: 1e3,
    onChange: ({currentTarget: {value}}) => {
      setSubdivisions(parseInt(value));
    },
    value: subdivisions
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "points-number-slider"
  }, "Points Slider"), /* @__PURE__ */ React.createElement(Slider, {
    min: 1,
    max: 1e3,
    id: "points-number-slider",
    onChange: (value) => setPoints(value),
    value: points
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "points-number-input"
  }, "Points Input"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "points-number-input",
    min: 1,
    max: 1e3,
    onChange: ({currentTarget: {value}}) => {
      setPoints(parseInt(value));
    },
    value: points
  })), /* @__PURE__ */ React.createElement(StyledWrapperDiv, null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "toggle-subdivisions",
    value: `${showSubdivisions}`,
    onChange: ({currentTarget: {checked}}) => {
      setShowSubdivisions(checked);
    }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "toggle-subdivisions"
  }, "Toggle Subdivisions"), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "toggle-vertices",
    value: `${showVertices}`,
    onChange: ({currentTarget: {checked}}) => {
      setShowVertices(checked);
    }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "toggle-vertices"
  }, "Toggle Vertices"), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "toggle-slow-draw",
    value: `${shouldSlowDraw}`,
    onChange: ({currentTarget: {checked}}) => {
      setShouldSlowDraw(checked);
    }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "toggle-slow-draw"
  }, "Toggle Drawing")), /* @__PURE__ */ React.createElement(StyledWrapperDiv, null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setJumps((previousState) => {
        return [...previousState, 0];
      });
    }
  }, "Add Jump"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setJumps((previousState) => {
        const newState = [...previousState];
        newState.pop();
        return newState;
      });
    }
  }, "Remove Jump"), jumps.map((jump, index) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, {
      key: `${jump}-${index}`
    }, /* @__PURE__ */ React.createElement("input", {
      type: "number",
      name: "",
      id: "",
      value: jump,
      onChange: ({currentTarget: {value}}) => {
        setJumps((previousState) => {
          const newState = [...previousState];
          newState[index] = parseInt(value);
          return newState;
        });
      }
    }));
  })), /* @__PURE__ */ React.createElement(StyledWrapperDiv, null, /* @__PURE__ */ React.createElement("p", null, "List of vertices:"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, matrix.map((cords) => {
    return `${JSON.stringify(cords)}
`;
  })))));
}
export default App;
