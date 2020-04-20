webpackHotUpdate("static/development/pages/cast/person/[id].js",{

/***/ "./pages/cast/person/[id].js":
/*!***********************************!*\
  !*** ./pages/cast/person/[id].js ***!
  \***********************************/
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/person/[id].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Person = function Person(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3059614381" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3059614381" + " " + "personInfo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, props.personData.name), __jsx("div", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, " ", props.personData.birthday ? __jsx("h3", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 52
    }
  }, "Born: ", props.personData.birthday, ", ", props.personData.country.name) : __jsx("div", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 130
    }
  }), " "), __jsx("div", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, props.personData.deathday ? __jsx("h3", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 51
    }
  }, "Dead: ", props.personData.deathday) : __jsx("div", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "jsx-3059614381" + " " + "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, props.personData.image ? __jsx("img", {
    src: props.personData.image.original,
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 43
    }
  }) : __jsx("div", {
    className: "jsx-3059614381",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 91
    }
  })), __jsx("ul", {
    className: "jsx-3059614381" + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.actorData.map(function (show) {
    return __jsx("li", {
      key: show._embedded.show.id,
      className: "jsx-3059614381",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "jsx-3059614381" + " " + "showInfo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "jsx-3059614381",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, show._embedded.show.name, " (", show._embedded.show.network ? show._embedded.show.network.name : show._embedded.show.webChannel.name, ")"), __jsx("h4", {
      className: "jsx-3059614381",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, show._embedded.show.genres.join(" / ")), __jsx("p", {
      className: "jsx-3059614381",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, show._embedded.show.summary.substring(3, show._embedded.show.summary.length - 4).replace(/<[^>]*>?/gm, ''))), __jsx("div", {
      className: "jsx-3059614381" + " " + "showImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, show._embedded.show.image ? __jsx("img", {
      src: show._embedded.show.image.original,
      className: "jsx-3059614381",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 79
      }
    }) : __jsx("div", {
      className: "jsx-3059614381",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 130
      }
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3059614381",
    __self: _this
  }, ".container.jsx-3059614381{padding-top:25px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:35vh 40vh 20vh 19vh;margin-left:6%;margin-right:6%;}.personInfo.jsx-3059614381{grid-column-start:1;grid-column-end:3;grid-row-start:1;grid-row-end:2;padding:10%;width:40vw;}.img.jsx-3059614381{grid-column-start:3;grid-column-end:5;grid-row-start:1;grid-row-end:2;justify-self:right;margin-top:20px;}.img.jsx-3059614381 img.jsx-3059614381{object-fit:cover;max-height:100%;}.list.jsx-3059614381{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:5;}li.jsx-3059614381{list-style-type:none;padding-left:2vw;border:1px solid #DDD;}.showImg.jsx-3059614381 img.jsx-3059614381{object-fit:cover;float:right;}.showInfo.jsx-3059614381{float:left;width:60vw;}@media (max-width:800px){.characterImg.jsx-3059614381 img.jsx-3059614381{object-fit:cover;max-height:5vh;}.container.jsx-3059614381{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:18vh 25vh 20vh 19vh;margin-left:9%;margin-right:9%;font-size:7px;}.img.jsx-3059614381{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2;}.list.jsx-3059614381{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:5;margin-left:-9vw;margin-right:-1vw;}li.jsx-3059614381{list-style-type:none;height:30vh;text-align:left;margin-bottom:25px;}.showInfo.jsx-3059614381{width:20vh;}.showImg.jsx-3059614381 img.jsx-3059614381{max-height:30vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9tYWQtbWVuLWJsb2cvcGFnZXMvY2FzdC9wZXJzb24vW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBRzhCLEFBVUcsQUFTQSxBQVFILEFBSUcsQUFNQyxBQU1KLEFBS04sQUFLVSxBQUlBLEFBV0csQUFPQSxBQVFDLEFBTzFCLEFBRXFCLFdBMUN6QixBQXdDSyxLQUdBLENBNUZ3QixBQTJCVCxBQWlCSixBQVNPLEFBSVUsR0EvQ1YsQUFTSSxBQVlKLEFBcUNJLEFBT0EsQ0FyQ0QsQUE2Q0wsQ0FsQ3BCLE9BSkosR0FTSSxDQTFCSixBQXdENEIsS0F6RUgsQUFTSSxBQVlKLEFBT1MsQUE4QkwsQUFPQSxXQVNFLE1BekVSLEFBU0ksQUFZSixBQXFDSSxBQU9BLEtBckN2QixRQThDSSxFQXpFWSxBQVNXLEFBWTNCLEFBc0NJLEFBTXFCLFlBaEVWLEtBaUVXLEVBeERGLElBUHZCLFlBUUQsQUF3REksZUEvRXNCLEFBeURJLCtFQXhEYixBQXlESSxhQXhEMEIsQUF5REksMENBeERSLEFBeURJLHVDQXhENUIsQUF5REksZUF4REgsQUF5REksZ0JBeER2QixBQXlEcUIsY0FDakIiLCJmaWxlIjoiL1VzZXJzL2FuZHJlc21hcnRpbi9Eb2N1bWVudHMvQ29kaW5nL21hZC1tZW4tYmxvZy9wYWdlcy9jYXN0L3BlcnNvbi9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgUGVyc29uID0gcHJvcHMgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uSW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMT57cHJvcHMucGVyc29uRGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj4ge3Byb3BzLnBlcnNvbkRhdGEuYmlydGhkYXkgPyA8aDM+Qm9ybjoge3Byb3BzLnBlcnNvbkRhdGEuYmlydGhkYXl9LCB7cHJvcHMucGVyc29uRGF0YS5jb3VudHJ5Lm5hbWV9PC9oMz4gOiA8ZGl2IC8+fSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5wZXJzb25EYXRhLmRlYXRoZGF5ID8gPGgzPkRlYWQ6IHtwcm9wcy5wZXJzb25EYXRhLmRlYXRoZGF5fTwvaDM+IDogPGRpdiAvPn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLnBlcnNvbkRhdGEuaW1hZ2UgPyA8aW1nIHNyYz17cHJvcHMucGVyc29uRGF0YS5pbWFnZS5vcmlnaW5hbH0gLz4gOiA8ZGl2IC8+fVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYWN0b3JEYXRhLm1hcChzaG93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5fZW1iZWRkZWQuc2hvdy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntzaG93Ll9lbWJlZGRlZC5zaG93Lm5hbWV9ICh7c2hvdy5fZW1iZWRkZWQuc2hvdy5uZXR3b3JrID8gc2hvdy5fZW1iZWRkZWQuc2hvdy5uZXR3b3JrLm5hbWUgOiBzaG93Ll9lbWJlZGRlZC5zaG93LndlYkNoYW5uZWwubmFtZX0pPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57c2hvdy5fZW1iZWRkZWQuc2hvdy5nZW5yZXMuam9pbihcIiAvIFwiKX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzaG93Ll9lbWJlZGRlZC5zaG93LnN1bW1hcnkuc3Vic3RyaW5nKDMsIHNob3cuX2VtYmVkZGVkLnNob3cuc3VtbWFyeS5sZW5ndGggLSA0KS5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93SW1nXCI+e3Nob3cuX2VtYmVkZGVkLnNob3cuaW1hZ2UgPyA8aW1nIHNyYz17c2hvdy5fZW1iZWRkZWQuc2hvdy5pbWFnZS5vcmlnaW5hbH0gLz4gOiA8ZGl2IC8+fTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7ICAgXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDIwdncgMjB2dyAyMHZ3IDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzV2aCA0MHZoIDIwdmggMTl2aDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2JTsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlOyAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgLnBlcnNvbkluZm8ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuXG4gICAgICAgICB9XG4gICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWcgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlOyAgICAgICAgIFxuICAgIH1cbiAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDU7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAydnc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICAgICAgfVxuICAgICAgICAuc2hvd0ltZyBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAgICAgICAgZmxvYXQ6IHJpZ2h0OyAgICAgIFxuICAgIH1cbiAgICAgICAgLnNob3dJbmZvIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDYwdndcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xuICAgICAgICAgICAgLmNoYXJhY3RlckltZyBpbWcge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNXZoOyAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7ICAgXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgICAgIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDIwdncgMjB2dyAyMHZ3IDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4dmggMjV2aCAyMHZoIDE5dmg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDklOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDklO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4OyAgICAgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogNTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTl2dzsgICAgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNob3dJbmZvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjB2aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNob3dJbWcgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMHZoOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cblBlcnNvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgICBjb25zdCBbcGVyc29uRGF0YSwgYWN0b3JEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vcGVvcGxlLyR7aWR9YCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vcGVvcGxlLyR7aWR9L2Nhc3RjcmVkaXRzP2VtYmVkPXNob3dgKS50aGVuKHIgPT4gci5qc29uKCkpLFxuXG4gICAgXSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBlcnNvbkRhdGEsIGFjdG9yRGF0YSxcblxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJzb247Il19 */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/person/[id].js */"));
};

Person.getInitialProps = function _callee(context) {
  var id, _await$Promise$all, _await$Promise$all2, personData, actorData;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/people/".concat(id)).then(function (r) {
            return r.json();
          }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/people/".concat(id, "/castcredits?embed=show")).then(function (r) {
            return r.json();
          })]));

        case 3:
          _await$Promise$all = _context.sent;
          _await$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$Promise$all, 2);
          personData = _await$Promise$all2[0];
          actorData = _await$Promise$all2[1];
          return _context.abrupt("return", {
            personData: personData,
            actorData: actorData
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ })

})
//# sourceMappingURL=[id].js.46ad444f62fba3541c5f.hot-update.js.map