self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/calculations/getNGonVertices/getNGonVertices.ts":
/*!*************************************************************!*\
  !*** ./src/calculations/getNGonVertices/getNGonVertices.ts ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNGonVertices": function() { return /* binding */ getNGonVertices; }
/* harmony export */ });
/* harmony import */ var _home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function getNGonVertices(vertices) {
  var twoPi = Math.PI * 2;
  var angleBetweenPoints = twoPi / vertices;
  var currentAngle = -0.5;
  var allAngles = [];

  var initialVertices = (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(vertices)).map(function () {
    allAngles.push(currentAngle);
    currentAngle += angleBetweenPoints;
    var cos = Math.cos(currentAngle);
    var sin = Math.sin(currentAngle);
    var y = cos;
    var x = sin;
    return {
      x: x,
      y: y
    };
  });

  console.log(allAngles);
  return initialVertices;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbGN1bGF0aW9ucy9nZXROR29uVmVydGljZXMvZ2V0TkdvblZlcnRpY2VzLnRzIl0sIm5hbWVzIjpbImdldE5Hb25WZXJ0aWNlcyIsInZlcnRpY2VzIiwidHdvUGkiLCJNYXRoIiwiUEkiLCJhbmdsZUJldHdlZW5Qb2ludHMiLCJjdXJyZW50QW5nbGUiLCJhbGxBbmdsZXMiLCJpbml0aWFsVmVydGljZXMiLCJBcnJheSIsIm1hcCIsInB1c2giLCJjb3MiLCJzaW4iLCJ5IiwieCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxRQUF6QixFQUE2RDtBQUNsRSxNQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdILEtBQUssR0FBR0QsUUFBbkM7QUFFQSxNQUFJSyxZQUFZLEdBQUcsQ0FBQyxHQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsa0pBQUlDLEtBQUssQ0FBQ1IsUUFBRCxDQUFULEVBQXFCUyxHQUFyQixDQUF5QixZQUFNO0FBQ3JESCxhQUFTLENBQUNJLElBQVYsQ0FBZUwsWUFBZjtBQUNBQSxnQkFBWSxJQUFJRCxrQkFBaEI7QUFDQSxRQUFNTyxHQUFHLEdBQUdULElBQUksQ0FBQ1MsR0FBTCxDQUFTTixZQUFULENBQVo7QUFDQSxRQUFNTyxHQUFHLEdBQUdWLElBQUksQ0FBQ1UsR0FBTCxDQUFTUCxZQUFULENBQVo7QUFDQSxRQUFNUSxDQUFDLEdBQUdGLEdBQVY7QUFDQSxRQUFNRyxDQUFDLEdBQUdGLEdBQVY7QUFFQSxXQUFPO0FBQUVFLE9BQUMsRUFBREEsQ0FBRjtBQUFLRCxPQUFDLEVBQURBO0FBQUwsS0FBUDtBQUNELEdBVHVCLENBQXhCOztBQVVBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsU0FBWjtBQUNBLFNBQU9DLGVBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MGUwOTdiMWUzMTliN2YyNTY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBWZXJ0aWNlc01hdHJpeCB9IGZyb20gXCJDYWxjdWxhdGlvbnMvdHlwZXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TkdvblZlcnRpY2VzKHZlcnRpY2VzOiBudW1iZXIpOiBWZXJ0aWNlc01hdHJpeFtdIHtcbiAgY29uc3QgdHdvUGkgPSBNYXRoLlBJICogMlxuICBjb25zdCBhbmdsZUJldHdlZW5Qb2ludHMgPSB0d29QaSAvIHZlcnRpY2VzXG5cbiAgbGV0IGN1cnJlbnRBbmdsZSA9IC0wLjVcbiAgY29uc3QgYWxsQW5nbGVzID0gW10gYXMgbnVtYmVyW11cbiAgY29uc3QgaW5pdGlhbFZlcnRpY2VzID0gWy4uLkFycmF5KHZlcnRpY2VzKV0ubWFwKCgpID0+IHtcbiAgICBhbGxBbmdsZXMucHVzaChjdXJyZW50QW5nbGUpXG4gICAgY3VycmVudEFuZ2xlICs9IGFuZ2xlQmV0d2VlblBvaW50c1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGN1cnJlbnRBbmdsZSlcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihjdXJyZW50QW5nbGUpXG4gICAgY29uc3QgeSA9IGNvc1xuICAgIGNvbnN0IHggPSBzaW5cblxuICAgIHJldHVybiB7IHgsIHkgfVxuICB9KVxuICBjb25zb2xlLmxvZyhhbGxBbmdsZXMpXG4gIHJldHVybiBpbml0aWFsVmVydGljZXNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=