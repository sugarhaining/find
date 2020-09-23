(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Comment/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Comment/index.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/Comment/index.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _bind = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");

var _bind2 = _interopRequireDefault(_bind);

var _addComment = __webpack_require__(/*! ../../asserts/icons/add-comment.png */ "./src/asserts/icons/add-comment.png");

var _addComment2 = _interopRequireDefault(_addComment);

var _index = __webpack_require__(/*! ./index.scss */ "./src/pages/Comment/index.scss");

var _index2 = _interopRequireDefault(_index);

var _avatar = __webpack_require__(/*! ../../asserts/icons/avatar.png */ "./src/asserts/icons/avatar.png");

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var commetns = [{
  content: '\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\n        \u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\n        \u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\n        \u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\n        \u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A\u4ECA\u5929\u5929\u6C14\u597D\u597D\u554A',
  mood: '🥰',
  time: '2020-09-18',
  avatar: _avatar2.default,
  nickName: '翌宁',
  id: 0,
  commentBoardId: 12,
  replyMessage: ['我也觉得呢', '待会要下雨了，记得早点回去哦']
}, {
  content: '今天天气好好啊',
  mood: '🥰',
  time: '2020-09-18',
  avatar: _avatar2.default,
  nickName: '翌宁',
  id: 0,
  commentBoardId: 12,
  replyMessage: ['我也觉得呢', '待会要下雨了，记得早点回去哦']
}, {
  content: '今天天气好好啊',
  mood: '🥰',
  time: '2020-09-18',
  avatar: _avatar2.default,
  nickName: '翌宁',
  id: 0,
  commentBoardId: 12,
  replyMessage: ['我也觉得呢', '待会要下雨了，记得早点回去哦']
}, {
  content: '今天天气好好啊',
  mood: '🥰',
  time: '2020-09-18',
  avatar: _avatar2.default,
  nickName: '翌宁',
  id: 0,
  commentBoardId: 12,
  replyMessage: ['我也觉得呢', '待会要下雨了，记得早点回去哦']
}, {
  content: '今天天气好好啊',
  mood: '',
  time: '2020-09-18',
  avatar: _avatar2.default,
  nickName: '翌宁',
  id: 0,
  commentBoardId: 12,
  replyMessage: ['我也觉得呢', '待会要下雨了，记得早点回去哦']
}, {
  content: '今天天气好好啊',
  mood: '🥰',
  time: '2020-09-18',
  avatar: _avatar2.default,
  nickName: '翌宁',
  id: 0,
  commentBoardId: 12,
  replyMessage: ['我也觉得呢', '\u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\n            \u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\n            \u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\n            \u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6\u5F85\u4F1A\u8981\u4E0B\u96E8\u4E86\uFF0C\u8BB0\u5F97\u65E9\u70B9\u56DE\u53BB\u54E6']
}];
var cx = _bind2.default.bind(_index2.default);

var Comment = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Comment, _Taro$Component);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#ffd531',
      navigationBarTitleText: ''
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp4", "loopArray7", "$compid__5", "commetns", "addCommentPng"], _this.customComponents = ["TitlePanel", "CommetnCard"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Comment.prototype.__proto__ || Object.getPrototypeOf(Comment.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__5"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__5 = _genCompid2[0],
          $compid__5 = _genCompid2[1];

      var _useRouter = (0, _taroWeapp.useRouter)(),
          commentBoardId = _useRouter.params.commentBoardId;

      var anonymousState__temp = cx('container');
      var anonymousState__temp4 = cx('add');
      var loopArray7 = commetns.map(function (comment, _anonIdx) {
        comment = {
          $original: (0, _taroWeapp.internal_get_original)(comment)
        };
        var $loopState__temp3 = cx('comment');

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + 'dzzzzzzzzz' + _anonIdx, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__4 = _genCompid4[0],
            $compid__4 = _genCompid4[1];

        _taroWeapp.propsManager.set({
          "comment": comment.$original
        }, $compid__4, $prevCompid__4);
        return {
          $loopState__temp3: $loopState__temp3,
          $compid__4: $compid__4,
          $original: comment.$original
        };
      });
      _taroWeapp.propsManager.set({
        "text": '\u7559\u8A00\u677F'
      }, $compid__5, $prevCompid__5);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp4: anonymousState__temp4,
        loopArray7: loopArray7,
        $compid__5: $compid__5,
        commetns: commetns,
        addCommentPng: _addComment2.default
      });
      return this.__state;
    }
  }]);

  return Comment;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/Comment/index", _temp2);


Comment.config = { navigationBarBackgroundColor: '#ffd531', navigationBarTitleText: '' };
exports.default = Comment;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Comment, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project-rep\\friend\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Comment/index.tsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project-rep/friend/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/Comment/index.tsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/Comment/index.wxml";

/***/ }),

/***/ "./src/asserts/icons/add-comment.png":
/*!*******************************************!*\
  !*** ./src/asserts/icons/add-comment.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/Comment/index.scss":
/*!**************************************!*\
  !*** ./src/pages/Comment/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Comment/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/Comment/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/Comment/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/Comment/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/Comment/index.tsx?taro&type=script&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/Comment/index.tsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Comment/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/Comment/index.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/Comment/index.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project-rep/friend/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project-rep\\friend\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/Comment/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_D_project_rep_friend_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/Comment/index.tsx","runtime","vendors","common"]]]);