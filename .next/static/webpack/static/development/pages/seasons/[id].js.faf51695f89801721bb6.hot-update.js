webpackHotUpdate("static/development/pages/seasons/[id].js",{

/***/ "./pages/seasons/[id].js":
/*!*******************************!*\
  !*** ./pages/seasons/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/mad-men-blog/pages/seasons/[id].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Episodes = function Episodes(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1146628728" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1146628728" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, props.show.name, "'s Unofficial Blog"), __jsx("div", {
    className: "jsx-1146628728" + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1146628728",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "All seasons!"), __jsx("ul", {
    className: "jsx-1146628728",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, props.seasons.map(function (season) {
    return __jsx("li", {
      key: season.id,
      className: "jsx-1146628728",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "jsx-1146628728",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 29
      }
    }, season.premiereDate ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/season/[id]",
      as: "/season/".concat(season.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 56
      }
    }, __jsx("a", {
      className: "jsx-1146628728",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 37
      }
    }, "Season ", season.number, " - ", season.premiereDate, " / ", season.endDate, " ")) : __jsx("p", {
      className: "jsx-1146628728",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 37
      }
    }, "Season ", season.number)));
  }))), __jsx("div", {
    className: "jsx-1146628728" + " " + "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, props.show.image ? __jsx("img", {
    src: props.show.image.original,
    className: "jsx-1146628728",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 54
    }
  }) : __jsx("noimg", {
    className: "jsx-1146628728",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 96
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1146628728",
    __self: _this
  }, ".title.jsx-1146628728{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0px;}ul.jsx-1146628728{border:1px solid #DDD;}.list.jsx-1146628728{grid-column-start:1;grid-column-end:3;grid-row-start:2;grid-row-end:5;margin:0;padding:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}li.jsx-1146628728{list-style-type:none;height:13vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img.jsx-1146628728{grid-column-start:3;grid-column-end:5;grid-row-start:2;grid-row-end:5;justify-self:center;margin-top:20px;}.img.jsx-1146628728 img.jsx-1146628728{object-fit:cover;max-height:100%;}.container.jsx-1146628728{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:10vh 40vh 20vh 19vh;margin-left:11%;margin-right:6%;}@media (max-width:800px){Layout.jsx-1146628728{font-size:10px;}.container.jsx-1146628728{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:8vh 35vh 20vh 19vh;margin-left:9%;margin-right:9%;font-size:9px;}.img.jsx-1146628728{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:3;justify-self:center;}.summary.jsx-1146628728{grid-column-start:1;grid-column-end:5;grid-row-start:3;grid-row-end:4;}.list.jsx-1146628728{grid-column-start:1;grid-column-end:5;grid-row-start:3;grid-row-end:5;padding-top:5vh;}li.jsx-1146628728{list-style-type:none;height:6vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:-7vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9tYWQtbWVuLWJsb2cvcGFnZXMvc2Vhc29ucy9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHaUMsQUFVRSxBQUdGLEFBV0MsQUFPRCxBQVFILEFBSUEsQUFXRSxBQUdFLEFBV0csQUFPQSxBQU1BLEFBT0MsZUFqQ3pCLEVBZmUsQUFJUyxBQWNJLEdBekRWLEFBYUEsQUFrQkksQUFxQ0EsQUFPQSxBQU1BLENBekROLEFBZ0VELENBOUVuQixVQStFcUIsQ0FoRUEsQUFlekIsS0F2Q3lCLEFBYUEsQUFrQkksQUFxQ0EsQUFPQSxBQU1BLGlCQWhGTixBQWFBLEFBa0JJLEFBcUNBLEFBT0EsQUFNQSxlQWhGTixBQWFKLEFBa0JlLEFBcUNBLEFBT3hCLEFBTW9CLFNBbkVOLE9Bb0VkLEdBbkV1QixDQWlCSCxBQXFDcEIsZ0JBcENKLEFBc0QyQixDQWhFQSxhQWtCRCxBQWNJLHdCQXREUCxzQ0FlUSxpQkEwQmQsQUFjSSxBQWdDVSxDQWhFQSxZQW1CZ0IsQUFjSSx5QkF2RHhCLGlCQTBDZ0IsQUFjRywyQkF6Q3BCLFdBMENILENBZEgsS0E0Q0ssQ0F2RXpCLEFBT0EsUUFtQ3dCLEVBZEosTUE0Q2hCLFFBN0JrQixFQWRyQixXQTVDcUIsQ0EyRGpCLGlCQTFETCIsImZpbGUiOiIvVXNlcnMvYW5kcmVzbWFydGluL0RvY3VtZW50cy9Db2RpbmcvbWFkLW1lbi1ibG9nL3BhZ2VzL3NlYXNvbnMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IEVwaXNvZGVzID0gcHJvcHMgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuc2hvdy5uYW1lfSdzIFVub2ZmaWNpYWwgQmxvZzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWxsIHNlYXNvbnMhPC9oMj5cbiAgICAgICAgICAgICAgICA8dWw+XG5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNlYXNvbnMubWFwKHNlYXNvbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzZWFzb24uaWR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vhc29uLnByZW1pZXJlRGF0ZSA/IDxMaW5rIGhyZWY9XCIvc2Vhc29uL1tpZF1cIiBhcz17YC9zZWFzb24vJHtzZWFzb24uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWFzb24ge3NlYXNvbi5udW1iZXJ9IC0ge3NlYXNvbi5wcmVtaWVyZURhdGV9IC8ge3NlYXNvbi5lbmREYXRlfSA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2Vhc29uIHtzZWFzb24ubnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPntwcm9wcy5zaG93LmltYWdlID8gPGltZyBzcmM9e3Byb3BzLnNob3cuaW1hZ2Uub3JpZ2luYWx9IC8+IDogPG5vaW1nIC8+fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTN2aDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7ICAgICAgICAgXG4gICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoOyAgIFxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgICAgIFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyAyMHZ3IDIwdncgMjB2dyA7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNDB2aCAyMHZoIDE5dmg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTElOyBcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNiU7ICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xuICAgICAgICAgICAgTGF5b3V0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7ICAgXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgICAgIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDIwdncgMjB2dyAyMHZ3IDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAzNXZoIDIwdmggMTl2aDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOSU7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOSU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7ICAgICBcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdW1tYXJ5IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDU7ICAgIFxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1dmg7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3Z3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgIDwvTGF5b3V0PlxuKTtcblxuRXBpc29kZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgY29uc3QgW3Nob3csIHNlYXNvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9L3NlYXNvbnNgKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgIF0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93LFxuICAgICAgICBzZWFzb25zOiBzZWFzb25zLm1hcChlbnRyeSA9PiBlbnRyeSlcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZXMiXX0= */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/mad-men-blog/pages/seasons/[id].js */"));
};

Episodes.getInitialProps = function _callee(context) {
  var id, _await$Promise$all, _await$Promise$all2, show, seasons;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.tvmaze.com/shows/".concat(id)).then(function (r) {
            return r.json();
          }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.tvmaze.com/shows/".concat(id, "/seasons")).then(function (r) {
            return r.json();
          })]));

        case 3:
          _await$Promise$all = _context.sent;
          _await$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$Promise$all, 2);
          show = _await$Promise$all2[0];
          seasons = _await$Promise$all2[1];
          return _context.abrupt("return", {
            show: show,
            seasons: seasons.map(function (entry) {
              return entry;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Episodes);

/***/ })

})
//# sourceMappingURL=[id].js.faf51695f89801721bb6.hot-update.js.map