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
  height: 600px;
`;
const StyledWrapperDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
  h1 {
    font-size: xx-large;
  }
  p {
    font-size: large;
  }
`;
const StyledSlider = styled(StyledWrapperDiv)`
  grid-template-columns: 1fr 130px;
  & label {
    display: inline-block;
    margin-bottom: 5px;
  }
  & input {
    width: calc(100% - 10px);
  }
`;
const ToggleBox = styled.div`
  margin: 10px 0;
`;
const ToggleArea = styled(StyledWrapperDiv)`
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 10px auto;
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
`;
const JumpsArea = styled(StyledWrapperDiv)`
  grid-template-columns: repeat(5, 1fr);
  border-bottom: solid grey 2px;
  padding: 10px 0;
  & label {
    display: inline-block;
    margin-bottom: 5px;
  }

  & input {
    width: calc(100% - 10px);
  }
`;
const TotalJumps = styled.div`
  grid-column: 1/6;
  display: grid;
`;
function App({}) {
  const [vertex, setVertex] = useState(GlobalValues.vertices);
  const [subdivisions, setSubdivisions] = useState(GlobalValues.subdivisions);
  const [points, setPoints] = useState(GlobalValues.points);
  const [showSubdivisions, setShowSubdivisions] = useState(GlobalValues.showSubdivisions);
  const [showVertices, setShowVertices] = useState(GlobalValues.showVertices);
  const [jumps, setJumps] = useState(GlobalValues.jumps);
  const [totalJumps, setTotalJumps] = useState(0);
  const [shouldSlowDraw, setShouldSlowDraw] = useState(GlobalValues.slowDraw);
  const globalValues = useRef(GlobalValues);
  useEffect(() => {
    setJumps((previousState) => {
      if (jumps.length < totalJumps) {
        return [...Array(totalJumps)].map(() => 1);
      } else {
        const newState = [...previousState];
        return newState.slice(0, totalJumps - 1);
      }
    });
  }, [totalJumps]);
  useEffect(() => {
    globalValues.current.vertices = vertex;
    globalValues.current.subdivisions = subdivisions;
    globalValues.current.points = points;
    globalValues.current.showSubdivisions = showSubdivisions;
    globalValues.current.showVertices = showVertices;
    globalValues.current.jumps = jumps;
    globalValues.current.slowDraw = shouldSlowDraw;
  }, [
    vertex,
    subdivisions,
    points,
    showSubdivisions,
    showVertices,
    jumps,
    shouldSlowDraw
  ]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(StyledP5Canvas, {
    key: "never",
    sketch
  }), /* @__PURE__ */ React.createElement(StyledSlider, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "vertex-number-slider"
  }, "Vertex Slider"), /* @__PURE__ */ React.createElement(Slider, {
    min: 1,
    max: 20,
    id: "vertex-number-slider",
    onChange: (value) => setVertex(value),
    value: vertex
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "vertex-number-input"
  }, "Vertex Input"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "vertex-number-input",
    min: 1,
    onChange: ({currentTarget: {value}}) => {
      setVertex(parseInt(value) || 1);
    },
    value: vertex
  }))), /* @__PURE__ */ React.createElement(StyledSlider, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "subdivision-number-slider"
  }, "Subdivision Slider"), /* @__PURE__ */ React.createElement(Slider, {
    min: 1,
    max: 1e3,
    id: "subdivision-number-slider",
    onChange: (value) => setSubdivisions(value),
    value: subdivisions
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "subdivision-number-input"
  }, "Subdivision Input"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "subdivision-number-input",
    min: 1,
    onChange: ({currentTarget: {value}}) => {
      setSubdivisions(parseInt(value) || 1);
    },
    value: subdivisions
  }))), /* @__PURE__ */ React.createElement(StyledSlider, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "points-number-slider"
  }, "Points Slider"), /* @__PURE__ */ React.createElement(Slider, {
    min: 1,
    id: "points-number-slider",
    onChange: (value) => setPoints(value),
    value: points
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "points-number-input"
  }, "Points Input"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "points-number-input",
    min: 1,
    onChange: ({currentTarget: {value}}) => {
      setPoints(parseInt(value) || 1);
    },
    value: points
  }))), /* @__PURE__ */ React.createElement(ToggleArea, null, /* @__PURE__ */ React.createElement(ToggleBox, null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "toggle-subdivisions",
    value: `${showSubdivisions}`,
    onChange: ({currentTarget: {checked}}) => {
      setShowSubdivisions(checked);
    }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "toggle-subdivisions"
  }, "Toggle Subdivisions")), /* @__PURE__ */ React.createElement(ToggleBox, null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "toggle-vertices",
    value: `${showVertices}`,
    onChange: ({currentTarget: {checked}}) => {
      setShowVertices(checked);
    }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "toggle-vertices"
  }, "Toggle Vertices")), /* @__PURE__ */ React.createElement(ToggleBox, null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "toggle-slow-draw",
    value: `${shouldSlowDraw}`,
    onChange: ({currentTarget: {checked}}) => {
      setShouldSlowDraw(checked);
    }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "toggle-slow-draw"
  }, "Toggle Drawing"))), /* @__PURE__ */ React.createElement(JumpsArea, null, /* @__PURE__ */ React.createElement(TotalJumps, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "total-jumps"
  }, "Total Jumps"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    id: "total-jumps",
    min: 1,
    onChange: ({currentTarget: {value}}) => {
      setTotalJumps(parseInt(value) || 0);
    },
    value: totalJumps
  })), [...Array(totalJumps)].map((_, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: `jump-${index}`
    }, /* @__PURE__ */ React.createElement("label", {
      htmlFor: `jump-${index}`
    }, "Jump ", index + 1), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      name: "",
      id: `jump-${index}`,
      defaultValue: 1,
      onChange: ({currentTarget: {value}}) => {
        setJumps((previousState) => {
          const newState = [...previousState];
          newState[index] = parseInt(value) || 1;
          return newState;
        });
      }
    }));
  })), /* @__PURE__ */ React.createElement(StyledWrapperDiv, null, /* @__PURE__ */ React.createElement("p", null, "List of vertices:"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, globalValues.current.matrix.map((cords, index) => {
    return `${index} - X:${cords.x.toFixed(3)}, Y:${cords.y.toFixed(3)}, 
`;
  })))));
}
export default App;
