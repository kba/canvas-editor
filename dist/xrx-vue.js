(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xrx"));
	else if(typeof define === 'function' && define.amd)
		define(["xrx"], factory);
	else if(typeof exports === 'object')
		exports["XrxVue"] = factory(require("xrx"));
	else
		root["XrxVue"] = factory(root["xrx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_176__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(38)('wks')
  , uid        = __webpack_require__(22)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(62)
  , toPrimitive    = __webpack_require__(41)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(53)('wks')
  , uid        = __webpack_require__(57)
  , Symbol     = __webpack_require__(11).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(150)
  , defined = __webpack_require__(32);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(3)
  , createDesc = __webpack_require__(15);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(1)
  , ctx       = __webpack_require__(60)
  , hide      = __webpack_require__(9)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(67)
  , enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(51)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(20)
  , createDesc = __webpack_require__(28);
module.exports = __webpack_require__(17) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(84)
  , toPrimitive    = __webpack_require__(100)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(164)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(63)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(53)('keys')
  , uid    = __webpack_require__(57);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys')
  , uid    = __webpack_require__(22);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(21);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(1)
  , LIBRARY        = __webpack_require__(34)
  , wksExt         = __webpack_require__(43)
  , defineProperty = __webpack_require__(3).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(9)
  , Iterators     = __webpack_require__(10)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    angleFromMatrix: function angleFromMatrix(m00, m01) {
        var deg = Math.atan2(m01 * -1, m00) * 180 / Math.PI;
        if (deg < 0) {
            deg += 360;
        }
        return Math.round(deg);
    },
    coordIIIF: function coordIIIF(polygons, imgwidth, imgheight) {
        var maxx = 0;
        var minx = imgwidth;
        var maxy = 0;
        var miny = imgheight;

        var i;
        var j;

        if (Array.isArray(polygons)) {
            for (i = 0; i < polygons.length; i++) {
                if (Array.isArray(polygons[i])) {
                    for (j = 0; j < polygons[i].length; j++) {
                        if (polygons[i][j][0] > maxx) {
                            maxx = polygons[i][j][0];
                        }
                        if (polygons[i][j][0] < minx) {
                            minx = polygons[i][j][0];
                        }
                        if (polygons[i][j][1] > maxy) {
                            maxy = polygons[i][j][1];
                        }
                        if (polygons[i][j][1] < miny) {
                            miny = polygons[i][j][1];
                        }
                    }
                }
            }
        }
        minx *= imgwidth / 1000;
        maxx *= imgwidth / 1000;
        miny *= imgwidth / 1000;
        maxy *= imgwidth / 1000;
        var difx = maxx - minx;
        var dify = maxy - miny;
        return parseInt(minx) + ',' + parseInt(miny) + ',' + Math.round(difx) + ',' + Math.round(dify);
    },
    abs2rel: function abs2rel(coords, absval) {
        var i;
        var polygonrel = [];
        if (Array.isArray(coords) && absval > 0) {
            for (i = 0; i < coords.length; i++) {
                var p = coords[i];
                var px = p[0] * 1000 / absval;
                var py = p[1] * 1000 / absval;
                polygonrel.push([px, py]);
            }
        }
        return polygonrel;
    },
    rel2abs: function rel2abs(coords, absval) {
        var i;
        var polygonabs = [];
        if (Array.isArray(coords) && absval > 0) {
            for (i = 0; i < coords.length; i++) {
                var p = coords[i];
                var px = Math.round(p[0] * absval / 1000);
                var py = Math.round(p[1] * absval / 1000);
                polygonabs.push([px, py]);
            }
        }
        return polygonabs;
    },
    isRectangle: function isRectangle(c) {
        if (!Array.isArray(c) || c.length !== 4) return false;
        var xcoords = {};
        var ycoords = {};
        var i;
        var oldx = 0;
        var oldy = 0;
        for (i = 0; i < c.length; i++) {
            if (xcoords[c[i][0]]) {
                xcoords[c[i][0]]++;
            } else {
                xcoords[c[i][0]] = 1;
            }
            if (ycoords[c[i][1]]) {
                ycoords[c[i][1]]++;
            } else {
                ycoords[c[i][1]] = 1;
            }
            if (i > 0) {
                if (c[i][0] != oldx && c[i][1] != oldy) {
                    return false;
                }
            }
            oldx = c[i][0];
            oldy = c[i][1];
        }
        var size = 0,
            key;
        for (key in xcoords) {
            if (xcoords.hasOwnProperty(key)) {
                size++;
                if (xcoords[key] != 2) {
                    return false;
                }
            }
        }
        if (size != 2) {
            return false;
        }
        size = 0;
        for (key in ycoords) {
            if (ycoords.hasOwnProperty(key)) {
                size++;
                if (ycoords[key] != 2) {
                    return false;
                }
            }
        }
        if (size != 2) {
            return false;
        }
        return true;
    }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(79);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26)
  , document = __webpack_require__(11).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(11)
  , core      = __webpack_require__(24)
  , ctx       = __webpack_require__(47)
  , hide      = __webpack_require__(19)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(20).f
  , has = __webpack_require__(18)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(85)
  , defined = __webpack_require__(25);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(30)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(144);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(13)(function(){
  return Object.defineProperty(__webpack_require__(61)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(34)
  , $export        = __webpack_require__(12)
  , redefine       = __webpack_require__(68)
  , hide           = __webpack_require__(9)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(10)
  , $iterCreate    = __webpack_require__(154)
  , setToStringTag = __webpack_require__(36)
  , getPrototypeOf = __webpack_require__(162)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(8)
  , dPs         = __webpack_require__(159)
  , enumBugKeys = __webpack_require__(33)
  , IE_PROTO    = __webpack_require__(37)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(61)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(149).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(67)
  , hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(7)
  , arrayIndexOf = __webpack_require__(146)(false)
  , IE_PROTO     = __webpack_require__(37)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(39)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(10);
module.exports = __webpack_require__(1).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(122)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  "data-v-76fcf456",
  /* cssModules */
  null
)
Component.options.__file = "/home/kb/build/github.com/kba/canvas-editor/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76fcf456", Component.options)
  } else {
    hotAPI.reload("data-v-76fcf456", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XrxVue = undefined;

var _App = __webpack_require__(71);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XrxVue = _App2.default;
exports.default = {
    install: function install(Vue) {
        Vue.component('xrx-vue', _App2.default);
    }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(77);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _semtonotesUtils = __webpack_require__(74);

var _semtonotesUtils2 = _interopRequireDefault(_semtonotesUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'xrx-vue',
  data: function data() {
    return {
      mode: this.initialMode,
      svgImExPort: '',
      zoomValue: this.initialZoom,
      imexport: 'import',
      loadRelative: false,
      image: null,
      selectedShape: null,
      backgroundImage: null
    };
  },

  /*
   * ### Properties
   *
   * #### `width`
   * Width of the canvas (**not** the image). Default: `600`
   * #### `height`
   * Height of the canvas (**not** the image). Default: `400`
   * #### `showToolbar`
   * Whether to show or hide the complete toolbar. Default: `true`
   * #### `showToolbarModes`
   * Whether to show the modes toolbar. Default: `true`
   * #### `showToolbarModeList`
   * Whether to show the list of modes. Default: `true`
   * #### `zoomFactorMax`
   * Maximum zoom factor. Default: `4`
   * #### `initialZoom`
   * Initial zoom. Default: `1` (== 100%)
   * #### `initialImage`
   * Initial background image to load.
   * #### `initialMode`
   * Initial mode. Default `HoverMult`
   * #### `xrxStyle`
   * Styles to use. Default: `[see source]`
   */
  props: {
    width: { type: Number, default: 600 },
    height: { type: Number, default: 400 },
    showToolbar: { type: Boolean, default: true },
    showToolbarModes: { type: Boolean, default: true },
    showToolbarModeList: { type: Boolean, default: false },
    zoomFactorMax: { type: Number, default: 4 },
    initialZoom: { type: Number, default: 1 },
    initialImage: { type: String, default: './assets/earth.jpg' },
    initialMode: { type: String, default: 'HoverMult' },
    modesEnabled: { type: Array, default: function _default() {
        return ['Hover', 'HoverMult', 'Modify', 'Create', 'Select'];
      }
    },
    modesAvailable: { type: Array, default: function _default() {
        return [{ value: 'Hover', text: 'Hover' }, { value: 'HoverMult', text: 'Hover (multiple)' }, { value: 'Modify', text: 'Modify' }, { value: 'Create', text: 'Create', disabled: true }, { value: 'Select', text: 'Select' }];
      }
    },
    xrxStyle: { type: Object, default: function _default() {
        return {
          strokeColor: '#3B3BFF',
          fillColor: '#3B3BFF',
          strokeWidth: 2,
          fillOpacity: 0.4,
          hoverable: {
            strokeColor: '#00ff00',
            fillColor: '#00ff00',
            strokeWidth: 3,
            fillOpacity: 0.4
          },
          creatable: {
            strokeColor: '#ff0000',
            fillColor: '#ff0000',
            strokeWidth: 3,
            fillOpacity: 0.4
          },
          selectable: {
            strokeColor: '#ff00ff',
            fillColor: '#ff00ff',
            strokeWidth: 3,
            fillOpacity: 0.4
          }
        };
      }
    }
  },
  /**
   * ### Events
   * 
   * #### `viewbox-changed`
   * The viewbox (visible layer) has changed.
   *
   * #### `shape-modified(shape)`
   * An existing shape `shape` was changed.
   *
   * #### `shape-created(shape)`
   * A new shape `shape` was created.
   *
   * #### `shape-selected(shape)`
   * A shape `shape` has been selected by the user.
   *
   * #### `mode-changed(from, to)`
   * The mode changed, it was `from`, now it is `to`.
   */
  mounted: function mounted() {
    var _this = this;

    this.image = _semtonotesUtils2.default.createDrawing(this.$refs.canvas, this.width, this.height);
    this.image.eventViewboxChange = function () {
      return _this.$emit('viewbox-changed');
    };
    this.image.eventShapeModify = function (shape) {
      return _this.$emit('shape-modified', shape);
    };
    this.image.eventShapeCreated = function (shape) {
      return _this.$emit('shape-created', shape);
    };
    this.image.eventShapeSelected = function (shape) {
      return _this.$emit('shape-selected', shape);
    };

    this.image.$on('shape-selected', function (shape) {
      _this.selectedShape = shape;
    });
    this.$on('shape-created', function (shape) {
      _this.setMode('HoverMult');
      _this.applyStyles();
      document.activeElement.blur();
    });
    this.$on('mode-changed', function (from, to) {
      _this.selectedShape = null;
    });

    this.backgroundImage = this.initialImage;
    this.loadImage();
    this.setMode(this.mode);
  },

  methods: {
    dump: function dump() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log(args);
    },
    loadImage: function loadImage() {
      var _this2 = this;

      this.image.setBackgroundImage(this.backgroundImage, function () {
        _this2.image.getViewbox().fit(false);
        _this2.image.getViewbox().setZoomFactorMax(_this2.zoomFactorMax);
        _this2.zoomValue = _this2.image.getViewbox().getZoomValue();
        _this2.image.draw();
      });
    },
    setMode: function setMode(mode) {
      var _image;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (mode === 'HoverMult') this.image.setModeHover(true);else (_image = this.image)['setMode' + mode].apply(_image, (0, _toConsumableArray3.default)(args));
      this.$emit('mode-changed', this.mode, mode);
      this.mode = mode;
    },
    zoom: function zoom(amount) {
      if (amount === 'in') this.image.getViewbox().zoomIn();else if (amount === 'out') this.image.getViewbox().zoomOut();else if (amount === 'fit') this.image.getViewbox().fit(true);else if (amount === 'width') this.image.getViewbox().fitToWidth(true);else if (amount === 'height') this.image.getViewbox().fitToHeight(true);else this.image.getViewbox().zoomTo(amount);
      this.zoomValue = this.image.getViewbox().getZoomValue();
      this.image.draw();
    },
    applyStyles: function applyStyles() {
      var _this3 = this;

      this.image.getLayerShape().getShapes().forEach(function (shape) {
        _semtonotesUtils2.default.applyStyle(shape, _this3.xrxStyle);
      });
    },
    drawShape: function drawShape(shapeName) {
      var shape = new xrx.shape[shapeName](this.image);
      _semtonotesUtils2.default.applyStyle(shape, this.xrxStyle);
      this.setMode('Create', shape.getCreatable());
      // this.image.getLayerShape().addShapes(shape)
    },
    removeSelected: function removeSelected() {
      if (!this.image.getSelectedShape()) {
        window.alert("Please select a shape");
      } else {
        if (window.confirm("Delete selected shape?")) {
          this.image.removeShape(this.image.getSelectedShape());
          this.setMode(this.initialMode);
        }
      }
    },
    copyShape: function copyShape() {
      var svg = _semtonotesUtils2.default.svgFromShapes(this.image.getSelectedShape());
      _semtonotesUtils2.default.drawFromSvg(svg, this.image);
      this.applyStyles();
    },
    showImexport: function showImexport(imexport) {
      this.imexport = imexport;
      this.svgImExPort = this.imexport === 'import' ? '' : _semtonotesUtils2.default.svgFromDrawing(this.image);
      $(this.$refs.imexportModal).modal('show');
    },
    loadSvg: function loadSvg() {
      this.image.getLayerShape().removeShapes();
      _semtonotesUtils2.default.drawFromSvg(this.svgImExPort, this.image, { relative: this.loadRelative });
      this.applyStyles();
      $(this.$refs.imexportModal).modal('hide');
    },
    showImageModal: function showImageModal() {
      $(this.$refs.imageModal).modal('show');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(75);
module.exports.CoordUtils = __webpack_require__(45);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _from = __webpack_require__(127);

var _from2 = _interopRequireDefault(_from);

var _slicedToArray2 = __webpack_require__(135);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(58);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(136);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(130);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(133);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(134);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xrx = __webpack_require__(176);
var goog = window && window.goog ? window.goog : xrx.goog;
var CoordUtils = __webpack_require__(45);

function propToGetter(prop) {
    return 'get' + prop.substr(0, 1).toUpperCase() + prop.substr(1);
}
function propToSetter(prop) {
    return 'set' + prop.substr(0, 1).toUpperCase() + prop.substr(1);
}

module.exports = function () {
    function XrxUtils() {
        (0, _classCallCheck3.default)(this, XrxUtils);
    }

    (0, _createClass3.default)(XrxUtils, null, [{
        key: 'applyStyle',
        value: function applyStyle(shapes, styleDef) {
            if (!Array.isArray(shapes)) shapes = [shapes];
            shapes.forEach(function (obj) {
                if (!obj) return;
                var style = new xrx.shape.Style();
                (0, _keys2.default)(styleDef).forEach(function (prop) {
                    var val = styleDef[prop];
                    try {
                        if ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object') {
                            XrxUtils.applyStyle(obj[propToGetter(prop)](), val);
                        } else {
                            style[propToSetter(prop)](val);
                        }
                    } catch (err) {
                        console.log("Failed for", prop, val, obj);
                        throw err;
                    }
                });
                obj.setStyle(style);
            });
        }
    }, {
        key: 'createDrawing',
        value: function createDrawing(elem, width, height) {
            var origGetSize = goog.style.getSize;
            goog.style.getSize = function (origElem) {
                var origWH = origGetSize(origElem);
                if (elem === origElem && (origWH.width <= 0 || origWH.height <= 0)) return { width: width, height: height };
                return origWH;
            };
            var ret = new xrx.drawing.Drawing(elem);
            if (!ret.getEngine().isAvailable()) throw new Error("No Engine available :-( Much sadness");
            return ret;
        }
    }, {
        key: 'createShape',
        value: function createShape(shapeType, image) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!(shapeType in xrx.shape)) throw new Error('No such shape ' + shapeType);
            return new xrx.shape[shapeType](image);
        }
    }, {
        key: 'drawFromSvg',
        value: function drawFromSvg(svgString, drawing) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var group = XrxUtils.shapesFromSvg(svgString, drawing, options);
            drawing.getLayerShape().addShapes(group);
            drawing.draw();
            return group;
        }
    }, {
        key: 'svgFromShapes',
        value: function svgFromShapes() {
            var shapes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (shapes instanceof xrx.shape.ShapeGroup) {
                shapes = shapes.getChildren();
            }
            if (!Array.isArray(shapes)) shapes = [shapes];
            if (shapes.length === 0) console.warn("Should pass at least one shape to svgFromShape or SVG will be empty");
            var svg = ['<?xml version="1.0" encoding="UTF-8" ?>'];
            svg.push(['<svg xmlns="http://www.w3.org/2000/svg" version="1.1"', 'width="' + shapes[0].getDrawing().getLayerBackground().getImage().getWidth() + '"', 'height="' + shapes[0].getDrawing().getLayerBackground().getImage().getHeight() + '">'].join(' '));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(shapes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var shape = _step.value;

                    if (shape instanceof xrx.shape.Rect || shape instanceof xrx.shape.Polygon && CoordUtils.isRectangle(shape.getCoords())) {
                        var coords = shape.getCoords();
                        var _ref = [Number.MAX_VALUE, Number.MAX_VALUE],
                            minX = _ref[0],
                            minY = _ref[1];
                        var _ref2 = [Number.MIN_VALUE, Number.MIN_VALUE],
                            maxX = _ref2[0],
                            maxY = _ref2[1];
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = (0, _getIterator3.default)(coords), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var _ref3 = _step2.value;

                                var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

                                var x = _ref4[0];
                                var y = _ref4[1];

                                ;var _ref5 = [Math.max(x, maxX), Math.max(y, maxY)];
                                maxX = _ref5[0];
                                maxY = _ref5[1];
                                var _ref6 = [Math.min(x, minX), Math.min(y, minY)];
                                minX = _ref6[0];
                                minY = _ref6[1];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        svg.push('  <rect x="' + minX + '" y="' + minY + '" width="' + (maxX - minX) + '" height="' + (maxY - minY) + '"/>');
                    } else if (shape instanceof xrx.shape.Polygon) {
                        var _coords = shape.getCoords();
                        svg.push('  <polygon points="' + _coords.map(function (xy) {
                            return xy.join(',');
                        }).join(' ') + '" />');
                    } else if (shape instanceof xrx.shape.Polyline) {
                        var _coords2 = shape.getCoords();
                        svg.push('  <polyline points="' + _coords2.map(function (xy) {
                            return xy.join(',');
                        }).join(' ') + '" />');
                    } else if (shape instanceof xrx.shape.Line) {
                        var _coords3 = shape.getCoords();
                        svg.push('  <line x1="' + _coords3[0][0] + '" y1="' + _coords3[0][1] + '" x2="' + _coords3[1][0] + '" y2="' + _coords3[1][1] + '"/>');
                    } else if (shape instanceof xrx.shape.Ellipse) {
                        var _shape$getCenter = shape.getCenter(),
                            _shape$getCenter2 = (0, _slicedToArray3.default)(_shape$getCenter, 2),
                            cx = _shape$getCenter2[0],
                            cy = _shape$getCenter2[1];

                        var _ref7 = [shape.getRadiusX(), shape.getRadiusY()],
                            rx = _ref7[0],
                            ry = _ref7[1];

                        svg.push('  <ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '"/>');
                    } else if (shape instanceof xrx.shape.Circle) {
                        var _shape$getCenter3 = shape.getCenter(),
                            _shape$getCenter4 = (0, _slicedToArray3.default)(_shape$getCenter3, 2),
                            _cx = _shape$getCenter4[0],
                            _cy = _shape$getCenter4[1];

                        var r = shape.getRadius();
                        svg.push('  <circle cx="' + _cx + '" cy="' + _cy + '" r="' + r + '"/>');
                    } else {
                        console.error("SVG Export not implemented for", shape);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            svg.push("</svg>");
            return svg.join('\n');
        }
    }, {
        key: 'shapesFromSvg',
        value: function shapesFromSvg(svgString, drawing) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (window === undefined) throw new Error("shapesFromSvg must be run in a browser");
            options.relative = options.relative || false;
            var parser = new window.DOMParser();
            var svg = parser.parseFromString(svgString, "image/svg+xml");

            var _map = ['height', 'width'].map(function (attr) {
                return parseInt(svg.documentElement.getAttribute(attr));
            }),
                _map2 = (0, _slicedToArray3.default)(_map, 2),
                svgWidth = _map2[0],
                svgHeight = _map2[1];

            var relWidth = svgWidth > 0 ? drawing.getLayerBackground().getImage().getWidth() / svgWidth : 1;
            var relHeight = svgHeight > 0 ? drawing.getLayerBackground().getImage().getHeight() / svgHeight : 1;

            var shapes = [];

            (0, _from2.default)(svg.querySelectorAll("rect")).forEach(function (svgRect) {
                var xrxRect = new xrx.shape.Rect(drawing);

                var _map3 = ['x', 'y', 'width', 'height'].map(function (attr) {
                    return parseFloat(svgRect.getAttribute(attr));
                }),
                    _map4 = (0, _slicedToArray3.default)(_map3, 4),
                    x = _map4[0],
                    y = _map4[1],
                    width = _map4[2],
                    height = _map4[3];

                if (options.relative) {
                    var _ref8 = [x * relWidth, y * relHeight, width * relWidth, height * relHeight];
                    x = _ref8[0];
                    y = _ref8[1];
                    width = _ref8[2];
                    height = _ref8[3];
                }
                var coords = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
                xrxRect.setCoords(coords);
                shapes.push(xrxRect);
            });

            (0, _from2.default)(svg.querySelectorAll("polygon")).forEach(function (svgPolygon) {
                var xrxPolygon = new xrx.shape.Polygon(drawing);
                var coords = svgPolygon.getAttribute("points").split(' ').map(function (point) {
                    return point.split(',').map(function (xy) {
                        return parseInt(xy);
                    });
                });
                if (options.relative) {
                    coords = coords.map(function (_ref9) {
                        var _ref10 = (0, _slicedToArray3.default)(_ref9, 2),
                            x = _ref10[0],
                            y = _ref10[1];

                        return [x * relWidth, y * relHeight];
                    });
                }
                xrxPolygon.setCoords(coords);
                shapes.push(xrxPolygon);
            });

            (0, _from2.default)(svg.querySelectorAll("polyline")).forEach(function (svgPolyline) {
                var xrxPolyline = new xrx.shape.Polyline(drawing);
                var coords = svgPolyline.getAttribute("points").split(' ').map(function (point) {
                    return point.split(',').map(function (xy) {
                        return parseInt(xy);
                    });
                });
                if (options.relative) {
                    coords = coords.map(function (_ref11) {
                        var _ref12 = (0, _slicedToArray3.default)(_ref11, 2),
                            x = _ref12[0],
                            y = _ref12[1];

                        return [x * relWidth, y * relHeight];
                    });
                }
                xrxPolyline.setCoords(coords);
                shapes.push(xrxPolyline);
            });

            (0, _from2.default)(svg.querySelectorAll("circle")).forEach(function (svgCircle) {
                var xrxCircle = new xrx.shape.Circle(drawing);
                var c = [parseFloat(svgCircle.getAttribute('cx')), parseFloat(svgCircle.getAttribute('cy'))];
                var r = parseFloat(svgCircle.getAttribute('r'));
                if (options.relative) {
                    c[0] = c[0] * relWidth;
                    c[1] = c[1] * relHeight;

                    r = r * Math.min(relWidth, relHeight);
                }
                xrxCircle.setCenter.apply(xrxCircle, c);
                xrxCircle.setRadius(r);
                shapes.push(xrxCircle);
            });

            (0, _from2.default)(svg.querySelectorAll("ellipse")).forEach(function (svgEllipse) {
                var xrxEllipse = new xrx.shape.Ellipse(drawing);
                var c = [parseFloat(svgEllipse.getAttribute('cx')), parseFloat(svgEllipse.getAttribute('cy'))];
                var r = [parseFloat(svgEllipse.getAttribute('rx')), parseFloat(svgEllipse.getAttribute('ry'))];
                if (options.relative) {
                    c[0] = c[0] * relWidth;
                    c[1] = c[1] * relHeight;
                    r[0] = r[0] * relWidth;
                    r[1] = r[1] * relHeight;
                }
                xrxEllipse.setCenter.apply(xrxEllipse, c);
                xrxEllipse.setRadiusX(r[0]);
                xrxEllipse.setRadiusY(r[1]);
                shapes.push(xrxEllipse);
            });

            (0, _from2.default)(svg.querySelectorAll("line")).forEach(function (svgLine) {
                var xrxLine = new xrx.shape.Line(drawing);
                var coords = [['x1', 'y1'], ['x2', 'y2']].map(function (point) {
                    return [parseFloat(svgLine.getAttribute(point[0])), parseFloat(svgLine.getAttribute(point[1]))];
                });
                if (options.relative) {
                    coords = coords.map(function (_ref13) {
                        var _ref14 = (0, _slicedToArray3.default)(_ref13, 2),
                            x = _ref14[0],
                            y = _ref14[1];

                        return [x * relWidth, y * relHeight];
                    });
                }
                xrxLine.setCoords(coords);
                shapes.push(xrxLine);
            });

            var group = new xrx.shape.ShapeGroup(drawing);
            group.addChildren(shapes);
            return group;
        }
    }, {
        key: 'svgFromDrawing',
        value: function svgFromDrawing(drawing) {
            return XrxUtils.svgFromShapes(drawing.getLayerShape().getShapes());
        }
    }, {
        key: 'navigationThumb',
        value: function navigationThumb(thumb, image) {
            if (!thumb || !image) throw new Error("Call 'navigationThumb' with the xrx canvasses for the thumb and the image");

            var matrix = image.getViewbox().ctmDump();
            var trans = new goog.math.AffineTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            var scaleX = Math.sqrt(Math.pow(trans.getScaleX(), 2) + Math.pow(trans.getShearX(), 2));
            var scaleY = Math.sqrt(Math.pow(trans.getScaleY(), 2) + Math.pow(trans.getShearY(), 2));
            var thumbWidth = thumb.getLayerBackground().getImage().getWidth();
            var thumbHeight = thumb.getLayerBackground().getImage().getHeight();
            var origWidth = image.getLayerBackground().getImage().getWidth();
            var origHeight = image.getLayerBackground().getImage().getHeight();
            var faktorX = thumbWidth / (origWidth * scaleX);
            var faktorY = thumbHeight / (origHeight * scaleY);

            var bildLO = [];
            trans.transform([0, 0], 0, bildLO, 0, 1);

            var ausschnittWidth = image.getCanvas().getWidth();
            var ausschnittHeight = image.getCanvas().getHeight();
            var ausschnittRect = new xrx.shape.Rect(thumb);

            var ausschnitt = [];
            var angle = CoordUtils.angleFromMatrix(matrix[0], matrix[1]);

            if (angle == 270) {
                ausschnitt[0] = [(0 - bildLO[1]) * faktorY, (bildLO[0] - ausschnittWidth) * faktorX];
                ausschnitt[1] = [(ausschnittHeight - bildLO[1]) * faktorY, (bildLO[0] - ausschnittWidth) * faktorX];
                ausschnitt[2] = [(ausschnittHeight - bildLO[1]) * faktorY, bildLO[0] * faktorX];
                ausschnitt[3] = [(0 - bildLO[1]) * faktorY, bildLO[0] * faktorX];
            } else if (angle == 180) {
                    ausschnitt[0] = [(bildLO[0] - ausschnittWidth) * faktorX, (bildLO[1] - ausschnittHeight) * faktorY];
                    ausschnitt[1] = [bildLO[0] * faktorX, (bildLO[1] - ausschnittHeight) * faktorY];
                    ausschnitt[2] = [bildLO[0] * faktorX, bildLO[1] * faktorY];
                    ausschnitt[3] = [(bildLO[0] - ausschnittWidth) * faktorX, bildLO[1] * faktorY];
                } else if (angle == 90) {
                        ausschnitt[0] = [(bildLO[1] - ausschnittHeight) * faktorY, (0 - bildLO[0]) * faktorX];
                        ausschnitt[1] = [bildLO[1] * faktorY, (0 - bildLO[0]) * faktorX];
                        ausschnitt[2] = [bildLO[1] * faktorY, (ausschnittWidth - bildLO[0]) * faktorX];
                        ausschnitt[3] = [(bildLO[1] - ausschnittHeight) * faktorY, (ausschnittWidth - bildLO[0]) * faktorX];
                    } else {
                            ausschnitt[0] = [(0 - bildLO[0]) * faktorX, (0 - bildLO[1]) * faktorY];
                            ausschnitt[1] = [(ausschnittWidth - bildLO[0]) * faktorX, (0 - bildLO[1]) * faktorY];
                            ausschnitt[2] = [(ausschnittWidth - bildLO[0]) * faktorX, (ausschnittHeight - bildLO[1]) * faktorY];
                            ausschnitt[3] = [(0 - bildLO[0]) * faktorX, (ausschnittHeight - bildLO[1]) * faktorY];
                        }

            var rect = new xrx.shape.Rect(thumb);
            rect.setCoords(ausschnitt);
            rect.setStrokeWidth(1.5);
            var color = '#A00000';

            if ((typeof zonecolor === 'undefined' ? 'undefined' : (0, _typeof3.default)(zonecolor)) == 'object' && zonecolor.length > 3) {
                color = '#' + zonecolor[0];
            }
            rect.setStrokeColor(color);
            rect.setFillColor(color);
            rect.setFillOpacity(0.15);
            var rects = [];
            rects.push(rect);
            thumb.getLayerShape().removeShapes();
            thumb.getLayerShape().addShapes(rect);
            thumb.draw();
        }
    }]);
    return XrxUtils;
}();

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(76);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
__webpack_require__(102);
module.exports = __webpack_require__(24).Array.from;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(54)
  , toLength  = __webpack_require__(55)
  , toIndex   = __webpack_require__(99);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(46)
  , TAG = __webpack_require__(4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(20)
  , createDesc      = __webpack_require__(28);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).document && document.documentElement;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(51)(function(){
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(27)
  , ITERATOR   = __webpack_require__(4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(92)
  , descriptor     = __webpack_require__(28)
  , setToStringTag = __webpack_require__(52)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(91)
  , $export        = __webpack_require__(50)
  , redefine       = __webpack_require__(97)
  , hide           = __webpack_require__(19)
  , has            = __webpack_require__(18)
  , Iterators      = __webpack_require__(27)
  , $iterCreate    = __webpack_require__(88)
  , setToStringTag = __webpack_require__(52)
  , getPrototypeOf = __webpack_require__(94)
  , ITERATOR       = __webpack_require__(4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(4)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(16)
  , dPs         = __webpack_require__(93)
  , enumBugKeys = __webpack_require__(49)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(48)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(83).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(20)
  , anObject = __webpack_require__(16)
  , getKeys  = __webpack_require__(96);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(18)
  , toObject    = __webpack_require__(56)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(18)
  , toIObject    = __webpack_require__(54)
  , arrayIndexOf = __webpack_require__(80)(false)
  , IE_PROTO     = __webpack_require__(29)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(95)
  , enumBugKeys = __webpack_require__(49);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30)
  , defined   = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(81)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(27);
module.exports = __webpack_require__(24).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(47)
  , $export        = __webpack_require__(50)
  , toObject       = __webpack_require__(56)
  , call           = __webpack_require__(87)
  , isArrayIter    = __webpack_require__(86)
  , toLength       = __webpack_require__(55)
  , createProperty = __webpack_require__(82)
  , getIterFn      = __webpack_require__(101);

$export($export.S + $export.F * !__webpack_require__(90)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(98)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(89)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "\n.panel[data-v-76fcf456] {\n  background: transparent;\n  /* .xrx-toolbar .input-group { display: inline-table !important }*/\n}\n.panel .panel-heading[data-v-76fcf456] {\n    padding: 0;\n}\n.panel .xrx-toolbar .input-group[data-v-76fcf456],\n  .panel .xrx-toolbar select[data-v-76fcf456],\n  .panel .xrx-toolbar .dropdown-toggle[data-v-76fcf456],\n  .panel .xrx-toolbar button[data-v-76fcf456] {\n    height: 32px;\n}\n.panel .xrx-toolbar .input-group > img[data-v-76fcf456],\n    .panel .xrx-toolbar select > img[data-v-76fcf456],\n    .panel .xrx-toolbar .dropdown-toggle > img[data-v-76fcf456],\n    .panel .xrx-toolbar button > img[data-v-76fcf456] {\n      height: 20px;\n}\n.panel .xrx-toolbar .input-group.btn[data-v-76fcf456],\n    .panel .xrx-toolbar select.btn[data-v-76fcf456],\n    .panel .xrx-toolbar .dropdown-toggle.btn[data-v-76fcf456],\n    .panel .xrx-toolbar button.btn[data-v-76fcf456] {\n      padding-left: 6px;\n      padding-right: 6px;\n}\n.imexport-modal textarea[data-v-76fcf456] {\n  font-family: monospace;\n  min-height: 200px;\n}\n", ""]);

// exports


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBjbGFzcz0ic3ZnX2ljb24iPgogIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS4wIiB4Mj0iMS4wIiB5MT0iMC4xODc1IiB4MT0iMC4xNzE4NzUiIGlkPSJzdmdfNCI+CiAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBvZmZzZXQ9IjAuMCIvPgogICAgIDxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iI2ZmZmY2NiIgb2Zmc2V0PSIxLjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgIDwvZGVmcz4KICAgPGc+CiAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJ1cmwoI3N2Z180KSIgaWQ9InN2Z18xIiByPSIyMiIgY3k9IjI3IiBjeD0iMjciLz4KICAgPC9nPgogIDwvc3ZnPgo8L3N2Zz4K"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjk2IDM4NHE0MCAwIDY4IDI4dDI4IDY4djEyMTZxMCA0MC0yOCA2OHQtNjggMjhoLTk2MHEtNDAgMC02OC0yOHQtMjgtNjh2LTI4OGgtNTQ0cS00MCAwLTY4LTI4dC0yOC02OHYtNjcycTAtNDAgMjAtODh0NDgtNzZsNDA4LTQwOHEyOC0yOCA3Ni00OHQ4OC0yMGg0MTZxNDAgMCA2OCAyOHQyOCA2OHYzMjhxNjgtNDAgMTI4LTQwaDQxNnptLTU0NCAyMTNsLTI5OSAyOTloMjk5di0yOTl6bS02NDAtMzg0bC0yOTkgMjk5aDI5OXYtMjk5em0xOTYgNjQ3bDMxNi0zMTZ2LTQxNmgtMzg0djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djY0MGg1MTJ2LTI1NnEwLTQwIDIwLTg4dDQ4LTc2em05NTYgODA0di0xMTUyaC0zODR2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NjQwaDg5NnoiLz48L3N2Zz4="

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgY2xhc3M9InN2Z19pY29uIj48c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+CgkgIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0iIzAwMDAwMCIgaWQ9InN2Z18xMyIgZD0ibTcuMzgxNjgsMi40Njk0OGwwLjA3NTAyLDE3LjAzMjU4bDMuMzAwODMsLTIuNjI2MTdsMi42MjU2Niw1LjYyNzUxbDQuMjAxMDUsLTIuNjI2MTdsLTMuMzAwODIsLTQuODAyMTRsNC41NzYxNCwtMC4zNzUxN2wtMTEuNDc3ODcsLTEyLjIzMDQ0eiIvPgoJPC9zdmc+PC9zdmc+"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij4KICA8c3ZnICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA1NCI+CiAgIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IHkyPSIxLjAiIHgyPSIxLjAiIHkxPSIwLjE4NzUiIHgxPSIwLjE3MTg3NSIgaWQ9InN2Z180Ij4KICAgICA8c3RvcCBzdG9wLW9wYWNpdHk9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIG9mZnNldD0iMC4wIi8+CiAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSIjZmY2NjY2IiBvZmZzZXQ9IjEuMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgPC9kZWZzPgogIDxlbGxpcHNlIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJ1cmwoI3N2Z180KSIgaWQ9InN2Z18xIiByeD0iMjQiIHJ5PSIxNSIgY3k9IjI3IiBjeD0iMjciLz4KICA8L3N2Zz4KPC9zdmc+Cg=="

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02NDAgMTI4cS01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41djg5NmwtMTUxLTIwMnEtNDEtNTQtMTA3LTU0LTUyIDAtODkgMzh0LTM3IDkwcTAgNDMgMjYgNzdsMzg0IDUxMnEzOCA1MSAxMDIgNTFoNzE4cTIyIDAgMzkuNS0xMy41dDIyLjUtMzQuNWw5Mi0zNjhxMjQtOTYgMjQtMTk0di0yMTdxMC00MS0yOC03MXQtNjgtMzAtNjggMjgtMjggNjhoLTMydi02MXEwLTQ4LTMyLTgxLjV0LTgwLTMzLjVxLTQ2IDAtNzkgMzN0LTMzIDc5djY0aC0zMnYtOTBxMC01NS0zNy05NC41dC05MS0zOS41cS01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41djk2aC0zMnYtNTcwcTAtNTUtMzctOTQuNXQtOTEtMzkuNXptMC0xMjhxMTA3IDAgMTgxLjUgNzcuNXQ3NC41IDE4NC41djIyMHEyMi0yIDMyLTIgOTkgMCAxNzMgNjkgNDctMjEgOTktMjEgMTEzIDAgMTg0IDg3IDI3LTcgNTYtNyA5NCAwIDE1OSA2Ny41dDY1IDE2MS41djIxN3EwIDExNi0yOCAyMjVsLTkyIDM2OHEtMTYgNjQtNjggMTA0LjV0LTExOCA0MC41aC03MThxLTYwIDAtMTE0LjUtMjcuNXQtOTAuNS03NC41bC0zODQtNTEycS01MS02OC01MS0xNTQgMC0xMDUgNzQuNS0xODAuNXQxNzkuNS03NS41cTcxIDAgMTMwIDM1di01NDdxMC0xMDYgNzUtMTgxdDE4MS03NXptMTI4IDE0MDh2LTM4NGgtMzJ2Mzg0aDMyem0yNTYgMHYtMzg0aC0zMnYzODRoMzJ6bTI1NiAwdi0zODRoLTMydjM4NGgzMnoiLz48L3N2Zz4="

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04ODAgMTI4cS00NiAwLTc5IDMzdC0zMyA3OXY2NTZoLTMydi01MjhxMC00Ni0zMy03OXQtNzktMzMtNzkgMzMtMzMgNzl2Nzg0bC0xNTQtMjA1cS0zOC01MS0xMDItNTEtNTMgMC05MC41IDM3LjV0LTM3LjUgOTAuNXEwIDQzIDI2IDc3bDM4NCA1MTJxMzggNTEgMTAyIDUxaDY4OHEzNCAwIDYxLTIydDM0LTU2bDc2LTQwNXE1LTMyIDUtNTl2LTQ5OHEwLTQ2LTMzLTc5dC03OS0zMy03OSAzMy0zMyA3OXYyNzJoLTMydi01MjhxMC00Ni0zMy03OXQtNzktMzMtNzkgMzMtMzMgNzl2NTI4aC0zMnYtNjU2cTAtNDYtMzMtNzl0LTc5LTMzem0wLTEyOHE2OCAwIDEyNS41IDM1LjV0ODguNSA5Ni41cTE5LTQgNDItNCA5OSAwIDE2OS41IDcwLjV0NzAuNSAxNjkuNXYxN3ExMDUtNiAxODAuNSA2NHQ3NS41IDE3NXY0OThxMCA0MC04IDgzbC03NiA0MDRxLTE0IDc5LTc2LjUgMTMxdC0xNDMuNSA1MmgtNjg4cS02MCAwLTExNC41LTI3LjV0LTkwLjUtNzQuNWwtMzg0LTUxMnEtNTEtNjgtNTEtMTU0IDAtMTA2IDc1LTE4MXQxODEtNzVxNzggMCAxMjggMzR2LTQzNHEwLTk5IDcwLjUtMTY5LjV0MTY5LjUtNzAuNXEyMyAwIDQyIDQgMzEtNjEgODguNS05Ni41dDEyNS41LTM1LjV6Ii8+PC9zdmc+"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNTk2IDM4MHEyOCAyOCA0OCA3NnQyMCA4OHYxMTUycTAgNDAtMjggNjh0LTY4IDI4aC0xMzQ0cS00MCAwLTY4LTI4dC0yOC02OHYtMTYwMHEwLTQwIDI4LTY4dDY4LTI4aDg5NnE0MCAwIDg4IDIwdDc2IDQ4em0tNDQ0LTI0NHYzNzZoMzc2cS0xMC0yOS0yMi00MWwtMzEzLTMxM3EtMTItMTItNDEtMjJ6bTM4NCAxNTI4di0xMDI0aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di00MTZoLTc2OHYxNTM2aDEyODB6bS0xMjgtNDQ4djMyMGgtMTAyNHYtMTkybDE5Mi0xOTIgMTI4IDEyOCAzODQtMzg0em0tODMyLTE5MnEtODAgMC0xMzYtNTZ0LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzYtNTYgMTM2LTEzNiA1NnoiLz48L3N2Zz4="

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBjbGFzcz0ic3ZnX2ljb24iPgogIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTI0IDEyNCI+CiAgICA8bGluZSB4MT0iMTAiIHkxPSIxMCIgeDI9IjExMCIgeTI9IjExMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEyIiAvPgogICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTAiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NSIgLz4KICAgIDxjaXJjbGUgY3g9IjExMCIgY3k9IjExMCIgcj0iMTAiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NSIgLz4KICAgPC9zdmc+CiA8L3N2Zz4K"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij4KICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2NCAxMjQiPgogICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB5Mj0iMSIgeDI9IjEiIHkxPSIwLjI4MTI1IiB4MT0iMC4zMzU5NCIgaWQ9InN2Z180Ij4KICAgICA8c3RvcCBzdG9wLW9wYWNpdHk9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIG9mZnNldD0iMCIvPgogICAgIDxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iIzMzYTUzMyIgb2Zmc2V0PSIxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICA8L2RlZnM+CiAgICA8cG9seWdvbiBzdHJva2UtZGFzaGFycmF5PSJudWxsIiBzdHJva2Utd2lkdGg9IjkiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0idXJsKCNzdmdfNCkiIGlkPSJzdmdfMSIKICAgICAgcG9pbnRzPSIKICAgICAgMCwyMAogICAgICAyMCwxMjQKICAgICAgODAsODAKICAgICAgMTQ0LDEyNAogICAgICAxNjQsNDAKICAgICAgODAsMAogICAgICAiLz4KICAgPC9zdmc+CiA8L3N2Zz4K"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBjbGFzcz0ic3ZnX2ljb24iPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyNCAxMjQiPgogIDxwb2x5bGluZSBwb2ludHM9IjE1LDIwIDQwLDExMCA4MCwyMCAxMTAsMTEwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MTIiIC8+CiAgPGNpcmNsZSBjeD0iMTUiIGN5PSIyNSIgcj0iMTAiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NSIgLz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjExMCIgcj0iMTAiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NSIgLz4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjIwIiByPSIxMCIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDo1IiAvPgogIDxjaXJjbGUgY3g9IjExMCIgY3k9IjExMCIgcj0iMTAiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NSIgLz4KIDwvc3ZnPjwvc3ZnPgo="

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8ZGVmcz4KICA8bGluZWFyR3JhZGllbnQgeTI9IjEiIHgyPSIxIiB5MT0iMC4xMDE1NiIgeDE9IjAuMzYzMjgiIGlkPSJzdmdfMiI+CiAgIDxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iIzNiN2U5YiIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KIDwvZGVmcz4KPHJlY3Qgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9InVybCgjc3ZnXzIpIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMzAiIHk9IjUuNSIgeD0iMS41Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDkwIDEzMjJxMCA0MC0yOCA2OGwtMTM2IDEzNnEtMjggMjgtNjggMjh0LTY4LTI4bC0yOTQtMjk0LTI5NCAyOTRxLTI4IDI4LTY4IDI4dC02OC0yOGwtMTM2LTEzNnEtMjgtMjgtMjgtNjh0MjgtNjhsMjk0LTI5NC0yOTQtMjk0cS0yOC0yOC0yOC02OHQyOC02OGwxMzYtMTM2cTI4LTI4IDY4LTI4dDY4IDI4bDI5NCAyOTQgMjk0LTI5NHEyOC0yOCA2OC0yOHQ2OCAyOGwxMzYgMTM2cTI4IDI4IDI4IDY4dC0yOCA2OGwtMjk0IDI5NCAyOTQgMjk0cTI4IDI4IDI4IDY4eiIvPjwvc3ZnPg=="

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiIKICAgaWQ9InN2ZzMwMDEiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHdpZHRoPSIxMDAlIgogICBoZWlnaHQ9IjEwMCUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InNhdmVfZm9udF9hd2Vzb21lLnN2ZyI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMzAxMSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczMwMDkiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI2NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNDgwIgogICAgIGlkPSJuYW1lZHZpZXczMDA3IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjEzMTY5NjQzIgogICAgIGlua3NjYXBlOmN4PSI4OTYiCiAgICAgaW5rc2NhcGU6Y3k9Ijg5NiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmczMDAxIiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMTI5LjA4NDc1LDEyNzAuMjM3MykiCiAgICAgaWQ9ImczMDAzIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDM4NCwwIGggNzY4IFYgMzg0IEggMzg0IFYgMCB6IG0gODk2LDAgaCAxMjggdiA4OTYgcSAwLDE0IC0xMCwzOC41IC0xMCwyNC41IC0yMCwzNC41IGwgLTI4MSwyODEgcSAtMTAsMTAgLTM0LDIwIC0yNCwxMCAtMzksMTAgViA4NjQgcSAwLC00MCAtMjgsLTY4IC0yOCwtMjggLTY4LC0yOCBIIDM1MiBxIC00MCwwIC02OCwyOCAtMjgsMjggLTI4LDY4IHYgNDE2IEggMTI4IFYgMCBoIDEyOCB2IDQxNiBxIDAsNDAgMjgsNjggMjgsMjggNjgsMjggaCA4MzIgcSA0MCwwIDY4LC0yOCAyOCwtMjggMjgsLTY4IFYgMCB6IE0gODk2LDkyOCB2IDMyMCBxIDAsMTMgLTkuNSwyMi41IC05LjUsOS41IC0yMi41LDkuNSBIIDY3MiBxIC0xMywwIC0yMi41LC05LjUgUSA2NDAsMTI2MSA2NDAsMTI0OCBWIDkyOCBxIDAsLTEzIDkuNSwtMjIuNSBRIDY1OSw4OTYgNjcyLDg5NiBoIDE5MiBxIDEzLDAgMjIuNSw5LjUgOS41LDkuNSA5LjUsMjIuNSB6IG0gNjQwLC0zMiBWIC0zMiBxIDAsLTQwIC0yOCwtNjggLTI4LC0yOCAtNjgsLTI4IEggOTYgcSAtNDAsMCAtNjgsMjggLTI4LDI4IC0yOCw2OCB2IDEzNDQgcSAwLDQwIDI4LDY4IDI4LDI4IDY4LDI4IGggOTI4IHEgNDAsMCA4OCwtMjAgNDgsLTIwIDc2LC00OCBsIDI4MCwtMjgwIHEgMjgsLTI4IDQ4LC03NiAyMCwtNDggMjAsLTg4IHoiCiAgICAgICBpZD0icGF0aDMwMDUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMzQ0IDE0NzJxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTI1NiAwcTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0xMjgtMjI0djMyMHEwIDQwLTI4IDY4dC02OCAyOGgtMTQ3MnEtNDAgMC02OC0yOHQtMjgtNjh2LTMyMHEwLTQwIDI4LTY4dDY4LTI4aDQyN3EyMSA1NiA3MC41IDkydDExMC41IDM2aDI1NnE2MSAwIDExMC41LTM2dDcwLjUtOTJoNDI3cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNjQ4cS0xNyA0MC01OSA0MGgtMjU2djQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4aC0yNTZxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsNDQ4LTQ0OHExOC0xOSA0NS0xOXQ0NSAxOWw0NDggNDQ4cTMxIDMwIDE0IDY5eiIvPjwvc3ZnPg=="

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiIKICAgaWQ9InN2ZzIiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHdpZHRoPSIxMDAlIgogICBoZWlnaHQ9IjEwMCUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Inpvb21faW5fZm9udF9hd2Vzb21lLnN2ZyI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEwMjQiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzE5IgogICAgIGlkPSJuYW1lZHZpZXc4IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjEzMTY5NjQzIgogICAgIGlua3NjYXBlOmN4PSI4OTYiCiAgICAgaW5rc2NhcGU6Y3k9Ijg5NiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsNjguMzM4OTgzLDEyMjQuNjc4KSIKICAgICBpZD0iZzQiPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMTAyNCw3MzYgdiAtNjQgcSAwLC0xMyAtOS41LC0yMi41IFEgMTAwNSw2NDAgOTkyLDY0MCBIIDc2OCBWIDQxNiBxIDAsLTEzIC05LjUsLTIyLjUgUSA3NDksMzg0IDczNiwzODQgaCAtNjQgcSAtMTMsMCAtMjIuNSw5LjUgUSA2NDAsNDAzIDY0MCw0MTYgViA2NDAgSCA0MTYgcSAtMTMsMCAtMjIuNSw5LjUgUSAzODQsNjU5IDM4NCw2NzIgdiA2NCBxIDAsMTMgOS41LDIyLjUgOS41LDkuNSAyMi41LDkuNSBoIDIyNCB2IDIyNCBxIDAsMTMgOS41LDIyLjUgOS41LDkuNSAyMi41LDkuNSBoIDY0IHEgMTMsMCAyMi41LC05LjUgUSA3NjgsMTAwNSA3NjgsOTkyIFYgNzY4IGggMjI0IHEgMTMsMCAyMi41LC05LjUgOS41LC05LjUgOS41LC0yMi41IHogbSAxMjgsLTMyIHEgMCwxODUgLTEzMS41LDMxNi41IFEgODg5LDExNTIgNzA0LDExNTIgNTE5LDExNTIgMzg3LjUsMTAyMC41IDI1Niw4ODkgMjU2LDcwNCAyNTYsNTE5IDM4Ny41LDM4Ny41IDUxOSwyNTYgNzA0LDI1NiA4ODksMjU2IDEwMjAuNSwzODcuNSAxMTUyLDUxOSAxMTUyLDcwNCB6IG0gNTEyLC04MzIgcSAwLC01MyAtMzcuNSwtOTAuNSAtMzcuNSwtMzcuNSAtOTAuNSwtMzcuNSAtNTQsMCAtOTAsMzggTCAxMTAzLDEyNCBRIDkyNCwwIDcwNCwwIDU2MSwwIDQzMC41LDU1LjUgMzAwLDExMSAyMDUuNSwyMDUuNSAxMTEsMzAwIDU1LjUsNDMwLjUgMCw1NjEgMCw3MDQgcSAwLDE0MyA1NS41LDI3My41IDU1LjUsMTMwLjUgMTUwLDIyNSA5NC41LDk0LjUgMjI1LDE1MCAxMzAuNSw1NS41IDI3My41LDU1LjUgMTQzLDAgMjczLjUsLTU1LjUgMTMwLjUsLTU1LjUgMjI1LC0xNTAgOTQuNSwtOTQuNSAxNTAsLTIyNSBRIDE0MDgsODQ3IDE0MDgsNzA0IDE0MDgsNDg0IDEyODQsMzA1IGwgMzQzLC0zNDMgcSAzNywtMzcgMzcsLTkwIHoiCiAgICAgICBpZD0icGF0aDYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc3R5bGU9ImZpbGw6Y3VycmVudENvbG9yIiAvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiIKICAgaWQ9InN2ZzIiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHdpZHRoPSIxMDAlIgogICBoZWlnaHQ9IjEwMCUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Inpvb21fb3V0X2ZvbnRfYXdlc29tZS5zdmciPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTEyIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTAiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMDI0IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcxOSIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC4xMzE2OTY0MyIKICAgICBpbmtzY2FwZTpjeD0iODk2LjAwMDAxIgogICAgIGlua3NjYXBlOmN5PSI4OTYuMDAwMDEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI1IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz4KICA8ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDUzLjE1MjU0MiwxMjE3LjA4NDgpIgogICAgIGlkPSJnNCI+CiAgICA8cGF0aAogICAgICAgZD0ibSAxMDI0LDczNiB2IC02NCBxIDAsLTEzIC05LjUsLTIyLjUgUSAxMDA1LDY0MCA5OTIsNjQwIEggNDE2IHEgLTEzLDAgLTIyLjUsOS41IFEgMzg0LDY1OSAzODQsNjcyIHYgNjQgcSAwLDEzIDkuNSwyMi41IDkuNSw5LjUgMjIuNSw5LjUgaCA1NzYgcSAxMywwIDIyLjUsLTkuNSA5LjUsLTkuNSA5LjUsLTIyLjUgeiBtIDEyOCwtMzIgcSAwLDE4NSAtMTMxLjUsMzE2LjUgUSA4ODksMTE1MiA3MDQsMTE1MiA1MTksMTE1MiAzODcuNSwxMDIwLjUgMjU2LDg4OSAyNTYsNzA0IDI1Niw1MTkgMzg3LjUsMzg3LjUgNTE5LDI1NiA3MDQsMjU2IDg4OSwyNTYgMTAyMC41LDM4Ny41IDExNTIsNTE5IDExNTIsNzA0IHogbSA1MTIsLTgzMiBxIDAsLTUzIC0zNy41LC05MC41IC0zNy41LC0zNy41IC05MC41LC0zNy41IC01NCwwIC05MCwzOCBMIDExMDMsMTI0IFEgOTI0LDAgNzA0LDAgNTYxLDAgNDMwLjUsNTUuNSAzMDAsMTExIDIwNS41LDIwNS41IDExMSwzMDAgNTUuNSw0MzAuNSAwLDU2MSAwLDcwNCBxIDAsMTQzIDU1LjUsMjczLjUgNTUuNSwxMzAuNSAxNTAsMjI1IDk0LjUsOTQuNSAyMjUsMTUwIDEzMC41LDU1LjUgMjczLjUsNTUuNSAxNDMsMCAyNzMuNSwtNTUuNSAxMzAuNSwtNTUuNSAyMjUsLTE1MCA5NC41LC05NC41IDE1MCwtMjI1IFEgMTQwOCw4NDcgMTQwOCw3MDQgMTQwOCw0ODQgMTI4NCwzMDUgbCAzNDMsLTM0MyBxIDM3LC0zNyAzNywtOTAgeiIKICAgICAgIGlkPSJwYXRoNiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [(_vm.showToolbar) ? _c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticClass: "form-inline xrx-toolbar"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon hidden-sm hidden-xs"
  }, [_vm._v("Mode")]), _c('button', {
    class: ("btn btn-default " + (!!_vm.mode.match(/^Hover/)?'active':'')),
    attrs: {
      "title": "Hover"
    },
    on: {
      "click": function($event) {
        _vm.setMode('HoverMult')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(111)
    }
  })]), _c('button', {
    class: ("btn btn-default " + (_vm.mode === 'Modify'?'active':'')),
    attrs: {
      "title": "Modify"
    },
    on: {
      "click": function($event) {
        _vm.setMode('Modify')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(110)
    }
  })]), _c('button', {
    class: ("btn btn-default " + (_vm.mode === 'Select'?'active':'')),
    attrs: {
      "title": "Select"
    },
    on: {
      "click": function($event) {
        _vm.setMode('Select')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(108)
    }
  })]), (_vm.showToolbarModeList) ? _c('select', {
    staticClass: "form-control",
    on: {
      "click": function($event) {
        _vm.setMode($event.target.value)
      }
    }
  }, _vm._l((_vm.modesEnabled), function(value) {
    return _c('option', {
      attrs: {
        "disabled": _vm.modesAvailable.find(function (x) { return x.value == value; }).disabled
      },
      domProps: {
        "value": value,
        "selected": value == _vm.mode
      }
    }, [_vm._v(_vm._s(_vm.modesAvailable.find(function (x) { return x.value == value; }).text))])
  })) : _vm._e()]), (_vm.mode === 'Select') ? _c('div', {
    staticClass: "input-group btn-group"
  }, [_c('span', {
    staticClass: "input-group-addon hidden-xs hidden-sm"
  }, [_vm._v("Action")]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Copy",
      "disabled": !_vm.selectedShape
    },
    on: {
      "click": _vm.copyShape
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(107)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Remove",
      "disabled": !_vm.selectedShape
    },
    on: {
      "click": _vm.removeSelected
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(117)
    }
  })])]) : _vm._e(), _c('div', {
    staticClass: "input-group btn-group"
  }, [_c('span', {
    staticClass: "input-group-addon hidden-sm hidden-xs"
  }, [_vm._v("Shape")]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Polygon"
    },
    on: {
      "click": function($event) {
        _vm.drawShape('Polygon')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(114)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Rectangle"
    },
    on: {
      "click": function($event) {
        _vm.drawShape('Rect')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(116)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Ellipse"
    },
    on: {
      "click": function($event) {
        _vm.drawShape('Ellipse')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(109)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Circle"
    },
    on: {
      "click": function($event) {
        _vm.drawShape('Circle')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(106)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Polyline"
    },
    on: {
      "click": function($event) {
        _vm.drawShape('Polyline')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(115)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "line"
    },
    on: {
      "click": function($event) {
        _vm.drawShape('Line')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(113)
    }
  })])]), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon hidden-sm hidden-xs"
  }, [_vm._v("File")]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Save SVG"
    },
    on: {
      "click": function($event) {
        _vm.showImexport('export')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(118)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Load SVG"
    },
    on: {
      "click": function($event) {
        _vm.showImexport('import')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(119)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Background Image"
    },
    on: {
      "click": _vm.showImageModal
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(112)
    }
  })])]), _c('div', {
    staticClass: "input-group btn-group"
  }, [_c('span', {
    staticClass: "input-group-addon hidden-sm hidden-xs"
  }, [_vm._v("Zoom")]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Zoom in"
    },
    on: {
      "click": function($event) {
        _vm.zoom('in')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(120)
    }
  })]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Zoom out"
    },
    on: {
      "click": function($event) {
        _vm.zoom('out')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(121)
    }
  })]), _c('span', {
    staticClass: "dropdown"
  }, [_c('button', {
    staticClass: "btn btn-default dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v(_vm._s(parseInt(_vm.zoomValue * 100)) + " %"), _c('span', {
    staticClass: "caret"
  })]), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.zoom(1)
      }
    }
  }, [_vm._v("100 %")])]), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.zoom('fit')
      }
    }
  }, [_vm._v("Fit to canvas")])]), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.zoom('width')
      }
    }
  }, [_vm._v("Fit to width")])]), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.zoom('width')
      }
    }
  }, [_vm._v("Fit to height")])])])])])])]) : _vm._e(), _c('div', {
    ref: "canvas",
    style: (("width: " + _vm.width + "; height: " + _vm.height))
  }), _c('div', {
    ref: "imexportModal",
    staticClass: "imexport-modal modal fade",
    attrs: {
      "role": "dialog",
      "tabindex": "-1"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [(_vm.imexport == "import") ? _c('div', {
    staticClass: "modal-header"
  }, [_vm._v("Import from SVG")]) : _c('div', {
    staticClass: "modal-header"
  }, [_vm._v("Export as SVG")]), _c('div', {
    staticClass: "modal-body"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.svgImExPort),
      expression: "svgImExPort"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "SVG here"
    },
    domProps: {
      "value": (_vm.svgImExPort)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.svgImExPort = $event.target.value
      }
    }
  }), (_vm.imexport == 'import') ? [_c('div', {
    staticClass: "form-group row"
  }, [_vm._m(0), _c('div', {
    staticClass: "col-xs-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loadRelative),
      expression: "loadRelative"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "svgLoadRelative",
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.loadRelative) ? _vm._i(_vm.loadRelative, null) > -1 : (_vm.loadRelative)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.loadRelative,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.loadRelative = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.loadRelative = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.loadRelative = $$c
        }
      }
    }
  })])]), _c('button', {
    staticClass: "form-control btn btn-success",
    on: {
      "click": _vm.loadSvg
    }
  }, [_vm._v("Load")])] : _vm._e()], 2)])])]), _c('div', {
    ref: "imageModal",
    staticClass: "image-modal modal fade",
    attrs: {
      "role": "dialog",
      "tabindex": "-1"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_vm._v("Set background image")]), _c('div', {
    staticClass: "modal-body"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.backgroundImage),
      expression: "backgroundImage"
    }],
    staticClass: "form-control",
    attrs: {
      "format": "url",
      "placeholder": "Image URL"
    },
    domProps: {
      "value": (_vm.backgroundImage)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.backgroundImage = $event.target.value
      }
    }
  }), _c('button', {
    staticClass: "form-control btn btn-success",
    on: {
      "click": _vm.loadImage
    }
  }, [_vm._v("Set background image")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-3"
  }, [_c('label', {
    attrs: {
      "for": "svgLoadRelative"
    }
  }, [_vm._v("Load Relative")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76fcf456", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(125)("e617af9e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76fcf456\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76fcf456\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(126)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(129);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(128);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(58);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(132);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(131);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(168);
module.exports = __webpack_require__(1).Array.from;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(23);
module.exports = __webpack_require__(166);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(23);
module.exports = __webpack_require__(167);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(171);
module.exports = __webpack_require__(1).Object.keys;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
__webpack_require__(172);
__webpack_require__(174);
__webpack_require__(175);
module.exports = __webpack_require__(1).Symbol;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(44);
module.exports = __webpack_require__(43).f('iterator');

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7)
  , toLength  = __webpack_require__(69)
  , toIndex   = __webpack_require__(165);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3)
  , createDesc      = __webpack_require__(15);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14)
  , gOPS    = __webpack_require__(66)
  , pIE     = __webpack_require__(35);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(10)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(64)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(36)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(14)
  , toIObject = __webpack_require__(7);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(22)('meta')
  , isObject = __webpack_require__(21)
  , has      = __webpack_require__(6)
  , setDesc  = __webpack_require__(3).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(13)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(3)
  , anObject = __webpack_require__(8)
  , getKeys  = __webpack_require__(14);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(35)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(7)
  , toPrimitive    = __webpack_require__(41)
  , has            = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(62)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7)
  , gOPN      = __webpack_require__(65).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(40)
  , IE_PROTO    = __webpack_require__(37)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12)
  , core    = __webpack_require__(1)
  , fails   = __webpack_require__(13);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39)
  , defined   = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8)
  , get      = __webpack_require__(70);
