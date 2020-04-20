webpackHotUpdate("static/development/pages/[id].js",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/mad-men-blog/pages/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Blog = function Blog(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3640931458" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-3640931458" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.data.name, "'s unofficial Blog"), __jsx("div", {
    className: "jsx-3640931458" + " " + "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, props.data.summary.replace(/<[^>]*>?/gm, '')), __jsx("p", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, props.data.genres.length > 0 ? "Genre: " + props.data.genres.join(" / ") : __jsx("noimg", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 96
    }
  })), __jsx("p", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Network: ", props.data.network ? props.data.network.name + " - " + props.data.network.country.name : props.data.webChannel.name), __jsx("p", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Status: ", props.data.status), __jsx("br", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3640931458" + " " + "lista",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-3640931458" + " " + "episodes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/seasons/${props.data.id}",
    as: "/seasons/".concat(props.data.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "Episodes"))), __jsx("li", {
    className: "jsx-3640931458" + " " + "cast",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cast/${props.data.id}",
    as: "/cast/".concat(props.data.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, "Cast"))), __jsx("li", {
    className: "jsx-3640931458" + " " + "crew",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/crew/${props.data.id}",
    as: "/crew/".concat(props.data.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, "Crew")))))), __jsx("div", {
    className: "jsx-3640931458" + " " + "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, props.data.image ? __jsx("img", {
    src: props.data.image.original,
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 54
    }
  }) : __jsx("div", {
    className: "jsx-3640931458",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 96
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3640931458",
    __self: _this
  }, ".summary.jsx-3640931458{grid-column-start:1;grid-column-end:3;grid-row-start:2;grid-row-end:3;padding:10px 15px 10px 20px;}.list.jsx-3640931458{grid-column-start:1;grid-column-end:3;grid-row-start:3;grid-row-end:5;}.img.jsx-3640931458{grid-column-start:3;grid-column-end:5;grid-row-start:2;grid-row-end:5;justify-self:center;margin-top:20px;}.img.jsx-3640931458 img.jsx-3640931458{object-fit:cover;max-height:100%;}.title.jsx-3640931458{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0px;}.container.jsx-3640931458{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 30vw;grid-template-rows:10vh 45vh 20vh 19vh;margin-left:8%;margin-right:6%;}ul.jsx-3640931458{margin:0;padding:0;}li.jsx-3640931458{list-style-type:none;height:13vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.episodes.jsx-3640931458{background-color:#F4F4F4;}.cast.jsx-3640931458{background-color:white;}.crew.jsx-3640931458{background-color:#F4F4F4;}@media (max-width:800px){Layout.jsx-3640931458{font-size:10px;}.container.jsx-3640931458{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:8vh 42vh 20vh 19vh;margin-left:9%;margin-right:9%;font-size:9px;}.img.jsx-3640931458{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:3;justify-self:center;}.summary.jsx-3640931458{grid-column-start:1;grid-column-end:5;grid-row-start:3;grid-row-end:4;}.list.jsx-3640931458{grid-column-start:1;grid-column-end:5;grid-row-start:4;grid-row-end:5;}li.jsx-3640931458{list-style-type:none;height:6vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9tYWQtbWVuLWJsb2cvcGFnZXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q29CLEFBSXFDLEFBT0EsQUFNQSxBQVFDLEFBS0QsQUFVQyxBQVVaLEFBSVksQUFRSSxBQUdGLEFBR0UsQUFJTixBQUdFLEFBV0csQUFPQSxBQU1BLEFBTUMsU0F0RGYsTUFzQlYsRUEvQ21CLEFBZVMsQUFtQ0EsRUF4QmhDLENBL0NzQixBQU9BLEFBTUEsQUFhQSxBQXdESSxBQU9BLEFBTUEsQ0E3Q1YsQUFtREcsRUF4Q25CLEVBSEEsQUFNQSxPQXNDcUIsQ0EvRXJCLEFBNEJpQixLQWxESSxBQU9BLEFBTUEsQUFhQSxBQXdESSxBQU9BLEFBTUEsaUJBOUZOLEFBT0EsQUFNQSxBQWFBLEFBd0RJLEFBT0EsQUFNQSxlQTlGUyxBQU9oQyxBQU13QixBQWFQLEFBd0RXLEFBT3hCLEFBTUEsb0JBakZnQixBQXFFaEIsUUFsRkosUUFjQSxBQXFGMkIsQ0FuREosYUFmTyxBQW1DQSx3QkExQ1AsdURBUUYsQUFtQ0EsQUErQlUsQ0FuREosWUFkd0IsQUFtQ0EseUJBM0N4QixpQkFTb0IsQUFtQ0Qsc0NBQ3ZCLENBbkNBLEtBZ0VuQixDQWxESixRQXNCd0IsQ0FuQ0EsZUFvQ0YsQ0FuQ2pCLFlBWGlCLENBK0NqQixpQkE5Q0wiLCJmaWxlIjoiL1VzZXJzL2FuZHJlc21hcnRpbi9Eb2N1bWVudHMvQ29kaW5nL21hZC1tZW4tYmxvZy9wYWdlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5cbmNvbnN0IEJsb2cgPSBwcm9wcyA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5kYXRhLm5hbWV9J3MgdW5vZmZpY2lhbCBCbG9nPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuXG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmRhdGEuc3VtbWFyeS5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57cHJvcHMuZGF0YS5nZW5yZXMubGVuZ3RoID4gMCA/IFwiR2VucmU6IFwiICsgcHJvcHMuZGF0YS5nZW5yZXMuam9pbihcIiAvIFwiKSA6IDxub2ltZyAvPn08L3A+XG4gICAgICAgICAgICAgICAgPHA+TmV0d29yazoge3Byb3BzLmRhdGEubmV0d29yayA/IHByb3BzLmRhdGEubmV0d29yay5uYW1lICsgXCIgLSBcIiArIHByb3BzLmRhdGEubmV0d29yay5jb3VudHJ5Lm5hbWUgOiBwcm9wcy5kYXRhLndlYkNoYW5uZWwubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+U3RhdHVzOiB7cHJvcHMuZGF0YS5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJlcGlzb2Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2Vhc29ucy8ke3Byb3BzLmRhdGEuaWR9XCIgYXM9e2Avc2Vhc29ucy8ke3Byb3BzLmRhdGEuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVwaXNvZGVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FzdC8ke3Byb3BzLmRhdGEuaWR9XCIgYXM9e2AvY2FzdC8ke3Byb3BzLmRhdGEuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhc3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Jld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3Jldy8ke3Byb3BzLmRhdGEuaWR9XCIgYXM9e2AvY3Jldy8ke3Byb3BzLmRhdGEuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNyZXc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj57cHJvcHMuZGF0YS5pbWFnZSA/IDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdW1tYXJ5IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogNTsgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7ICAgXG4gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDsgICBcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgICAgIFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgMjB2dyAyMHZ3IDMwdncgO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNDV2aCAyMHZoIDE5dmg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4JTsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3ZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVwaXNvZGVzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhc3Qge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNyZXcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xuICAgICAgICAgICAgICAgIExheW91dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7ICAgXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDIwdncgMjB2dyAyMHZ3IDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggNDJ2aCAyMHZoIDE5dmg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5JTsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOSU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4OyAgICAgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3VtbWFyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogNTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNnZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3NpbmdsZXNlYXJjaC9zaG93cz9xPSR7aWR9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1xuIl19 */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/mad-men-blog/pages/[id].js */"));
};

Blog.getInitialProps = function _callee(context) {
  var id, res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.tvmaze.com/singlesearch/shows?q=".concat(id)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          console.log(id);
          return _context.abrupt("return", {
            data: data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=[id].js.53b857e9b3fdbda1bff6.hot-update.js.map