import React, {useState, useEffect} from "../snowpack/pkg/react.js";
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
  useEffect(() => {
    GlobalValues.vertices = vertex;
    GlobalValues.subdivisions = subdivisions;
    GlobalValues.points = points;
  }, [vertex, subdivisions, points]);
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
  }), /* @__PURE__ */ React.createElement("h1", null, "Notes"), /* @__PURE__ */ React.createElement("p", null, "Purple Dots are all the subdivisions, Green dots are all the vertices."), /* @__PURE__ */ React.createElement("p", null, "These are the currently preset vertices:"), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, `
{ x: 0, y: 0 },
{ x: 0, y: 1 },
{ x: 1, y: 1 },
{ x: 1, y: 0 },
{ x: 0.25, y: 0.25 },
{ x: 0.25, y: 0.75 },
{ x: 0.75, y: 0.75 },
{ x: 0.75, y: 0.25 },`))));
}
export default App;
