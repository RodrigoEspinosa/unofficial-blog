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



var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/person/[id].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Person = function Person(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-596026445" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-596026445" + " " + "personInfo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.personData.name), __jsx("div", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, " ", props.personData.birthday ? __jsx("h3", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 52
    }
  }, "Born: ", props.personData.birthday, ", ", props.personData.country.name) : __jsx("div", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 130
    }
  }), " "), __jsx("div", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, props.personData.deathday ? __jsx("h3", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 51
    }
  }, "Dead: ", props.personData.deathday) : __jsx("div", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "jsx-596026445" + " " + "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.personData.image ? __jsx("img", {
    src: props.personData.image.original,
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 43
    }
  }) : __jsx("div", {
    className: "jsx-596026445",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 91
    }
  })), __jsx("ul", {
    className: "jsx-596026445" + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, props.actorData.map(function (show) {
    return __jsx("li", {
      key: show._embedded.show.id,
      className: "jsx-596026445",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "jsx-596026445" + " " + "showInfo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "jsx-596026445",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, show._embedded.show.name, " (", show._embedded.show.network ? show._embedded.show.network.name : show._embedded.show.webChannel.name, ")"), __jsx("h4", {
      className: "jsx-596026445",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, show._embedded.show.genres.join(" / ")), __jsx("p", {
      className: "jsx-596026445",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, show._embedded.show.summary.substring(3, show._embedded.show.summary.length - 4).replace(/<[^>]*>?/gm, ''))), __jsx("div", {
      className: "jsx-596026445" + " " + "showImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, show._embedded.show.image ? __jsx("img", {
      src: show._embedded.show.image.original,
      className: "jsx-596026445",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 79
      }
    }) : __jsx("div", {
      className: "jsx-596026445",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 130
      }
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "596026445",
    __self: _this
  }, ".container.jsx-596026445{padding-top:25px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:35vh 40vh 20vh 19vh;margin-left:6%;margin-right:6%;}.personInfo.jsx-596026445{grid-column-start:1;grid-column-end:3;grid-row-start:1;grid-row-end:2;padding:10%;width:40vw;}.img.jsx-596026445{grid-column-start:3;grid-column-end:5;grid-row-start:1;grid-row-end:2;justify-self:right;margin-top:20px;}.img.jsx-596026445 img.jsx-596026445{object-fit:cover;max-height:100%;}.list.jsx-596026445{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:5;}li.jsx-596026445{list-style-type:none;height:50vh;padding-left:2vw;border:1px solid #DDD;}.showImg.jsx-596026445 img.jsx-596026445{object-fit:cover;max-height:50vh;float:right;}.showInfo.jsx-596026445{float:left;width:55vw;}@media (max-width:800px){.characterImg.jsx-596026445 img.jsx-596026445{object-fit:cover;max-height:5vh;}.container.jsx-596026445{padding-top:15px;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;display:grid;grid-template-columns:20vw 20vw 20vw 20vw;grid-template-rows:18vh 25vh 20vh 19vh;margin-left:9%;margin-right:9%;font-size:7px;}.img.jsx-596026445{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2;}.list.jsx-596026445{grid-column-start:1;grid-column-end:5;grid-row-start:2;grid-row-end:5;margin-left:-9vw;margin-right:-1vw;}li.jsx-596026445{list-style-type:none;height:30vh;text-align:left;margin-bottom:25px;}.showInfo.jsx-596026445{width:22vh;}.showImg.jsx-596026445 img.jsx-596026445{max-height:30vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9tYWQtbWVuLWJsb2cvcGFnZXMvY2FzdC9wZXJzb24vW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ29CLEFBRzhCLEFBVUcsQUFRQSxBQVFILEFBSUcsQUFNQyxBQU9KLEFBS04sQUFLVSxBQUlBLEFBV0csQUFPQSxBQVFDLEFBTzFCLEFBRXFCLFdBMUN6QixBQXdDSyxLQUdBLENBNUZ3QixBQTBCVCxBQWlCQSxBQVVHLEFBSVUsR0EvQ1YsQUFRSSxBQVlKLEFBc0NJLEFBT0EsQ0F2Q1YsQUErQ0ksQ0FsQ3BCLFVBS0EsQ0EzQkosQUFVNkIsQUFPVixBQXdDUyxLQXpFSCxBQVFJLEFBWUosQUFzQ0ksQUFPQSxPQS9CN0IsSUF3QytCLENBL0NHLEtBMUJYLEFBUUksQUFZSixBQXNDSSxBQU9BLGFBU25CLEVBekVZLEFBUVcsQUFZM0IsQUF1Q0ksQUFNcUIsRUF0Q3pCLFVBMUJlLEtBaUVXLEVBekRGLElBUHZCLFlBUUQsQUF5REksZUEvRXNCLEFBeURJLCtFQXhEYixBQXlESSxhQXhEMEIsQUF5REksMENBeERSLEFBeURJLHVDQXhENUIsQUF5REksZUF4REgsQUF5REksZ0JBeER2QixBQXlEcUIsY0FDakIiLCJmaWxlIjoiL1VzZXJzL2FuZHJlc21hcnRpbi9Eb2N1bWVudHMvQ29kaW5nL21hZC1tZW4tYmxvZy9wYWdlcy9jYXN0L3BlcnNvbi9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQZXJzb24gPSBwcm9wcyA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJzb25JbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy5wZXJzb25EYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PiB7cHJvcHMucGVyc29uRGF0YS5iaXJ0aGRheSA/IDxoMz5Cb3JuOiB7cHJvcHMucGVyc29uRGF0YS5iaXJ0aGRheX0sIHtwcm9wcy5wZXJzb25EYXRhLmNvdW50cnkubmFtZX08L2gzPiA6IDxkaXYgLz59IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLnBlcnNvbkRhdGEuZGVhdGhkYXkgPyA8aDM+RGVhZDoge3Byb3BzLnBlcnNvbkRhdGEuZGVhdGhkYXl9PC9oMz4gOiA8ZGl2IC8+fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMucGVyc29uRGF0YS5pbWFnZSA/IDxpbWcgc3JjPXtwcm9wcy5wZXJzb25EYXRhLmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hY3RvckRhdGEubWFwKHNob3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93Ll9lbWJlZGRlZC5zaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Nob3cuX2VtYmVkZGVkLnNob3cubmFtZX0gKHtzaG93Ll9lbWJlZGRlZC5zaG93Lm5ldHdvcmsgPyBzaG93Ll9lbWJlZGRlZC5zaG93Lm5ldHdvcmsubmFtZSA6IHNob3cuX2VtYmVkZGVkLnNob3cud2ViQ2hhbm5lbC5uYW1lfSk8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntzaG93Ll9lbWJlZGRlZC5zaG93LmdlbnJlcy5qb2luKFwiIC8gXCIpfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Nob3cuX2VtYmVkZGVkLnNob3cuc3VtbWFyeS5zdWJzdHJpbmcoMywgc2hvdy5fZW1iZWRkZWQuc2hvdy5zdW1tYXJ5Lmxlbmd0aCAtIDQpLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dJbWdcIj57c2hvdy5fZW1iZWRkZWQuc2hvdy5pbWFnZSA/IDxpbWcgc3JjPXtzaG93Ll9lbWJlZGRlZC5zaG93LmltYWdlLm9yaWdpbmFsfSAvPiA6IDxkaXYgLz59PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7ICAgXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDIwdncgMjB2dyAyMHZ3IDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzV2aCA0MHZoIDIwdmggMTl2aDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2JTsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlOyAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgLnBlcnNvbkluZm8ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICAgfVxuICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTsgICAgICAgICBcbiAgICB9XG4gICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogNTB2aDsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAydnc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcblxuICAgICAgICB9XG4gICAgICAgIC5zaG93SW1nIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgbWF4LWhlaWdodDogNTB2aDsgXG4gICAgICAgICAgIGZsb2F0OiByaWdodDsgICAgICBcbiAgICB9XG4gICAgICAgIC5zaG93SW5mbyB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA1NXZ3XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcbiAgICAgICAgICAgIC5jaGFyYWN0ZXJJbWcgaW1nIHtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDV2aDsgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoOyAgIFxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7ICAgICBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyAyMHZ3IDIwdncgMjB2dyA7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxOHZoIDI1dmggMjB2aCAxOXZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5JTsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdweDsgICAgIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05dnc7ICAgIFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTF2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93SW5mbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIydmhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93SW1nIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzB2aDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuUGVyc29uLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcblxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBhY3RvckRhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9wZW9wbGUvJHtpZH1gKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9wZW9wbGUvJHtpZH0vY2FzdGNyZWRpdHM/ZW1iZWQ9c2hvd2ApLnRoZW4ociA9PiByLmpzb24oKSksXG5cbiAgICBdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGVyc29uRGF0YSwgYWN0b3JEYXRhLFxuXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjsiXX0= */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/mad-men-blog/pages/cast/person/[id].js */"));
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
//# sourceMappingURL=[id].js.93881aaaaccacf4ab52a.hot-update.js.map