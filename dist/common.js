(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/asserts/icons/avatar.png":
/*!**************************************!*\
  !*** ./src/asserts/icons/avatar.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "asserts/icons/avatar.png";

/***/ }),

/***/ "./src/libs/amap-wx.js":
/*!*****************************!*\
  !*** ./src/libs/amap-wx.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function AMapWX(a) {
  this.key = a.key, this.requestConfig = { key: a.key, s: "rsx", platform: "WXJS", appname: a.key, sdkversion: "1.2.0", logversion: "2.0" };
}AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({ type: "gcj02", success: function success(a) {
      var c = a.longitude + "," + a.latitude;wx.setStorage({ key: "userLocation", data: c }), b(c);
    }, fail: function fail(c) {
      wx.getStorage({ key: "userLocation", success: function success(a) {
          a.data && b(a.data);
        } }), a.fail({ errCode: "0", errMsg: c.errMsg || "" });
    } });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: c, extensions: "all", s: d.s, platform: d.platform, appname: b.key, sdkversion: d.sdkversion, logversion: d.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var d, e, f, g, h, i, j, k, l;b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{ iconPath: a.iconPath, width: a.iconWidth, height: a.iconHeight, name: f, desc: g, longitude: h, latitude: i, id: 0, regeocodeData: d }], a.success(l)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this;a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";a.type && "forecast" == a.type && (e = "all"), wx.request({ url: "https://restapi.amap.com/v3/weather/weatherInfo", data: { key: b.key, city: d, extensions: e, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        function c(a) {
          var b = { city: { text: "城市", data: a.city }, weather: { text: "天气", data: a.weather }, temperature: { text: "温度", data: a.temperature }, winddirection: { text: "风向", data: a.winddirection + "风" }, windpower: { text: "风力", data: a.windpower + "级" }, humidity: { text: "湿度", data: a.humidity + "%" } };return b;
        }var d, e;b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({ forecast: b.data.forecasts[0] }) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }function e(e) {
    wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: e, extensions: "all", s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, e;b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = { key: b.key, location: d, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({ url: "https://restapi.amap.com/v3/place/around", data: e, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, d, e, f;if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) {
              e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({ latitude: parseFloat(b.pois[d].location.split(",")[1]), longitude: parseFloat(b.pois[d].location.split(",")[0]), iconPath: e, width: 22, height: 32, id: d, name: b.pois[d].name, address: b.pois[d].address });
            }f = { markers: c, poisData: b.pois }, a.success(f);
          }
        } else a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);var e = d + c.join("&");a.success({ url: e });
  }var e,
      b = this,
      c = [],
      d = "https://restapi.amap.com/v3/staticmap?";c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({ url: "https://restapi.amap.com/v3/assistant/inputtips", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.tips && a.success({ tips: b.data.tips });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({ url: "https://restapi.amap.com/v3/direction/driving", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths, taxi_cost: b.data.route.taxi_cost || "" });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v3/direction/walking", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({ url: "https://restapi.amap.com/v3/direction/transit/integrated", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;a.success({ distance: c.distance || "", taxi_cost: c.taxi_cost || "", transits: c.transits });
      }
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v4/direction/bicycling", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.data && a.success({ paths: b.data.data.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, module.exports.AMapWX = AMapWX;exports.default = AMapWX;

/***/ }),

/***/ "./src/utils/CONSTANT.ts":
/*!*******************************!*\
  !*** ./src/utils/CONSTANT.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AMAPKEY = exports.AMAPKEY = '4ab0b341e2aba0c92ec5b56dff5298d5';
var BMAPKEY = exports.BMAPKEY = 'Q6rtVKuoT03kskGYk7KnmWu4AhhB1pG6';
var BASEURL = exports.BASEURL = 'http://127.0.0.1:7002';

/***/ }),

/***/ "./src/utils/apis/custom.ts":
/*!**********************************!*\
  !*** ./src/utils/apis/custom.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCommentById = exports.fetchReplyComment = exports.fetchNewestComment = exports.fetchComment = exports.fecthPublishComment = exports.fetchUserId = undefined;

var _common = __webpack_require__(/*! ../common */ "./src/utils/common.ts");

var fetchUserId = exports.fetchUserId = function fetchUserId(userInfo) {
  return (0, _common.wrapFetch)('/login', "POST", userInfo);
};
var fecthPublishComment = exports.fecthPublishComment = function fecthPublishComment(comment) {
  return (0, _common.wrapFetch)('/comment', 'POST', comment);
};
var fetchComment = exports.fetchComment = function fetchComment(boardId, offset, pageSize) {
  return (0, _common.wrapFetch)('/comment', 'GET', {
    boardId: boardId,
    offset: offset,
    pageSize: pageSize
  });
};
var fetchNewestComment = exports.fetchNewestComment = function fetchNewestComment() {
  return (0, _common.wrapFetch)('/comment/newest', 'GET');
};
var fetchReplyComment = exports.fetchReplyComment = function fetchReplyComment(commentId, content) {
  return (0, _common.wrapFetch)('/comment', 'PUT', {
    commentId: commentId,
    content: content
  });
};
var fetchCommentById = exports.fetchCommentById = function fetchCommentById(id) {
  return (0, _common.wrapFetch)('/comment/' + id, 'GET');
};

/***/ }),

/***/ "./src/utils/apis/index.ts":
/*!*********************************!*\
  !*** ./src/utils/apis/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWeather = exports.fetchTravelRoute = exports.fetchPois = undefined;

var _custom = __webpack_require__(/*! ./custom */ "./src/utils/apis/custom.ts");

Object.keys(_custom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _custom[key];
    }
  });
});

var _CONSTANT = __webpack_require__(/*! ../CONSTANT */ "./src/utils/CONSTANT.ts");

