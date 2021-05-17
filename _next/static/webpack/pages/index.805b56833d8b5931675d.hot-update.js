self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pwp.ts":
/*!********************!*\
  !*** ./src/pwp.ts ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJumpedPoints": function() { return /* binding */ getJumpedPoints; },
/* harmony export */   "getSubdivisionMatrix": function() { return /* binding */ getSubdivisionMatrix; },
/* harmony export */   "getPointsMatrix": function() { return /* binding */ getPointsMatrix; }
/* harmony export */ });
/* harmony import */ var _home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function getJumpedPoints(initialVertices) {
  for (var _len = arguments.length, jumps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    jumps[_key - 1] = arguments[_key];
  }

  if (jumps.length !== 0) {
    var lastValue = 0;

    var jumpedMatrix = (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(initialVertices.length * jumps.length)).map(function (_, index) {
      var currentJump = index % jumps.length;
      var newValue = jumps[currentJump] + lastValue;
      lastValue = newValue;
      return initialVertices[newValue % initialVertices.length];
    });

    jumpedMatrix.push(jumpedMatrix.shift());
    return jumpedMatrix;
  } else {
    return initialVertices;
  }
}
function getSubdivisionMatrix(subdivisions, matrix) {
  return matrix.map(function (_, index, passedMatrix) {
    var startY = passedMatrix[index].y;
    var endY = passedMatrix[index + 1] ? passedMatrix[index + 1].y : passedMatrix[0].y;
    var startX = passedMatrix[index].x;
    var endX = passedMatrix[index + 1] ? passedMatrix[index + 1].x : passedMatrix[0].x;
    return (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(subdivisions)).map(function (_, index) {
      var partOfSubdivision = index;
      var y = (1 - partOfSubdivision / subdivisions) * startY + partOfSubdivision / subdivisions * endY;
      var x = (1 - partOfSubdivision / subdivisions) * startX + partOfSubdivision / subdivisions * endX;
      return {
        x: x,
        y: y
      };
    });
  }).flat();
}
function getPointsMatrix(vertices, subdivisions, points, subdivisionMatrix) {
  var totalPoints = vertices * subdivisions;

  if ((arguments.length <= 4 ? 0 : arguments.length - 4) !== 0) {
    totalPoints = (arguments.length <= 4 ? 0 : arguments.length - 4) * vertices * subdivisions;
  }

  return (0,_home_liam_repos_projects_pwp_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(totalPoints)).map(function (_, index) {
    return subdivisionMatrix[index * points % totalPoints];
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B3cC50cyJdLCJuYW1lcyI6WyJnZXRKdW1wZWRQb2ludHMiLCJpbml0aWFsVmVydGljZXMiLCJqdW1wcyIsImxlbmd0aCIsImxhc3RWYWx1ZSIsImp1bXBlZE1hdHJpeCIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiY3VycmVudEp1bXAiLCJuZXdWYWx1ZSIsInB1c2giLCJzaGlmdCIsImdldFN1YmRpdmlzaW9uTWF0cml4Iiwic3ViZGl2aXNpb25zIiwibWF0cml4IiwicGFzc2VkTWF0cml4Iiwic3RhcnRZIiwieSIsImVuZFkiLCJzdGFydFgiLCJ4IiwiZW5kWCIsInBhcnRPZlN1YmRpdmlzaW9uIiwiZmxhdCIsImdldFBvaW50c01hdHJpeCIsInZlcnRpY2VzIiwicG9pbnRzIiwic3ViZGl2aXNpb25NYXRyaXgiLCJ0b3RhbFBvaW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS08sU0FBU0EsZUFBVCxDQUNMQyxlQURLLEVBR0k7QUFBQSxvQ0FETkMsS0FDTTtBQUROQSxTQUNNO0FBQUE7O0FBQ1QsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFFBQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxRQUFNQyxZQUFZLEdBQUcsa0pBQUlDLEtBQUssQ0FBQ0wsZUFBZSxDQUFDRSxNQUFoQixHQUF5QkQsS0FBSyxDQUFDQyxNQUFoQyxDQUFULEVBQWtESSxHQUFsRCxDQUNuQixVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUNaLFVBQU1DLFdBQVcsR0FBR0QsS0FBSyxHQUFHUCxLQUFLLENBQUNDLE1BQWxDO0FBQ0EsVUFBTVEsUUFBUSxHQUFHVCxLQUFLLENBQUNRLFdBQUQsQ0FBTCxHQUFxQk4sU0FBdEM7QUFFQUEsZUFBUyxHQUFHTyxRQUFaO0FBQ0EsYUFBT1YsZUFBZSxDQUFDVSxRQUFRLEdBQUdWLGVBQWUsQ0FBQ0UsTUFBNUIsQ0FBdEI7QUFDRCxLQVBrQixDQUFyQjs7QUFVQUUsZ0JBQVksQ0FBQ08sSUFBYixDQUFrQlAsWUFBWSxDQUFDUSxLQUFiLEVBQWxCO0FBQ0EsV0FBT1IsWUFBUDtBQUNELEdBZEQsTUFjTztBQUNMLFdBQU9KLGVBQVA7QUFDRDtBQUNGO0FBRU0sU0FBU2Esb0JBQVQsQ0FDTEMsWUFESyxFQUVMQyxNQUZLLEVBR2E7QUFDbEIsU0FBT0EsTUFBTSxDQUNWVCxHQURJLENBQ0EsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQVdRLFlBQVgsRUFBNEI7QUFDL0IsUUFBTUMsTUFBTSxHQUFHRCxZQUFZLENBQUNSLEtBQUQsQ0FBWixDQUFvQlUsQ0FBbkM7QUFDQSxRQUFNQyxJQUFJLEdBQUdILFlBQVksQ0FBQ1IsS0FBSyxHQUFHLENBQVQsQ0FBWixHQUNUUSxZQUFZLENBQUNSLEtBQUssR0FBRyxDQUFULENBQVosQ0FBd0JVLENBRGYsR0FFVEYsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQkUsQ0FGcEI7QUFHQSxRQUFNRSxNQUFNLEdBQUdKLFlBQVksQ0FBQ1IsS0FBRCxDQUFaLENBQW9CYSxDQUFuQztBQUNBLFFBQU1DLElBQUksR0FBR04sWUFBWSxDQUFDUixLQUFLLEdBQUcsQ0FBVCxDQUFaLEdBQ1RRLFlBQVksQ0FBQ1IsS0FBSyxHQUFHLENBQVQsQ0FBWixDQUF3QmEsQ0FEZixHQUVUTCxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCSyxDQUZwQjtBQUlBLFdBQU8sa0pBQUloQixLQUFLLENBQUNTLFlBQUQsQ0FBVCxFQUF5QlIsR0FBekIsQ0FBNkIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDaEQsVUFBTWUsaUJBQWlCLEdBQUdmLEtBQTFCO0FBQ0EsVUFBTVUsQ0FBQyxHQUNMLENBQUMsSUFBSUssaUJBQWlCLEdBQUdULFlBQXpCLElBQXlDRyxNQUF6QyxHQUNDTSxpQkFBaUIsR0FBR1QsWUFBckIsR0FBcUNLLElBRnZDO0FBSUEsVUFBTUUsQ0FBQyxHQUNMLENBQUMsSUFBSUUsaUJBQWlCLEdBQUdULFlBQXpCLElBQXlDTSxNQUF6QyxHQUNDRyxpQkFBaUIsR0FBR1QsWUFBckIsR0FBcUNRLElBRnZDO0FBSUEsYUFBTztBQUFFRCxTQUFDLEVBQURBLENBQUY7QUFBS0gsU0FBQyxFQUFEQTtBQUFMLE9BQVA7QUFDRCxLQVhNLENBQVA7QUFZRCxHQXZCSSxFQXdCSk0sSUF4QkksRUFBUDtBQXlCRDtBQUVNLFNBQVNDLGVBQVQsQ0FDTEMsUUFESyxFQUVMWixZQUZLLEVBR0xhLE1BSEssRUFJTEMsaUJBSkssRUFNYTtBQUNsQixNQUFJQyxXQUFXLEdBQUdILFFBQVEsR0FBR1osWUFBN0I7O0FBQ0EsTUFBSSx1REFBaUIsQ0FBckIsRUFBd0I7QUFDdEJlLGVBQVcsR0FBRyxxREFBZUgsUUFBZixHQUEwQlosWUFBeEM7QUFDRDs7QUFFRCxTQUFPLGtKQUFJVCxLQUFLLENBQUN3QixXQUFELENBQVQsRUFBd0J2QixHQUF4QixDQUE0QixVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUMvQyxXQUFPb0IsaUJBQWlCLENBQUVwQixLQUFLLEdBQUdtQixNQUFULEdBQW1CRSxXQUFwQixDQUF4QjtBQUNELEdBRk0sQ0FBUDtBQUdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgwNWI1NjgzM2Q4YjU5MzE2NzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgdmVydGljZXNNYXRyaXgge1xuICB4OiBudW1iZXJcbiAgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKdW1wZWRQb2ludHMoXG4gIGluaXRpYWxWZXJ0aWNlczogQ29yZHNbXSxcbiAgLi4uanVtcHM6IG51bWJlcltdXG4pOiBDb3Jkc1tdIHtcbiAgaWYgKGp1bXBzLmxlbmd0aCAhPT0gMCkge1xuICAgIGxldCBsYXN0VmFsdWUgPSAwXG4gICAgY29uc3QganVtcGVkTWF0cml4ID0gWy4uLkFycmF5KGluaXRpYWxWZXJ0aWNlcy5sZW5ndGggKiBqdW1wcy5sZW5ndGgpXS5tYXAoXG4gICAgICAoXywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEp1bXAgPSBpbmRleCAlIGp1bXBzLmxlbmd0aFxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGp1bXBzW2N1cnJlbnRKdW1wXSArIGxhc3RWYWx1ZVxuXG4gICAgICAgIGxhc3RWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIHJldHVybiBpbml0aWFsVmVydGljZXNbbmV3VmFsdWUgJSBpbml0aWFsVmVydGljZXMubGVuZ3RoXVxuICAgICAgfVxuICAgIClcblxuICAgIGp1bXBlZE1hdHJpeC5wdXNoKGp1bXBlZE1hdHJpeC5zaGlmdCgpIGFzIENvcmRzKVxuICAgIHJldHVybiBqdW1wZWRNYXRyaXhcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRpY2VzXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1YmRpdmlzaW9uTWF0cml4KFxuICBzdWJkaXZpc2lvbnM6IG51bWJlcixcbiAgbWF0cml4OiB2ZXJ0aWNlc01hdHJpeFtdXG4pOiB2ZXJ0aWNlc01hdHJpeFtdIHtcbiAgcmV0dXJuIG1hdHJpeFxuICAgIC5tYXAoKF8sIGluZGV4LCBwYXNzZWRNYXRyaXgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0WSA9IHBhc3NlZE1hdHJpeFtpbmRleF0ueVxuICAgICAgY29uc3QgZW5kWSA9IHBhc3NlZE1hdHJpeFtpbmRleCArIDFdXG4gICAgICAgID8gcGFzc2VkTWF0cml4W2luZGV4ICsgMV0ueVxuICAgICAgICA6IHBhc3NlZE1hdHJpeFswXS55XG4gICAgICBjb25zdCBzdGFydFggPSBwYXNzZWRNYXRyaXhbaW5kZXhdLnhcbiAgICAgIGNvbnN0IGVuZFggPSBwYXNzZWRNYXRyaXhbaW5kZXggKyAxXVxuICAgICAgICA/IHBhc3NlZE1hdHJpeFtpbmRleCArIDFdLnhcbiAgICAgICAgOiBwYXNzZWRNYXRyaXhbMF0ueFxuXG4gICAgICByZXR1cm4gWy4uLkFycmF5KHN1YmRpdmlzaW9ucyldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcGFydE9mU3ViZGl2aXNpb24gPSBpbmRleFxuICAgICAgICBjb25zdCB5ID1cbiAgICAgICAgICAoMSAtIHBhcnRPZlN1YmRpdmlzaW9uIC8gc3ViZGl2aXNpb25zKSAqIHN0YXJ0WSArXG4gICAgICAgICAgKHBhcnRPZlN1YmRpdmlzaW9uIC8gc3ViZGl2aXNpb25zKSAqIGVuZFlcblxuICAgICAgICBjb25zdCB4ID1cbiAgICAgICAgICAoMSAtIHBhcnRPZlN1YmRpdmlzaW9uIC8gc3ViZGl2aXNpb25zKSAqIHN0YXJ0WCArXG4gICAgICAgICAgKHBhcnRPZlN1YmRpdmlzaW9uIC8gc3ViZGl2aXNpb25zKSAqIGVuZFhcblxuICAgICAgICByZXR1cm4geyB4LCB5IH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICAuZmxhdCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludHNNYXRyaXgoXG4gIHZlcnRpY2VzOiBudW1iZXIsXG4gIHN1YmRpdmlzaW9uczogbnVtYmVyLFxuICBwb2ludHM6IG51bWJlcixcbiAgc3ViZGl2aXNpb25NYXRyaXg6IHZlcnRpY2VzTWF0cml4W10sXG4gIC4uLmp1bXBzOiBudW1iZXJbXVxuKTogdmVydGljZXNNYXRyaXhbXSB7XG4gIGxldCB0b3RhbFBvaW50cyA9IHZlcnRpY2VzICogc3ViZGl2aXNpb25zXG4gIGlmIChqdW1wcy5sZW5ndGggIT09IDApIHtcbiAgICB0b3RhbFBvaW50cyA9IGp1bXBzLmxlbmd0aCAqIHZlcnRpY2VzICogc3ViZGl2aXNpb25zXG4gIH1cblxuICByZXR1cm4gWy4uLkFycmF5KHRvdGFsUG9pbnRzKV0ubWFwKChfLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBzdWJkaXZpc2lvbk1hdHJpeFsoaW5kZXggKiBwb2ludHMpICUgdG90YWxQb2ludHNdXG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9