module.exports = __webpack_require__(1).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(10);
module.exports = __webpack_require__(1).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(60)
  , $export        = __webpack_require__(12)
  , toObject       = __webpack_require__(40)
  , call           = __webpack_require__(153)
  , isArrayIter    = __webpack_require__(151)
  , toLength       = __webpack_require__(69)
  , createProperty = __webpack_require__(147)
  , getIterFn      = __webpack_require__(70);

$export($export.S + $export.F * !__webpack_require__(155)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(145)
  , step             = __webpack_require__(156)
  , Iterators        = __webpack_require__(10)
  , toIObject        = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(63)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(3).f});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(40)
  , $keys    = __webpack_require__(14);

__webpack_require__(163)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 172 */
/***/ (function(module, exports) {



/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(6)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(12)
  , redefine       = __webpack_require__(68)
  , META           = __webpack_require__(158).KEY
  , $fails         = __webpack_require__(13)
  , shared         = __webpack_require__(38)
  , setToStringTag = __webpack_require__(36)
  , uid            = __webpack_require__(22)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(43)
  , wksDefine      = __webpack_require__(42)
  , keyOf          = __webpack_require__(157)
  , enumKeys       = __webpack_require__(148)
  , isArray        = __webpack_require__(152)
  , anObject       = __webpack_require__(8)
  , toIObject      = __webpack_require__(7)
  , toPrimitive    = __webpack_require__(41)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(64)
  , gOPNExt        = __webpack_require__(161)
  , $GOPD          = __webpack_require__(160)
  , $DP            = __webpack_require__(3)
  , $keys          = __webpack_require__(14)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(35).f  = $propertyIsEnumerable;
  __webpack_require__(66).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(34)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_176__;

/***/ })
/******/ ]);
});