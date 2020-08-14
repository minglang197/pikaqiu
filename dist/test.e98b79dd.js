// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n    box-sizing: border-box;\n}\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nbody {\n    background-color: #ffcb00;\n}\n.skin {\n    margin-top: 100px;\n}\n.nose {\n    position: relative;\n    width: 0;\n    height: 0;\n    border: 20px solid transparent;\n    border-top-color: black;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    z-index: 100;\n}\n.eye-left, .eye-right {\n    position: relative;\n    width: 40px;\n    height: 40px;\n    border: 2px solid #000;\n    border-radius: 50%;\n    background-color: #000;\n}\n.eye-left {\n    left: 50%;\n    margin-left: -120px;\n    top: -60px;\n}\n.eye-right {\n    left: 50%;\n    margin-left: 70px;\n    top: -100px;\n}\n.eye-left .l-child,.eye-right .r-child {\n    position: absolute;\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #fff;\n}\n.eye-left .l-child {\n    left: 14px;\n    top: 5px;\n}\n.eye-right .r-child {\n    right: 14px;\n    top: 5px;\n}\n.mouth {\n    height: 200px;\n    width: 180px;\n    position: relative;\n    left: 50%;\n    margin-left: -90px;\n    top: -100px;\n    overflow: hidden;\n}\n.mouth .up {\n    position: relative;\n}\n.mouth .up::before,.mouth .up::after {\n    position: absolute;\n    content: \"\";\n    height: 30px;\n    width: 80px;\n    border: 3px solid transparent;\n    border-bottom-color: #000;\n    z-index: 1;\n    background-color: #ffcb00;\n}\n.mouth .up::before {\n    right: 91px;\n    transform: rotate(-25deg);\n    border-bottom-left-radius: 100%;\n}\n.mouth .up::after {\n    left: 91px;\n    border-bottom-right-radius: 100%;\n    transform: rotate(25deg);\n}\n.mouth .down {\n    position: relative;\n    width: 110px;\n    height: 400px;\n    left: 50%;\n    top: -243px;\n    margin-left: -55px;\n    border-radius: 80px/300px;\n    border: 2px solid #000;\n    background-color: rgb(161,30,22);\n    overflow: hidden;\n    z-index: -99;\n}\n.mouth .down .d-child {\n    position: absolute;\n    height: 200px;\n    width: 150px;\n    bottom: -78px;\n    border-radius: 50%;\n    background-color: rgb(255,91,93);\n    transform: rotate(-45deg);\n}\n.wrap {\n    position: relative;\n    width: 128px;\n    height:18px;\n    top: -311px;\n    left: 50%;\n    margin-left: -65px;\n    border: 10px solid #ffcb00;\n    z-index: 10;\n}\n.face1, .face2 {\n    height: 60px;\n    width: 60px;\n    border-radius: 50%;\n    border: 2px solid #000;\n    background-color: rgb(255,24,0);\n}\n.face1 {\n    position: relative;\n    top: -277px;\n    left: 50%;\n    margin-left: -172px;\n}\n.face2 {\n    position: relative;\n    top: -338px;\n    left: 50%;\n    margin-left: 113px;\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  timer: 100,
  ul: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  hash: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnAgain': 'again'
  },
  n: 1,
  init: function init() {
    player.ul.demo.innerText = _css.default.substr(0, player.n);
    player.ul.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvent();
    player.play();
  },
  bindEvent: function bindEvent() {
    for (var key in player.hash) {
      if (player.hash.hasOwnProperty(key)) {
        var value = player.hash[key];
        document.querySelector(key).onclick = player[value];
        document.querySelector(key).touch = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ul.demo.innerText = _css.default.substr(0, player.n);
    player.ul.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ul.demo.scrollTop = player.ul.demo.scrollHeight;
  },
  load: function load() {
    window.location.reload();
  },
  pause: function pause() {
    return window.clearInterval(player.id);
  },
  play: function play() {
    player.id = setInterval(player.run, player.timer);
  },
  slow: function slow() {
    player.pause();
    player.timer = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.timer = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.timer = 0;
    player.play();
  },
  again: function again() {
    player.load();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/吉明朗/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51638" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/吉明朗/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map