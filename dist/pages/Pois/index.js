(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Pois/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Pois/index.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/Pois/index.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/apis/index */ "./src/utils/apis/index.ts");

var _common = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");

var _placeholder = __webpack_require__(/*! ../../asserts/icons/placeholder.png */ "./src/asserts/icons/placeholder.png");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _bind = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");

var _bind2 = _interopRequireDefault(_bind);

var _index2 = __webpack_require__(/*! ./index.scss */ "./src/pages/Pois/index.scss");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_index3.default);
var splitLocation = function splitLocation() {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var locationArr = location.split(',');
  return {
    longitude: +locationArr[0],
    latitude: +locationArr[1]
  };
};
var swiperImages = [{
  path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
}, {
  path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
}, {
  path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
}, {
  path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
}];

var Pois = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Pois, _Taro$Component);

  function Pois() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pois);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pois.__proto__ || Object.getPrototypeOf(Pois)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#ffd531',
      navigationBarTitleText: ''
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp5", "loopArray10", "loopArray11", "$compid__6", "swiperImages", "pois", "placeholder"], _this.anonymousFunc0Map = {}, _this.customComponents = ["TitlePanel"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pois, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Pois.prototype.__proto__ || Object.getPrototypeOf(Pois.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__6"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__6 = _genCompid2[0],
          $compid__6 = _genCompid2[1];

      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          pois = _useState2[0],
          setPois = _useState2[1];

      var showRoute = (0, _taroWeapp.useCallback)(function (location, name, address) {
        _taroWeapp2.default.openLocation({
          longitude: splitLocation(location).longitude,
          latitude: splitLocation(location).latitude,
          name: name,
          address: address
        });
      }, []);
      (0, _taroWeapp.useEffect)(function () {
        var fetch = function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref3, _ref3$poisData, poisData;

            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _taroWeapp2.default.showLoading({
                      title: '数据请求中'
                    });
                    _context.prev = 1;
                    _context.next = 4;
                    return (0, _index.fetchPois)();

                  case 4:
                    _ref3 = _context.sent;
                    _ref3$poisData = _ref3.poisData;
                    poisData = _ref3$poisData === undefined ? [] : _ref3$poisData;

                    setPois(poisData);
                    _context.next = 13;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](1);

                    _taroWeapp2.default.showToast({
                      icon: 'none',
                      title: '获取poi信息失败'
                    });

                  case 13:
                    _taroWeapp2.default.hideLoading();

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, _this2, [[1, 10]]);
          }));

          return function fetch() {
            return _ref2.apply(this, arguments);
          };
        }();
        fetch();
      }, []);
      var anonymousState__temp = cx('container');
      var anonymousState__temp2 = cx('swiper');
      var anonymousState__temp5 = cx('pois');
      var loopArray10 = swiperImages.map(function (swiper, _anonIdx) {
        swiper = {
          $original: (0, _taroWeapp.internal_get_original)(swiper)
        };
        var $loopState__temp4 = cx('item');
        return {
          $loopState__temp4: $loopState__temp4,
          $original: swiper.$original
        };
      });
      var loopArray11 = pois.map(function (poi, __index0) {
        poi = {
          $original: (0, _taroWeapp.internal_get_original)(poi)
        };
        var $loopState__temp7 = cx('poi');

        var _$indexKey = "hzzzz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return showRoute(poi.$original.location, poi.$original.name, poi.$original.address);
        };

        var $loopState__temp9 = cx('name');
        var $loopState__temp11 = (0, _common.splitString)(poi.$original.name, 16);
        var $loopState__temp13 = cx('distance');
        var $loopState__temp15 = cx('addr');
        var $loopState__temp17 = (0, _common.splitString)(poi.$original.address, 25) || '...';
        return {
          $loopState__temp7: $loopState__temp7,
          _$indexKey: _$indexKey,
          $loopState__temp9: $loopState__temp9,
          $loopState__temp11: $loopState__temp11,
          $loopState__temp13: $loopState__temp13,
          $loopState__temp15: $loopState__temp15,
          $loopState__temp17: $loopState__temp17,
          $original: poi.$original
        };
      });
      _taroWeapp.propsManager.set({
        "text": "\u53D1\u73B0\u5468\u8FB9"
      }, $compid__6, $prevCompid__6);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp5: anonymousState__temp5,
        loopArray10: loopArray10,
        loopArray11: loopArray11,
        $compid__6: $compid__6,
        swiperImages: swiperImages,
        pois: pois,
        placeholder: _placeholder2.default
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Pois;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/Pois/index", _temp2);


Pois.config = { navigationBarBackgroundColor: '#ffd531', navigationBarTitleText: '' };
exports.default = Pois;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Pois, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project-rep\\friend\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Pois/index.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project-rep/friend/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/Pois/index.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/Pois/index.wxml";

/***/ }),

/***/ "./src/asserts/icons/placeholder.png":
/*!*******************************************!*\
  !*** ./src/asserts/icons/placeholder.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "asserts/icons/placeholder.png";

/***/ }),

/***/ "./src/pages/Pois/index.scss":
/*!***********************************!*\
  !*** ./src/pages/Pois/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Pois/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Pois/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/Pois/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/Pois/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/Pois/index.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************!*\
  !*** ./src/pages/Pois/index.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Pois/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/Pois/index.tsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************!*\
  !*** ./src/pages/Pois/index.tsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project-rep/friend/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project-rep\\friend\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Pois/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/Pois/index.tsx","runtime","vendors","common"]]]);