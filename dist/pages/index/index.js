(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _bind = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");

var _bind2 = _interopRequireDefault(_bind);

var _scan = __webpack_require__(/*! ../../asserts/icons/scan.png */ "./src/asserts/icons/scan.png");

var _scan2 = _interopRequireDefault(_scan);

var _logo = __webpack_require__(/*! ../../asserts/icons/logo.png */ "./src/asserts/icons/logo.png");

var _logo2 = _interopRequireDefault(_logo);

var _around = __webpack_require__(/*! ../../asserts/icons/around.png */ "./src/asserts/icons/around.png");

var _around2 = _interopRequireDefault(_around);

var _index = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_index2.default);

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "Logo", "HomePng", "QRCode"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var handleScanCode = (0, _taroWeapp.useCallback)(_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref3, result;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _taroWeapp2.default.scanCode({});

              case 3:
                _ref3 = _context.sent;
                result = _ref3.result;

                _taroWeapp2.default.navigateTo({
                  url: "/pages/Comment/index?boardId=" + result
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                _taroWeapp2.default.showToast({
                  title: '扫码失败',
                  icon: 'none'
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 8]]);
      })), []);
      var goToHomePage = (0, _taroWeapp.useCallback)(function () {
        _taroWeapp2.default.navigateTo({
          url: '/pages/Home/index'
        });
      }, []);
      var anonymousState__temp = cx('container');
      var anonymousState__temp2 = cx(['web-font', 'logo']);
      var anonymousState__temp3 = cx('logo-image');
      var anonymousState__temp4 = cx('controller');
      var anonymousState__temp5 = cx('home');
      var anonymousState__temp6 = cx('qrcode');
      this.anonymousFunc0 = handleScanCode;
      var anonymousState__temp7 = cx('home');
      this.anonymousFunc1 = goToHomePage;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        Logo: _logo2.default,
        HomePng: _around2.default,
        QRCode: _scan2.default
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/index/index", _temp2);


Index.config = { navigationBarTitleText: '首页' };
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project-rep\\friend\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project-rep/friend/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/asserts/icons/around.png":
/*!**************************************!*\
  !*** ./src/asserts/icons/around.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/asserts/icons/logo.png":
/*!************************************!*\
  !*** ./src/asserts/icons/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "asserts/icons/logo.png";

/***/ }),

/***/ "./src/asserts/icons/scan.png":
/*!************************************!*\
  !*** ./src/asserts/icons/scan.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project-rep/friend/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project-rep\\friend\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);