var _amapWx = __webpack_require__(/*! ../../libs/amap-wx */ "./src/libs/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myAmapFun = new _amapWx2.default({ key: _CONSTANT.AMAPKEY });
var fetchPois = exports.fetchPois = function fetchPois() {
  return new Promise(function (resolve, reject) {
    myAmapFun.getPoiAround({
      success: function success(data) {
        resolve(data);
      },
      fail: function fail(info) {
        reject(info);
      }
    });
  });
};
var fetchWalkingRoute = function fetchWalkingRoute(origin, destination) {
  return new Promise(function (resolve) {
    myAmapFun.getWalkingRoute({
      origin: origin,
      destination: destination,
      success: function success(res) {
        return resolve([null, res]);
      },
      fail: function fail(err) {
        return resolve([err, null]);
      }
    });
  });
};
var fetchDrivingRoute = function fetchDrivingRoute(origin, destination) {
  return new Promise(function (resolve) {
    myAmapFun.getDrivingRoute({
      origin: origin,
      destination: destination,
      success: function success(res) {
        return resolve([null, res]);
      },
      fail: function fail(err) {
        return resolve([err, null]);
      }
    });
  });
};
var fetchRidingRoute = function fetchRidingRoute(origin, destination) {
  return new Promise(function (resolve) {
    myAmapFun.getRidingRoute({
      origin: origin,
      destination: destination,
      success: function success(res) {
        return resolve([null, res]);
      },
      fail: function fail(err) {
        return resolve([err, null]);
      }
    });
  });
};
var travelModeApiMap = {
  walking: fetchWalkingRoute,
  driving: fetchDrivingRoute,
  riding: fetchRidingRoute
};
var fetchTravelRoute = exports.fetchTravelRoute = function fetchTravelRoute(mode, origin, destination) {
  var fetchApi = travelModeApiMap[mode];
  return fetchApi(origin, destination);
};
var fetchWeather = exports.fetchWeather = function fetchWeather() {
  return new Promise(function (resolve) {
    myAmapFun.getWeather({
      success: function success(res) {
        return resolve([null, res]);
      },
      fail: function fail(err) {
        return resolve([err, null]);
      }
    });
  });
};

/***/ }),

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entitiestoUtf16 = exports.utf16toEntities = exports.wrapFetch = exports.splitString = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _CONSTANT = __webpack_require__(/*! ./CONSTANT */ "./src/utils/CONSTANT.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var splitString = exports.splitString = function splitString(str, maxLength) {
  var fix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

  var len = str.length;
  return len > maxLength ? '' + str.slice(0, maxLength) + fix : str;
};
var wrapFetch = exports.wrapFetch = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(path, type, payload) {
    var err, res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            err = void 0;
            res = void 0;
            _context.prev = 2;
            _context.next = 5;
            return _taroWeapp2.default.request({
              url: '' + _CONSTANT.BASEURL + path,
              method: type,
              data: payload
            }).then(function (res) {
              return (0, _lodash.get)(res, ['data', 'data']);
            });

          case 5:
            res = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);

            err = _context.t0;

          case 11:
            return _context.abrupt('return', { err: err, res: res });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 8]]);
  }));

  return function wrapFetch(_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var utf16toEntities = exports.utf16toEntities = function utf16toEntities(str) {
  var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
  str = str.replace(patt, function (char) {
    var H = void 0;
    var L = void 0;
    var code = void 0;
    var s = void 0;
    if (char.length === 2) {
      H = char.charCodeAt(0); // 取出高位
      L = char.charCodeAt(1); // 取出低位
      code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
      s = '&#' + code + ';';
    } else {
      s = char;
    }
    return s;
  });
  return str;
};
var entitiestoUtf16 = exports.entitiestoUtf16 = function entitiestoUtf16(strObj) {
  var patt = /&#\d+;/g;
  var arr = strObj.match(patt) || [];
  var H = void 0;
  var L = void 0;
  var code = void 0;
  for (var i = 0; i < arr.length; i += 1) {
    code = arr[i];
    code = code.replace('&#', '').replace(';', '');
    // 高位
    H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
    // 低位
    L = (code - 0x10000) % 0x400 + 0xDC00;
    code = '&#' + code + ';';
    var s = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }
  return strObj;
};

/***/ }),

/***/ "./src/utils/hooks.ts":
/*!****************************!*\
  !*** ./src/utils/hooks.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserInfo = exports.useUserLocation = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var useUserLocation = exports.useUserLocation = function useUserLocation() {
  var _useState = (0, _taroWeapp.useState)({
    longitude: 116.434446,
    latitude: 39.90816
  }),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = (0, _taroWeapp.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      finished = _useState4[0],
      setFinished = _useState4[1];

  (0, _taroWeapp.useDidShow)(function () {
    _taroWeapp2.default.getLocation({
      success: function success(info) {
        var longitude = info.longitude,
            latitude = info.latitude;

        setFinished(true);
        setLocation({
          longitude: longitude,
          latitude: latitude
        });
      }
    });
  });
  return {
    finished: finished,
    location: location
  };
};
var useUserInfo = exports.useUserInfo = function useUserInfo() {
  var _useState5 = (0, _taroWeapp.useState)({
    nickName: '',
    avatarUrl: ''
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      userInfo = _useState6[0],
      setUserInfo = _useState6[1];

  (0, _taroWeapp.useDidShow)(_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var _ref2, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _taroWeapp2.default.getStorage({
              key: 'userInfo'
            });

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;

            setUserInfo(data);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
  return userInfo;
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hooks = __webpack_require__(/*! ./hooks */ "./src/utils/hooks.ts");

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hooks[key];
    }
  });
});

var _common = __webpack_require__(/*! ./common */ "./src/utils/common.ts");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

/***/ })

}]);