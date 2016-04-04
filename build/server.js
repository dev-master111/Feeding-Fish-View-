require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _set = __webpack_require__(3);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(5);
  
  var _path = __webpack_require__(6);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(7);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(8);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(9);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(10);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _jsonwebtoken = __webpack_require__(11);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(13);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(14);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(15);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _Html = __webpack_require__(16);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(18);
  
  var _ErrorPage2 = __webpack_require__(20);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _routes = __webpack_require__(28);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(110);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(17);
  
  var _passport_mysql = __webpack_require__(111);
  
  var _passport_mysql2 = _interopRequireDefault(_passport_mysql);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line import/no-unresolved
  
  // import models from './data/models';
  // import schema from './data/schema';
  
  // import expressGraphQL from 'express-graphql';
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  
  app.use(_passport_mysql2.default.initialize());
  app.use(_passport_mysql2.default.session());
  
  app.post('/login/auth', function (req, res, next) {
    _passport_mysql2.default.authenticate('local', function (err, user, info) {
      console.log(info);
      if (err) {
        return next(err);
      }
      console.log('No errors...');
      if (!user) {
        return res.redirect('/login');
      }
      console.log('Found user');
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/');
      });
    })(req, res, next);
  });
  
  // app.use(function(req,res,next){
  //
  //   var authenticated = req.isAuthenticated();
  //   console.log('Request AUthenticated',authenticated);
  //   if(!req.isAuthenticated()){
  //     req.url = '/login';
  //   }
  //   next();
  // })
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  // app.use('/graphql', expressGraphQL(req => ({
  //   schema,
  //   graphiql: true,
  //   rootValue: { request: req },
  //   pretty: process.env.NODE_ENV !== 'production',
  // })));
  // req.isAuthenticated() ?
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var css, statusCode, data, html;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        css = new _set2.default();
                        statusCode = 200;
                        data = { title: '', description: '', style: '', script: _assets2.default.main.js, children: '' };
  
                        console.log('THIS SHOULD BE CORRECT...', req.isAuthenticated());
                        _context.next = 6;
                        return _universalRouter2.default.resolve(_routes2.default, {
                          path: req.path, // Check if authenticated, otherwise go to login
                          query: req.query,
                          isAuthenticated: req.isAuthenticated(),
                          context: {
                            insertCss: function insertCss() {
                              for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                                styles[_key] = arguments[_key];
                              }
  
                              styles.forEach(function (style) {
                                return css.add(style._getCss());
                              }); // eslint-disable-line no-underscore-dangle, max-len
                            },
                            setTitle: function setTitle(value) {
                              return data.title = value;
                            },
                            setMeta: function setMeta(key, value) {
                              return data[key] = value;
                            }
                          },
                          render: function render(component) {
                            var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  
                            // console.log('inside render of UniversalRouter', component);
                            css = new _set2.default();
                            statusCode = status;
                            data.children = _server2.default.renderToString(component);
                            data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                            return true;
                          }
                        });
  
                      case 6:
  
                        // console.log('outside render func of UniversalRouter with statusCode', statusCode);
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
                        res.status(statusCode);
                        res.send('<!doctype html>' + html);
  
                      case 9:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 2);
  
            case 2:
              _context2.next = 7;
              break;
  
            case 4:
              _context2.prev = 4;
              _context2.t1 = _context2['catch'](0);
  
              // console.log('some error occured', err);
              next(_context2.t1);
  
            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 4]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var statusCode = err.status || 500;
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err }))
    ));
    res.status(statusCode);
    res.send('<!doctype html>' + html);
  });
  
  app.listen(_config.port, function () {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  // models.sync().catch(err => console.error(err.stack)).then(() => {
  //   app.listen(port, () => {
  //     console.log(`The server is running at http://localhost:${port}/`);
  //   });
  // });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(17);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        children = _ref.children;
  
    return _react2.default.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap.min.css' }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap-social.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/sb-admin.css' }),
        _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style } })
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children } }),
        script && _react2.default.createElement('script', { src: script }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true })
      )
    );
  }
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string.isRequired,
    script: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ },
/* 17 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(20);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (true) {
      errorMessage = _react2.default.createElement(
        'pre',
        null,
        error.stack
      );
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        content
      ),
      errorMessage
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.propTypes = { error: _react.PropTypes.object.isRequired };
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(21);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 22 */
/***/ function(module, exports) {

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


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(24);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(25);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(26);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(27);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
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
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(29);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(47);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _login = __webpack_require__(60);
  
  var _login2 = _interopRequireDefault(_login);
  
  var _error = __webpack_require__(67);
  
  var _error2 = _interopRequireDefault(_error);
  
  var _live = __webpack_require__(68);
  
  var _live2 = _interopRequireDefault(_live);
  
  var _finances = __webpack_require__(100);
  
  var _finances2 = _interopRequireDefault(_finances);
  
  var _logs = __webpack_require__(104);
  
  var _logs2 = _interopRequireDefault(_logs);
  
  var _blank = __webpack_require__(108);
  
  var _blank2 = _interopRequireDefault(_blank);
  
  var _Header = __webpack_require__(38);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = [{
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_home2.default, _login2.default, _live2.default, _finances2.default, _logs2.default, _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          render = _ref.render,
          context = _ref.context,
          isAuthenticated = _ref.isAuthenticated;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                console.log(isAuthenticated);
  
                if (!(component === undefined)) {
                  _context.next = 6;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 6:
                return _context.abrupt('return', render(_react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'div',
                    { id: 'page-wrapper', className: 'page-wrapper' },
                    _react2.default.createElement(
                      _App2.default,
                      { authenticated: isAuthenticated, context: context },
                      component
                    )
                  )
                )));
  
              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }, {
    path: '/error',
    children: [_error2.default],
    action: function action(_ref2) {
      var _this2 = this;
  
      var next = _ref2.next,
          render = _ref2.render,
          context = _ref2.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var component;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return next();
  
              case 2:
                component = _context2.sent;
  
                if (!(component === undefined)) {
                  _context2.next = 5;
                  break;
                }
  
                return _context2.abrupt('return', component);
  
              case 5:
                return _context2.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(35);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(36);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(38);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
  
      // constructor(props) {
      //   super(props);
      //   if(!props.authenticated){
      //     history.push('/login');
      //   }
      //   // this.onPieEnter = this.onPieEnter.bind(this);
      // }
  
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var insertCss = this.props.context.insertCss;
  
        this.removeCss = insertCss(_App2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
  
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        // console.log('\n********\n', this.props, '\n********12334\n');
        return this.props.children;
      }
    }]);
    return App;
  }(_react.Component);
  // import Feedback from '../Feedback';
  // import Footer from '../Footer';
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  App.propTypes = {
    context: _react.PropTypes.shape({
      insertCss: _react.PropTypes.func,
      setTitle: _react.PropTypes.func,
      setMeta: _react.PropTypes.func
    }),
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  };
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(37);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./App.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./App.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/App/App.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"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","file":"App.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _Navbar = __webpack_require__(40);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _jquery = __webpack_require__(45);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var logo = __webpack_require__(46);
  
  var NavBarData = {
    messages: [{ cageid: 1, timeAlerted: new Date("02/10/2017") }],
    // Progressbar =[success(green),info(blue),warning(yellow),danger(red)]
    cageStatus: [{ cageid: 1, percentagefed: 80, lastFeed: "12:12", nextFeed: "4:16", cagestatus: "success" }, { cageid: 2, percentagefed: 25, lastFeed: "11:11", nextFeed: "13:40", cagestatus: "warning" }, { cageid: 3, percentagefed: 50, lastFeed: "8:59", nextFeed: "14:13", cagestatus: "success" }, { cageid: 4, percentagefed: 8, lastFeed: "7:30", nextFeed: "17:35", cagestatus: "danger" }]
  };
  
  function Header() {
    function timeSince(date) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = Math.floor(seconds / 31536000);
      if (interval > 1) {
        return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }
    function renderCageStatus() {
      var cages = NavBarData.cageStatus;
      return cages.map(function (element, index) {
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { style: { width: 200 }, eventKey: index, key: index },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              ' ',
              _react2.default.createElement(
                'strong',
                null,
                'Cage ',
                element.cageid
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: 'pull-right text-muted' },
                element.percentagefed,
                '% Complete'
              ),
              ' '
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: element.cagestatus, now: element.percentagefed })
            )
          )
        );
      });
    };
    function renderMessagesStatus() {
      var messages = NavBarData.messages,
          toRet = [];
      messages.forEach(function (element, index) {
        toRet.push(_react2.default.createElement(
          _reactBootstrap.MenuItem,
          { style: { width: 300 }, eventKey: index, key: index },
          _react2.default.createElement(
            'div',
            null,
            ' ',
            _react2.default.createElement(
              'strong',
              null,
              'Cage ',
              element.cageid
            ),
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'pull-right text-muted' },
              ' ',
              _react2.default.createElement(
                'em',
                null,
                timeSince(element.timeAlerted),
                ' ago'
              ),
              ' '
            ),
            ' '
          ),
          _react2.default.createElement(
            'div',
            null,
            'Cage alert!'
          )
        ));
        toRet.push(_react2.default.createElement(_reactBootstrap.MenuItem, { key: index + messages.length, divider: true }));
      });
      toRet.pop();return toRet;
    };
    return _react2.default.createElement(
      'div',
      { id: 'wrapper', className: 'content' },
      _react2.default.createElement(
        _Navbar2.default,
        { fluid: true, style: { margin: 0 } },
        _react2.default.createElement(
          _Navbar.Brand,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: logo, alt: 'Start React', title: 'Start React' }),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle', onClick: function onClick() {
                  toggleMenu();
                }, style: { position: 'absolute', right: 0, top: 0 } },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-top-links navbar-right' },
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { bsClass: 'dropdown', title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-fw' })
              ), id: 'navDropdown1' },
            renderMessagesStatus()
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                ' '
              ), id: 'navDropdown2222' },
            renderCageStatus()
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }), id: 'navDropdown4' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '1' },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }),
                ' User Profile '
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '2' },
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-gear fa-fw' }),
                ' Settings '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4', onClick: function onClick(event) {
                  _history2.default.push('/login');
                } },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-sign-out fa-fw' }),
                ' Logout '
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-left collapse navbar-collapse' },
          _react2.default.createElement(
            'li',
            { className: 'active' },
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Dashboard'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Live'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Finances'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Logs'
            )
          )
        )
      )
    );
  }
  function toggleMenu() {
    if ((0, _jquery2.default)(".navbar-collapse").hasClass('collapse')) {
      (0, _jquery2.default)(".navbar-collapse").removeClass('collapse');
    } else {
      (0, _jquery2.default)(".navbar-collapse").addClass('collapse');
    }
  }
  
  exports.default = Header;

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Navbar");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(42);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(43);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(44);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var history = (0, _useQueries2.default)( false ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                    *
                                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                    *
                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                    */
  
  exports.default = history;

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("jquery");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "components/Header/observelogo.png?49fb0843c4df70d68b1fcbd3c524bc06";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(48);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import fetch from '../../core/fetch';
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', _react2.default.createElement(_Home2.default, null));
  
              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _Home = __webpack_require__(49);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _CamVideoDashboard = __webpack_require__(51);
  
  var _CamVideoDashboard2 = _interopRequireDefault(_CamVideoDashboard);
  
  var _Navigation = __webpack_require__(58);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Observe';
  
  var cages = [1, 2, 3, 4, 5, 6, 7, 8].map(function (element, index, arry) {
    return { id: index,
      lastFeed: "0" + element + ":" + parseInt(Math.random() * 59, 10),
      nextFeed: "1" + element + ":" + parseInt(Math.random() * 59, 10),
      percentagefed: parseInt(Math.random() * 100, 10),
      color: Math.random() > 0.85 ? 'red' : 'green' };
  });
  
  function Home(props, context) {
    var noPad = {
      padding: 0,
      margin: 0
    };
    context.setTitle(title);
    function generateVideos() {
      return cages.map(function (element, index) {
        return _react2.default.createElement(
          'div',
          { key: index.toString(), className: 'col-lg-3 col-md-4 col-sm-6', style: noPad },
          _react2.default.createElement(_CamVideoDashboard2.default, { props: element })
        );
      });
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Navigation2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        generateVideos()
      )
    );
  }
  
  Home.propTypes = {
    // news: PropTypes.arrayOf(PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   link: PropTypes.string.isRequired,
    //   contentSnippet: PropTypes.string,
    // })).isRequired,
  };
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(50);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home_root_2IM {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home_container_2Ye {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home_news_oTy {\n  padding: 0;\n}\n\n.Home_newsItem_3Ob {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home_newsTitle_1yW {\n  font-size: 1.125em;\n}\n\n.Home_newsTitle_1yW,\n.Home_newsDesc_21L {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home_root_2IM",
  	"container": "Home_container_2Ye",
  	"news": "Home_news_oTy",
  	"newsItem": "Home_newsItem_3Ob",
  	"newsTitle": "Home_newsTitle_1yW",
  	"newsDesc": "Home_newsDesc_21L"
  };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _style = __webpack_require__(52);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _rcProgress = __webpack_require__(54);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _reactBootstrap2 = _interopRequireDefault(_reactBootstrap);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _cut = __webpack_require__(56);
  
  var _cut2 = _interopRequireDefault(_cut);
  
  var _reactHtml5video = __webpack_require__(57);
  
  var _reactHtml5video2 = _interopRequireDefault(_reactHtml5video);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var colorMap = ['#FE8C6A', '#3FC7FA', '#85D262'];
  
  var CamVideoDashboard = function (_Component) {
    (0, _inherits3.default)(CamVideoDashboard, _Component);
  
    function CamVideoDashboard(props) {
      (0, _classCallCheck3.default)(this, CamVideoDashboard);
      return (0, _possibleConstructorReturn3.default)(this, (CamVideoDashboard.__proto__ || (0, _getPrototypeOf2.default)(CamVideoDashboard)).call(this, props));
    }
  
    (0, _createClass3.default)(CamVideoDashboard, [{
      key: 'render',
      value: function render() {
        var props = this.props.props,
            ProgressColour = colorMap[parseInt(props.percentagefed * 0.03, 10)],
            color = { color: props.color, float: "right" };
        return _react2.default.createElement(
          'div',
          { key: props.id, className: _style2.default.panelColour },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('row', _style2.default.xtitle) },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-8 col-sm-8' },
              ' ',
              _react2.default.createElement(
                'h4',
                null,
                'Cage ID : ',
                props.id
              ),
              ' '
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-4 col-sm-4' },
              _react2.default.createElement('i', { className: 'fa fa-2x fa-dot-circle-o', style: color, 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { href: '/live' },
              _react2.default.createElement(
                _reactHtml5video2.default,
                { autoPlay: true, loop: true, muted: true, ref: 'video', className: _style2.default.main__video },
                _react2.default.createElement('source', { src: _cut2.default, type: 'video/mp4' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_rcProgress.Line, { percent: props.percentagefed, strokeWidth: 2, strokeColor: ProgressColour })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-4' },
              'Last Feed:',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                { className: _style2.default.textSize },
                props.lastFeed
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-4' },
              'Next Feed:',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                { className: _style2.default.textSize },
                props.nextFeed
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-4' },
              'Feed (%):',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                { className: _style2.default.textSize },
                props.percentagefed,
                '%'
              )
            )
          )
        );
      }
    }]);
    return CamVideoDashboard;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(_style2.default)(CamVideoDashboard);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(53);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./style.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./style.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, ".style_panelColour_15y {\n  background: white;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n  border-radius: 5px;\n  margin: 7.5px;\n}\n\n.style_textSize_3co {\n\tfont-size: 13px;\n\tcolor: #73879C\n\n}\n\n.style_xtitle_3qP{\n\tborder-bottom: 2px solid #E6E9ED;\n\tmargin-bottom: 6px;\n\tmargin-right: 0px;\n\tmargin-left: 0px;\n}\n\n.style_main__video_1HJ video{\n  width:100%;\n  height:100%;\n}\n", "", {"version":3,"sources":["/./components/CamVideoDashboard/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,4HAA4H;EAC5H,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,cAAc;CACf;;AAED;CACC,gBAAgB;CAChB,cAAc;;CAEd;;AACD;CACC,iCAAiC;CACjC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB;;AACD;EACE,WAAW;EACX,YAAY;CACb","file":"style.css","sourcesContent":[".panelColour {\n  background: white;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n  border-radius: 5px;\n  margin: 7.5px;\n}\n\n.textSize {\n\tfont-size: 13px;\n\tcolor: #73879C\n\n}\n.xtitle{\n\tborder-bottom: 2px solid #E6E9ED;\n\tmargin-bottom: 6px;\n\tmargin-right: 0px;\n\tmargin-left: 0px;\n}\n.main__video video{\n  width:100%;\n  height:100%;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"panelColour": "style_panelColour_15y",
  	"textSize": "style_textSize_3co",
  	"xtitle": "style_xtitle_3qP",
  	"main__video": "style_main__video_1HJ"
  };

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("rc-progress");

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "cb5c87bae5f81f2f27b5ffaebd141a18.mp4";

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = require("react-html5video");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _Navbar = __webpack_require__(40);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _jquery = __webpack_require__(45);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var logo = __webpack_require__(59);
  
  var NavBarData = {
    messages: [{ cageid: 1, timeAlerted: new Date("02/10/2017") }],
    // Progressbar =[success(green),info(blue),warning(yellow),danger(red)]
    cageStatus: [{ cageid: 1, percentagefed: 80, lastFeed: "12:12", nextFeed: "4:16", cagestatus: "success" }, { cageid: 2, percentagefed: 25, lastFeed: "11:11", nextFeed: "13:40", cagestatus: "warning" }, { cageid: 3, percentagefed: 50, lastFeed: "8:59", nextFeed: "14:13", cagestatus: "success" }, { cageid: 4, percentagefed: 8, lastFeed: "7:30", nextFeed: "17:35", cagestatus: "danger" }]
  };
  
  function Navigation() {
    function timeSince(date) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = Math.floor(seconds / 31536000);
      if (interval > 1) {
        return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }
    function renderCageStatus() {
      var cages = NavBarData.cageStatus;
      return cages.map(function (element, index) {
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { style: { width: 200 }, eventKey: index, key: index },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              ' ',
              _react2.default.createElement(
                'strong',
                null,
                'Cage ',
                element.cageid
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: 'pull-right text-muted' },
                element.percentagefed,
                '% Complete'
              ),
              ' '
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: element.cagestatus, now: element.percentagefed })
            )
          )
        );
      });
    };
    function renderMessagesStatus() {
      var messages = NavBarData.messages,
          toRet = [];
      messages.forEach(function (element, index) {
        toRet.push(_react2.default.createElement(
          _reactBootstrap.MenuItem,
          { style: { width: 300 }, eventKey: index, key: index },
          _react2.default.createElement(
            'div',
            null,
            ' ',
            _react2.default.createElement(
              'strong',
              null,
              'Cage ',
              element.cageid
            ),
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'pull-right text-muted' },
              ' ',
              _react2.default.createElement(
                'em',
                null,
                timeSince(element.timeAlerted),
                ' ago'
              ),
              ' '
            ),
            ' '
          ),
          _react2.default.createElement(
            'div',
            null,
            'Cage alert!'
          )
        ));
        toRet.push(_react2.default.createElement(_reactBootstrap.MenuItem, { key: index + messages.length, divider: true }));
      });
      toRet.pop();return toRet;
    };
  
    return _react2.default.createElement(
      'div',
      { id: 'wrapper', className: 'content' },
      _react2.default.createElement(
        _Navbar2.default,
        { fluid: true, style: { margin: 0 } },
        _react2.default.createElement(
          _Navbar.Brand,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: logo }),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle', onClick: function onClick() {
                  toggleMenu();
                }, style: { position: 'absolute', right: 0, top: 0 } },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-top-links navbar-right' },
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { bsClass: 'dropdown', title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-fw' })
              ), id: 'navDropdown1' },
            renderMessagesStatus()
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                ' '
              ), id: 'navDropdown2222' },
            renderCageStatus()
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }), id: 'navDropdown4' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '1' },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }),
                ' User Profile '
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '2' },
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-gear fa-fw' }),
                ' Settings '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4', onClick: function onClick(event) {
                  _history2.default.push('/login');
                } },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-sign-out fa-fw' }),
                ' Logout '
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-left collapse navbar-collapse' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/' },
              'Dashboard'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/live' },
              'Live'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/finances' },
              'Finances'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/logs' },
              'Logs'
            )
          )
        )
      )
    );
  }
  function toggleMenu() {
    if ((0, _jquery2.default)(".navbar-collapse").hasClass('collapse')) {
      (0, _jquery2.default)(".navbar-collapse").removeClass('collapse');
    } else {
      (0, _jquery2.default)(".navbar-collapse").addClass('collapse');
    }
  }
  
  exports.default = Navigation;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "components/Navigation/observelogo.png?49fb0843c4df70d68b1fcbd3c524bc06";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Login = __webpack_require__(61);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/login',
  
    action: function action() {
      return _react2.default.createElement(_Login2.default, null);
    }
  };
  // import App from '../../components/App';

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(62);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(63);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Login = __webpack_require__(64);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  var title = 'Log In'; /**
                         * React Starter Kit (https://www.reactstarterkit.com/)
                         *
                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                         *
                         * This source code is licensed under the MIT license found in the
                         * LICENSE.txt file in the root directory of this source tree.
                         */
  
  function submitHandler(e) {
    e.preventDefault();
    _history2.default.push('/');
  }
  
  function Login(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      { className: 'col-md-4 col-md-offset-4' },
      _react2.default.createElement(
        _Panel2.default,
        { header: _react2.default.createElement(
            'h3',
            null,
            'Sign In'
          ), className: 'login-panel' },
        _react2.default.createElement(
          'form',
          { action: '/login/auth', role: 'login', method: 'post' },
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                className: 'form-control',
                placeholder: 'Username',
                name: 'username'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Password',
                type: 'password',
                name: 'password'
              })
            ),
            _react2.default.createElement(
              _Button2.default,
              { type: 'submit', bsSize: 'large', bsStyle: 'success', block: true },
              'Login'
            )
          )
        )
      )
    );
  }
  
  Login.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Button");

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Panel");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(65);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n.Login_progress-bar_1RO {\n    color: #333;\n}\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n* {\n    -webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n.Login_form-control_1is {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box)\n\t}\n.Login_form-control_1is:focus {\n  z-index: 2;\n}\nbody {\n\tbackground: url(" + __webpack_require__(66) + ") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    background-size: cover;\n}\n.Login_login-form_o2r {\n\tmargin-top: 60px;\n}\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\nform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\nform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\nform[role=login] > div {\n\t\ttext-align: center;\n\t}\n.Login_form-links_1v0 {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n.Login_form-links_1v0 a {\n\t\tcolor: #fff;\n\t}\n.Login_root_rQN {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login_container_2BV {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login_lead_1mJ {\n  font-size: 1.25em;\n}\n.Login_formGroup_25T {\n  margin-bottom: 15px;\n}\n.Login_label_2G0 {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login_input_1bT {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Login_input_1bT:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_button_11e {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login_button_11e:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login_button_11e:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_facebook_2nZ {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login_facebook_2nZ:hover {\n  background: #2d4373;\n}\n.Login_google_23H {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login_google_23H:hover {\n  background: #c23321;\n}\n.Login_twitter_AJd {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login_twitter_AJd:hover {\n  background: #2795e9;\n}\n.Login_icon_34k {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login_lineThrough_Upb {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login_lineThrough_Upb::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login_lineThrough_Upb::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css","/../<no source>"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD,iBAAiB;AACjB;;EAEE;AAEF;IACI,YAAY;CACf;AAED;;;EAGE;AAEF;IACI,+BAA+B;SAE1B,uBAAuB;CAC/B,cAAc;CACd;AAEG;GACD,mBAAmB;GACnB,gBAAgB;GAChB,aAAa;GACb,cAAc;EACf;CEpCF,CFyCE;AAHA;EACE,WAAW;CACZ;AAGH;CACC,wEAA+D;IAC5D,+BAA+B;IAG/B,uBAAuB;CAC1B;AAED;CACC,iBAAiB;CACjB;AAED;CACC,eAAe;CACf,oBAAoB;CACpB,cAAc;CACd,oBAAoB;CACpB,yBAAyB;CACzB,4BAA4B;CAC5B;AACA;EACC,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB;AACD;;EAEC,gBAAgB;EAChB,eAAe;EACf;AACD;EACC,mBAAmB;EACnB;AAEF;CACC,mBAAmB;CACnB,gBAAgB;CAChB,oBAAoB;CACpB;AACA;EACC,YAAY;EACZ;AAGF;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n\n.progress-bar {\n    color: #333;\n}\n\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n\n* {\n    -webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n\n    .form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\nbody {\n\tbackground: url('./GHr12sH.jpg') no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n.login-form {\n\tmargin-top: 60px;\n}\n\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\n\tform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\n\tform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\n\tform[role=login] > div {\n\t\ttext-align: center;\n\t}\n\n.form-links {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n\t.form-links a {\n\t\tcolor: #fff;\n\t}\n\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n",null],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"progress-bar": "Login_progress-bar_1RO",
  	"form-control": "Login_form-control_1is",
  	"login-form": "Login_login-form_o2r",
  	"form-links": "Login_form-links_1v0",
  	"root": "Login_root_rQN",
  	"container": "Login_container_2BV",
  	"lead": "Login_lead_1mJ",
  	"formGroup": "Login_formGroup_25T",
  	"label": "Login_label_2G0",
  	"input": "Login_input_1bT",
  	"button": "Login_button_11e",
  	"facebook": "Login_facebook_2nZ Login_button_11e",
  	"google": "Login_google_23H Login_button_11e",
  	"twitter": "Login_twitter_AJd Login_button_11e",
  	"icon": "Login_icon_34k",
  	"lineThrough": "Login_lineThrough_Upb"
  };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/login/GHr12sH.jpg?af45b16009fc6eb4e394cbed38d7d602";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(29);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(18);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render,
          context = _ref.context,
          error = _ref.error;
  
      // console.log('error obj inside error index.js', error);
      return render(_react2.default.createElement(
        _App2.default,
        { context: context, error: error },
        _react2.default.createElement(_ErrorPage2.default, { error: error })
      ), error.status || 500);
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Live = __webpack_require__(69);
  
  var _Live2 = _interopRequireDefault(_Live);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/live',
    action: function action() {
      return _react2.default.createElement(_Live2.default, null);
    }
  };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Live = __webpack_require__(70);
  
  var _Live2 = _interopRequireDefault(_Live);
  
  var _reactSidebar = __webpack_require__(72);
  
  var _reactSidebar2 = _interopRequireDefault(_reactSidebar);
  
  var _Navigation = __webpack_require__(58);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Draggable = __webpack_require__(73);
  
  var _Draggable2 = _interopRequireDefault(_Draggable);
  
  var _Store = __webpack_require__(97);
  
  var _Store2 = _interopRequireDefault(_Store);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  var title = 'Live';
  
  var StoreDB = [{ moduleName: 'Sensor', id: 1 }, { moduleName: 'Camera', id: 2 }, { moduleName: 'Accoustic Camera', id: 3 }, { moduleName: 'Weather', id: 4 }];
  var x = new Date();
  var weather_data = { date: x.getUTCDay(),
    RainChance: 4,
    Temp: 53,
    tide: 23,
    weather: "Cloudy",
    weather_3: ["fa fa-cloud", "fa fa-tint", "fa fa-sun-o"] };
  var data = [{ i: '0', x: 0, y: 0, w: 6, h: 3, minW: 4, minH: 3, componentName: "Sensor", props: { weather_data: weather_data } }, { i: '1', x: 6, y: 0, w: 6, h: 3, minW: 4, minH: 3, componentName: "Weather", props: { weather_data: weather_data } }, { i: '2', x: 0, y: 0, w: 6, h: 3, minW: 4, minH: 3, componentName: "Camera", props: { weather_data: weather_data } }];
  
  var SideBarWrapper = _react2.default.createClass({
    displayName: 'SideBarWrapper',
    getInitialState: function getInitialState() {
      return {
        docked: false,
        open: false,
        transitions: true,
        touch: true,
        shadow: true,
        pullRight: false,
        touchHandleWidth: 20,
        dragToggleDistance: 30
      };
    },
    onSetOpen: function onSetOpen() {
      this.setState({ open: !this.state.open });
    },
    itemSelected: function itemSelected(elementId) {
      this.setState({
        open: !this.state.open,
        itemAdded: { i: '0', x: 0, y: 0, w: 6, h: 3, minW: 4, minH: 3,
          componentName: elementId, props: { weather_data: weather_data } }
  
      });
    },
    render: function render() {
      var sidebar = _react2.default.createElement(_Store2.default, { modules: this.props.modules, selectedItem: this.itemSelected });
  
      var StoreProps = {
        sidebar: sidebar,
        docked: this.state.docked,
        sidebarClassName: 'custom-sidebar-class',
        open: this.state.open,
        touch: this.state.touch,
        shadow: this.state.shadow,
        pullRight: this.state.pullRight,
        touchHandleWidth: this.state.touchHandleWidth,
        dragToggleDistance: this.state.dragToggleDistance,
        transitions: this.state.transitions,
        onSetOpen: this.onSetOpen
      };
  
      return _react2.default.createElement(
        _reactSidebar2.default,
        StoreProps,
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_Draggable2.default, { ref: 'draggable', data: data, openTab: this.onSetOpen, itemAdded: this.state.itemAdded })
      );
    }
  });
  
  function Live(props, context) {
    context.setTitle(title);
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(SideBarWrapper, { modules: StoreDB })
    );
  }
  
  Live.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Live2.default)(Live);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(71);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Live.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Live.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n.Live_progress-bar_u5C {\n    color: #333;\n}\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n* {\n    -webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n.Live_form-control_1Er {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box)\n\t}\n.Live_form-control_1Er:focus {\n  z-index: 2;\n}\nbody {\n    -webkit-background-size: cover;\n    background-size: cover;\n}\n.Live_login-form_Gjo {\n\tmargin-top: 60px;\n}\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\nform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\nform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\nform[role=login] > div {\n\t\ttext-align: center;\n\t}\n.Live_form-links__zq {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n.Live_form-links__zq a {\n\t\tcolor: #fff;\n\t}\n.Live_root_jlb {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Live_container_3nJ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Live_lead_2_B {\n  font-size: 1.25em;\n}\n.Live_formGroup_2b9 {\n  margin-bottom: 15px;\n}\n.Live_label_3ie {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Live_input_1w_ {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Live_input_1w_:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Live_button_3Ia {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Live_button_3Ia:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Live_button_3Ia:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Live_facebook_1AU {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Live_facebook_1AU:hover {\n  background: #2d4373;\n}\n.Live_google_cwr {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Live_google_cwr:hover {\n  background: #c23321;\n}\n.Live_twitter_3mx {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Live_twitter_3mx:hover {\n  background: #2795e9;\n}\n.Live_icon_1uT {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Live_lineThrough_Qjr {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Live_lineThrough_Qjr::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Live_lineThrough_Qjr::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n/*Test*/\n.Live_react-grid-layout_CfZ {\n  position: relative;\n  -webkit-transition: height 200ms ease;\n  -o-transition: height 200ms ease;\n  transition: height 200ms ease;\n}\n.Live_react-grid-item_1A6 {\n  -webkit-transition: all 200ms ease;\n  -o-transition: all 200ms ease;\n  transition: all 200ms ease;\n  -webkit-transition-property: left, top;\n  -o-transition-property: left, top;\n  transition-property: left, top;\n}\n.Live_react-grid-item_1A6.Live_cssTransforms_2Oi {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: -o-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform, -o-transform;\n}\n.Live_react-grid-item_1A6.Live_resizing_12b {\n  z-index: 1;\n}\n.Live_react-grid-item_1A6.Live_react-draggable-dragging_23P {\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n  z-index: 3;\n}\n.Live_react-grid-item_1A6.Live_react-grid-placeholder_nmm {\n  background: red;\n  opacity: 0.2;\n  -webkit-transition-duration: 100ms;\n       -o-transition-duration: 100ms;\n          transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.Live_react-grid-item_1A6 > .Live_react-resizable-handle_2Nd {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  -webkit-background-origin: content-box;\n          background-origin: content-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: se-resize;\n}\n/*OTHER CSS*/\n#Live_content_29I {\n  width: 100%;\n}\n.Live_react-grid-layout_CfZ {\n  background: #eee;\n}\n.Live_layoutJSON_1mx {\n  background: #ddd;\n  border: 1px solid black;\n  margin-top: 10px;\n  padding: 10px;\n}\n.Live_columns_3f8 {\n  -moz-columns: 120px;\n  -webkit-columns: 120px;\n  columns: 120px;\n}\n.Live_react-grid-item_1A6 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Live_react-grid-item_1A6:not(.Live_react-grid-placeholder_nmm) {\n  background: #ccc;\n  border: 1px solid black;\n}\n.Live_react-grid-item_1A6.Live_resizing_12b {\n  opacity: 0.9;\n}\n.Live_react-grid-item_1A6.Live_static_1Su {\n  background: #cce;\n}\n.Live_react-grid-item_1A6 .Live_text_h4p {\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 24px;\n  background-color: red;\n}\n.Live_react-grid-item_1A6 .Live_minMax_1G5 {\n  font-size: 12px;\n}\n.Live_react-grid-item_1A6 .Live_add_2xj {\n  cursor: pointer;\n}\n.Live_react-grid-dragHandleExample_23o{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n", "", {"version":3,"sources":["/./routes/dashboardPages/live/Live.css","/./components/variables.css","/../<no source>"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD,iBAAiB;AACjB;;EAEE;AAEF;IACI,YAAY;CACf;AAED;;;EAGE;AAEF;IACI,+BAA+B;SAE1B,uBAAuB;CAC/B,cAAc;CACd;AAEG;GACD,mBAAmB;GACnB,gBAAgB;GAChB,aAAa;GACb,cAAc;EACf;CEpCF,CFyCE;AAHA;EACE,WAAW;CACZ;AAGH;IACI,+BAA+B;IAG/B,uBAAuB;CAC1B;AAED;CACC,iBAAiB;CACjB;AAED;CACC,eAAe;CACf,oBAAoB;CACpB,cAAc;CACd,oBAAoB;CACpB,yBAAyB;CACzB,4BAA4B;CAC5B;AACA;EACC,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB;AACD;;EAEC,gBAAgB;EAChB,eAAe;EACf;AACD;EACC,mBAAmB;EACnB;AAEF;CACC,mBAAmB;CACnB,gBAAgB;CAChB,oBAAoB;CACpB;AACA;EACC,YAAY;EACZ;AAGF;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb;AAID,QAAQ;AACR;EACE,mBAAmB;EACnB,sCAA8B;EAA9B,iCAA8B;EAA9B,8BAA8B;CAC/B;AACD;EACE,mCAA2B;EAA3B,8BAA2B;EAA3B,2BAA2B;EAC3B,uCAA+B;EAA/B,kCAA+B;EAA/B,+BAA+B;CAChC;AACD;EACE,+CAA+B;EAA/B,uCAA+B;EAA/B,qCAA+B;EAA/B,+BAA+B;EAA/B,gEAA+B;CAChC;AACD;EACE,WAAW;CACZ;AAED;EACE,yBAAiB;EAAjB,oBAAiB;EAAjB,iBAAiB;EACjB,WAAW;CACZ;AAED;EACE,gBAAgB;EAChB,aAAa;EACb,mCAA2B;OAA3B,8BAA2B;UAA3B,2BAA2B;EAC3B,WAAW;EACX,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;CACnB;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,SAAS;EACT,s3BAAs3B;EACt3B,kCAAkC;EAClC,qBAAqB;EACrB,6BAA6B;EAC7B,uCAA+B;UAA/B,+BAA+B;EAC/B,+BAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;CACnB;AAGD,aAAa;AACb;EACE,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,iBAAiB;EACjB,wBAAwB;CACzB;AACD;EACE,aAAa;CACd;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;CACvB;AAED;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,aAAa,CAAC,4CAA4C;EAC1D,aAAa;EAEb,qBAAqB;CACtB","file":"Live.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../../components/variables.css';\n\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n\n.progress-bar {\n    color: #333;\n}\n\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n\n* {\n    -webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n\n    .form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\nbody {\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n.login-form {\n\tmargin-top: 60px;\n}\n\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\n\tform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\n\tform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\n\tform[role=login] > div {\n\t\ttext-align: center;\n\t}\n\n.form-links {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n\t.form-links a {\n\t\tcolor: #fff;\n\t}\n\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n\n\n\n/*Test*/\n.react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n\n\n/*OTHER CSS*/\n#content {\n  width: 100%;\n}\n.react-grid-layout {\n  background: #eee;\n}\n.layoutJSON {\n  background: #ddd;\n  border: 1px solid black;\n  margin-top: 10px;\n  padding: 10px;\n}\n.columns {\n  -moz-columns: 120px;\n  -webkit-columns: 120px;\n  columns: 120px;\n}\n.react-grid-item {\n  box-sizing: border-box;\n}\n.react-grid-item:not(.react-grid-placeholder) {\n  background: #ccc;\n  border: 1px solid black;\n}\n.react-grid-item.resizing {\n  opacity: 0.9;\n}\n.react-grid-item.static {\n  background: #cce;\n}\n.react-grid-item .text {\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 24px;\n  background-color: red;\n}\n\n.react-grid-item .minMax {\n  font-size: 12px;\n}\n.react-grid-item .add {\n  cursor: pointer;\n}\n.react-grid-dragHandleExample{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n",null],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"progress-bar": "Live_progress-bar_u5C",
  	"form-control": "Live_form-control_1Er",
  	"login-form": "Live_login-form_Gjo",
  	"form-links": "Live_form-links__zq",
  	"root": "Live_root_jlb",
  	"container": "Live_container_3nJ",
  	"lead": "Live_lead_2_B",
  	"formGroup": "Live_formGroup_2b9",
  	"label": "Live_label_3ie",
  	"input": "Live_input_1w_",
  	"button": "Live_button_3Ia",
  	"facebook": "Live_facebook_1AU Live_button_3Ia",
  	"google": "Live_google_cwr Live_button_3Ia",
  	"twitter": "Live_twitter_3mx Live_button_3Ia",
  	"icon": "Live_icon_1uT",
  	"lineThrough": "Live_lineThrough_Qjr",
  	"react-grid-layout": "Live_react-grid-layout_CfZ",
  	"react-grid-item": "Live_react-grid-item_1A6",
  	"cssTransforms": "Live_cssTransforms_2Oi",
  	"resizing": "Live_resizing_12b",
  	"react-draggable-dragging": "Live_react-draggable-dragging_23P",
  	"react-grid-placeholder": "Live_react-grid-placeholder_nmm",
  	"react-resizable-handle": "Live_react-resizable-handle_2Nd",
  	"content": "Live_content_29I",
  	"layoutJSON": "Live_layoutJSON_1mx",
  	"columns": "Live_columns_3f8",
  	"static": "Live_static_1Su",
  	"text": "Live_text_h4p",
  	"minMax": "Live_minMax_1G5",
  	"add": "Live_add_2xj",
  	"react-grid-dragHandleExample": "Live_react-grid-dragHandleExample_23o"
  };

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("react-sidebar");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(74);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _extends2 = __webpack_require__(75);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _reactSidebar = __webpack_require__(72);
  
  var _reactSidebar2 = _interopRequireDefault(_reactSidebar);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _lodash = __webpack_require__(76);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _reactGridLayout = __webpack_require__(77);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Draggable = __webpack_require__(78);
  
  var _Draggable2 = _interopRequireDefault(_Draggable);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _jquery = __webpack_require__(45);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _Sensors = __webpack_require__(80);
  
  var _Sensors2 = _interopRequireDefault(_Sensors);
  
  var _Weather = __webpack_require__(86);
  
  var _Weather2 = _interopRequireDefault(_Weather);
  
  var _Camera = __webpack_require__(89);
  
  var _Camera2 = _interopRequireDefault(_Camera);
  
  var _CommentLog = __webpack_require__(93);
  
  var _CommentLog2 = _interopRequireDefault(_CommentLog);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var PureRenderMixin = __webpack_require__(96);
  
  var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);
  
  // Sellable components
  
  
  var components = {
    Sensor: _Sensors2.default,
    Weather: _Weather2.default,
    Camera: _Camera2.default,
    CommentLog: _CommentLog2.default
  };
  
  // TODO Theres some bug with adding and removing modules
  // TODO Make the components object and import come from a file
  
  var Draggable = _react2.default.createClass({
    displayName: 'Draggable',
  
    mixins: [PureRenderMixin],
  
    getInitialState: function getInitialState() {
      return {
        items: this.props.data,
        newCounter: this.props.data.length,
        end_x: this.props.data.reduce(function (a, b) {
          return a + b.w;
        }, 0),
        itemAdded: null
      };
    },
  
    // When the Store component is clicked, pass the item clicked to the pro
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (nextProps.itemAdded !== this.state.itemAdded) {
        if (this.state.itemAdded !== null) this.onAddItem(nextProps.itemAdded);
        this.state.itemAdded = nextProps.itemAdded;
      }
    },
    createElement: function createElement(el) {
      var removeStyle = { position: 'absolute', right: '5px', top: '5px', cursor: 'pointer' };
      var percent = { width: "100%", height: '100%', marginBottom: '45px' };
      var props = this.props,
          state = this.state;
      var CustomComponent = components[el.componentName];
      return _react2.default.createElement(
        'div',
        { key: el.i, 'data-grid': el, className: _Draggable2.default.panelColour },
        _react2.default.createElement(
          'div',
          { className: _Draggable2.default.full },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('row', _Draggable2.default.xtitle) },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-11' },
              ' ',
              _react2.default.createElement(
                'h4',
                null,
                el.componentName
              ),
              ' '
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('i', { className: 'fa fa-window-close', 'aria-hidden': 'true', style: removeStyle, onClick: this.onRemoveItem.bind(this, el.i) })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(CustomComponent, (0, _extends3.default)({}, el.props, props, { widgetState: this.state.items[el.i] }))
          )
        )
      );
    },
    onAddItem: function onAddItem(element) {
      this.setState({
        items: this.state.items.concat({
          i: this.state.newCounter.toString(),
          x: 0,
          y: Infinity, // puts it at the bottom
          w: element.w,
          h: element.h,
          minW: element.minW || 4,
          minH: element.minH || 3,
          props: element.props,
          componentName: element.componentName
        }),
        end_x: this.state.end_x + element.w,
        // Increment the counter to ensure key is always unique.
        newCounter: this.state.newCounter + 1
      });
    },
    onRemoveItem: function onRemoveItem(i) {
      // Actually need to go in and call destroy on the fucking component.
      this.setState({ items: _lodash2.default.reject(this.state.items, { i: i }) });
    },
  
    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange: function onBreakpointChange(breakpoint, cols) {
      this.setState({
        breakpoint: breakpoint,
        cols: cols
      });
    },
    onResize: function onResize(grid, gridItem) {
      // Need to do all this crap to make it resize while keeping dynamic props
      var currentState = this.state.items;
      var index = currentState.findIndex(function (element) {
        return toString(element.i) === toString(gridItem.i);
      });
      var updatedVar = currentState[index];
      (0, _keys2.default)(gridItem).forEach(function (objectKey) {
        if (typeof currentState[index][objectKey] !== 'undefined' && currentState[index][objectKey] !== grid[index][objectKey]) {
          updatedVar[objectKey] = gridItem[objectKey];
        }
      });
      grid = grid.map(function (el, i) {
        (0, _keys2.default)(currentState[i]).forEach(function (objectKey) {
          if (typeof el[objectKey] === 'undefined') {
            el[objectKey] = currentState[i][objectKey];
          }
        });
        return el;
      });
      this.setState({
        items: grid
      });
    },
    render: function render() {
      var _this = this;
  
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              _this.props.openTab();
            } },
          'Open Store'
        ),
        _react2.default.createElement(
          ResponsiveReactGridLayout,
          (0, _extends3.default)({ onLayoutChange: this.onLayoutChange, onBreakpointChange: this.onBreakpointChange,
            onResize: this.onResize, onResizeStop: this.onResizeStop, onResizeStart: this.onResizeStart
          }, this.props),
          _lodash2.default.map(this.state.items, this.createElement)
        )
      );
    }
  });
  
  Draggable.defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 8, sm: 4, xs: 4, xxs: 4 },
    rowHeight: 100
  };
  
  exports.default = (0, _withStyles2.default)(_Draggable2.default)(Draggable);

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = require("react-grid-layout");

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(79);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Draggable.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Draggable.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, ".Draggable_panelColour_JYd {\n  background: white;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n}\n.Draggable_full_jRl{\n  width:100%;\n  height:100%;\n}\n.Draggable_textSize_1-x {\n\tfont-size: 13px;\n\tcolor: #73879C\n\n}\n.Draggable_xtitle_1xu{\n\tborder-bottom: 2px solid #E6E9ED;\n\tmargin-bottom: 6px;\n\tmargin-right: 0px;\n\tmargin-left: 0px;\n  height: 45px;\n}\n", "", {"version":3,"sources":["/./components/Draggable/Draggable.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,4HAA4H;EAC5H,cAAc;EACd,eAAe;CAChB;AACD;EACE,WAAW;EACX,YAAY;CACb;AACD;CACC,gBAAgB;CAChB,cAAc;;CAEd;AACD;CACC,iCAAiC;CACjC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;EAChB,aAAa;CACd","file":"Draggable.css","sourcesContent":[".panelColour {\n  background: white;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n}\n.full{\n  width:100%;\n  height:100%;\n}\n.textSize {\n\tfont-size: 13px;\n\tcolor: #73879C\n\n}\n.xtitle{\n\tborder-bottom: 2px solid #E6E9ED;\n\tmargin-bottom: 6px;\n\tmargin-right: 0px;\n\tmargin-left: 0px;\n  height: 45px;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"panelColour": "Draggable_panelColour_JYd",
  	"full": "Draggable_full_jRl",
  	"textSize": "Draggable_textSize_1-x",
  	"xtitle": "Draggable_xtitle_1xu"
  };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Sensors = __webpack_require__(81);
  
  var _Sensors2 = _interopRequireDefault(_Sensors);
  
  var _highcharts = __webpack_require__(83);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _reactHighcharts = __webpack_require__(84);
  
  var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);
  
  var _global_consts = __webpack_require__(85);
  
  var _global_consts2 = _interopRequireDefault(_global_consts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Offset from the title - Hard coded 45 px
  
  var data = [[1220832000000, 22.56], [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28], [1221436800000, 20.05], [1221523200000, 19.98], [1221609600000, 18.26], [1221696000000, 19.16], [1221782400000, 20.13], [1222041600000, 18.72], [1222128000000, 18.12], [1222214400000, 18.39], [1222300800000, 18.85], [1222387200000, 18.32], [1222646400000, 15.04], [1222732800000, 16.24], [1222819200000, 15.59], [1222905600000, 14.3], [1222992000000, 13.87], [1223251200000, 14.02], [1223337600000, 12.74], [1223424000000, 12.83], [1223510400000, 12.68], [1223596800000, 13.8], [1223856000000, 15.75], [1223942400000, 14.87], [1224028800000, 13.99], [1224115200000, 14.56], [1224201600000, 13.91], [1224460800000, 14.06], [1224547200000, 13.07], [1224633600000, 13.84], [1224720000000, 14.03], [1224806400000, 13.77], [1225065600000, 13.16], [1225152000000, 14.27], [1225238400000, 14.94], [1225324800000, 15.86], [1225411200000, 15.37], [1225670400000, 15.28], [1225756800000, 15.86], [1225843200000, 14.76], [1225929600000, 14.16], [1226016000000, 14.03], [1226275200000, 13.7], [1226361600000, 13.54], [1226448000000, 12.87], [1226534400000, 13.78], [1226620800000, 12.89], [1226880000000, 12.59], [1226966400000, 12.84], [1227052800000, 12.33], [1227139200000, 11.5], [1227225600000, 11.8], [1227484800000, 13.28], [1227571200000, 12.97], [1227657600000, 13.57], [1227830400000, 13.24], [1228089600000, 12.7], [1228176000000, 13.21], [1228262400000, 13.7], [1228348800000, 13.06], [1228435200000, 13.43], [1228694400000, 14.25], [1228780800000, 14.29], [1228867200000, 14.03], [1228953600000, 13.57], [1229040000000, 14.04], [1229299200000, 13.54]]; // Expects that Highcharts was loaded in the code.
  
  var config = {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'AAPL Stock Price'
    },
    series: [{
      name: 'AAPL',
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }],
    chart: {}
  };
  
  var Sensors = function (_Component) {
    (0, _inherits3.default)(Sensors, _Component);
  
    function Sensors(props) {
      (0, _classCallCheck3.default)(this, Sensors);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Sensors.__proto__ || (0, _getPrototypeOf2.default)(Sensors)).call(this, props));
  
      config.chart.height = _this.props.widgetState.h * _this.props.rowHeight - _global_consts2.default;
      _this.state = {
        config: config
      };
      return _this;
    }
  
    (0, _createClass3.default)(Sensors, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        config.chart.height = this.props.widgetState.h * this.props.rowHeight - _global_consts2.default;
  
        this.setState({
          config: config
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactHighcharts2.default, { config: this.state.config, ref: 'chart' });
      }
    }]);
    return Sensors;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(_Sensors2.default)(Sensors);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(82);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Sensors.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Sensors.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, ".Sensors_panelColour_35s {\n  background: white;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n}\n\n.Sensors_textSize_3bi {\n\tfont-size: 13px;\n\tcolor: #73879C\n\n}\n\n.Sensors_xtitle_30u{\n\tborder-bottom: 2px solid #E6E9ED;\n\tmargin-bottom: 6px;\n\tmargin-right: 0px;\n\tmargin-left: 0px;\n}\n", "", {"version":3,"sources":["/./components/LiveTabComponents/Sensors/Sensors.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,4HAA4H;EAC5H,cAAc;EACd,eAAe;CAChB;;AAED;CACC,gBAAgB;CAChB,cAAc;;CAEd;;AACD;CACC,iCAAiC;CACjC,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB","file":"Sensors.css","sourcesContent":[".panelColour {\n  background: white;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n}\n\n.textSize {\n\tfont-size: 13px;\n\tcolor: #73879C\n\n}\n.xtitle{\n\tborder-bottom: 2px solid #E6E9ED;\n\tmargin-bottom: 6px;\n\tmargin-right: 0px;\n\tmargin-left: 0px;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"panelColour": "Sensors_panelColour_35s",
  	"textSize": "Sensors_textSize_3bi",
  	"xtitle": "Sensors_xtitle_30u"
  };

/***/ },
/* 83 */
/***/ function(module, exports) {

  module.exports = require("highcharts");

/***/ },
/* 84 */
/***/ function(module, exports) {

  module.exports = require("react-highcharts");

/***/ },
/* 85 */
/***/ function(module, exports) {

  "use strict";
  
  module.exports = 45; // The offset of the title div - Set in the draggable.css

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Weather = __webpack_require__(87);
  
  var _Weather2 = _interopRequireDefault(_Weather);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Weather = function (_Component) {
      (0, _inherits3.default)(Weather, _Component);
  
      function Weather(props) {
          (0, _classCallCheck3.default)(this, Weather);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Weather.__proto__ || (0, _getPrototypeOf2.default)(Weather)).call(this, props));
  
          _this.state = {
              weather_data: props.weather_data
          };
          return _this;
      }
  
      (0, _createClass3.default)(Weather, [{
          key: 'render',
          value: function render() {
              var x = new Date();
              var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
              return _react2.default.createElement(
                  'div',
                  { className: (0, _classnames2.default)(_Weather2.default.panel, _Weather2.default["panel-box"], _Weather2.default.panelColour) },
                  _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                          'div',
                          { className: (0, _classnames2.default)(_Weather2.default["panel-middle"], _Weather2.default["size-h1"], "col-xs-4") },
                          _react2.default.createElement('i', { className: this.state.weather_data.weather_3[0] })
                      ),
                      _react2.default.createElement(
                          'div',
                          { className: (0, _classnames2.default)(_Weather2.default["panel-top"], "col-xs-8") },
                          _react2.default.createElement(
                              'div',
                              { className: _Weather2.default["text-left"] },
                              _react2.default.createElement(
                                  'p',
                                  null,
                                  _react2.default.createElement(
                                      'strong',
                                      null,
                                      this.state.weather_data.weather
                                  ),
                                  ' ',
                                  _react2.default.createElement(
                                      'small',
                                      null,
                                      '(',
                                      _react2.default.createElement(
                                          'strong',
                                          null,
                                          this.state.weather_data.RainChance,
                                          _react2.default.createElement(
                                              'span',
                                              null,
                                              '%'
                                          )
                                      ),
                                      ' chance of rain)'
                                  )
                              ),
                              _react2.default.createElement(
                                  'p',
                                  null,
                                  'Temperature: ',
                                  _react2.default.createElement(
                                      'strong',
                                      null,
                                      this.state.weather_data.Temp,
                                      _react2.default.createElement(
                                          'span',
                                          null,
                                          '\u2103'
                                      )
                                  )
                              ),
                              _react2.default.createElement(
                                  'p',
                                  null,
                                  'Tide:',
                                  _react2.default.createElement(
                                      'strong',
                                      null,
                                      ' ',
                                      this.state.weather_data.tide
                                  )
                              )
                          ),
                          _react2.default.createElement('div', { className: (0, _classnames2.default)(_Weather2.default.divider, _Weather2.default["divider-sm"]) })
                      )
                  ),
                  _react2.default.createElement(
                      'div',
                      { className: (0, _classnames2.default)(_Weather2.default["panel-bottom"]) },
                      _react2.default.createElement(
                          'ul',
                          { className: (0, _classnames2.default)(_Weather2.default["list-justified"], _Weather2.default["text-center"]) },
                          _react2.default.createElement(
                              'li',
                              null,
                              _react2.default.createElement(
                                  'p',
                                  { className: (0, _classnames2.default)(_Weather2.default["size-h2"], _Weather2.default["color-info"]) },
                                  _react2.default.createElement('i', { className: this.state.weather_data.weather_3[2] })
                              ),
                              _react2.default.createElement(
                                  'p',
                                  { className: _Weather2.default["text-muted"] },
                                  days[this.state.weather_data.date % days.length]
                              )
                          ),
                          _react2.default.createElement(
                              'li',
                              null,
                              _react2.default.createElement(
                                  'p',
                                  { className: (0, _classnames2.default)(_Weather2.default["size-h2"], _Weather2.default["color-success"]) },
                                  _react2.default.createElement('i', { className: this.state.weather_data.weather_3[1] })
                              ),
                              _react2.default.createElement(
                                  'p',
                                  { className: (0, _classnames2.default)(_Weather2.default["text-muted"]) },
                                  days[(this.state.weather_data.date + 1) % days.length]
                              )
                          ),
                          _react2.default.createElement(
                              'li',
                              null,
                              _react2.default.createElement(
                                  'p',
                                  { className: (0, _classnames2.default)(_Weather2.default["size-h2"], _Weather2.default["color-infoAlt"]) },
                                  _react2.default.createElement('i', { className: this.state.weather_data.weather_3[2] })
                              ),
                              _react2.default.createElement(
                                  'p',
                                  { className: _Weather2.default["text-muted"] },
                                  days[(this.state.weather_data.date + 2) % days.length]
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return Weather;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(_Weather2.default)(Weather);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(88);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Weather.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Weather.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "\n.Weather_panelColour_oBW {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n  border-radius: 5px;\n  margin: 7.5px;    \n}\n\nbody {\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    -moz-osx-font-smoothing: grayscale !important\n}\n\n.Weather_text-muted_UfZ{\n    color:#777;\n    font-size: 10px\n }\n\n.Weather_text-small_1bl {\n    font-size: 12px\n}\n\n.Weather_text-normal_1zR {\n    font-size: 14px\n}\n\n.Weather_text-huge_3UK {\n    font-size: 72px\n}\n\n.Weather_text-large_3gV {\n    font-size: 50px\n}\n\n.Weather_size-h1_350 {\n    font-size: 36px\n}\n\n.Weather_size-h2_3hQ {\n    font-size: 20px\n}\n\n.Weather_size-h3_2yW {\n    font-size: 24px\n}\n\n.Weather_size-h4_2Ku {\n    font-size: 18px\n}\n\n.Weather_text-thin_1nc {\n    font-weight: 300\n}\n\n.Weather_text-ultralight_2X- {\n    font-weight: 100\n}\n\n.Weather_color-primary_2eC {\n    color: #1C7EBB\n}\n\n.Weather_color-success_Pwa {\n    color: #23AE89\n}\n\n.Weather_color-info_1tK {\n    color: #2EC1CC\n}\n\n.Weather_color-info-alt_2Lb {\n    color: #6A55C2\n}\n\n.Weather_color-warning_3ve {\n    color: #FFB61C\n}\n\n.Weather_color-danger_19x {\n    color: #E94B3B\n}\n\n.Weather_color-dark_31e {\n    color: #222533\n}\n\n.Weather_color-reverse_3m9 {\n    color: #fff\n}\n\n.Weather_color-gray-darker_rYc {\n    color: #222\n}\n\n.Weather_color-gray-dark_1VN {\n    color: #333\n}\n\n.Weather_color-gray_2so {\n    color: #555\n}\n\n.Weather_color-gray-light_2pJ {\n    color: #777\n}\n\n.Weather_color-gray-lighter_1KC {\n    color: #eee\n}\n\n.Weather_divider_9dK {\n    display: block;\n    margin-top: 15px;\n    margin-bottom: 15px\n}\n\n.Weather_divider_9dK.Weather_divider-dashed_1T1 {\n    border: 1px dashed #e9e9e9\n}\n\n.Weather_divider_9dK.Weather_divider-dotted_2OW {\n    border: 1px dotted #e9e9e9\n}\n\n.Weather_divider-sm_1fo {\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.Weather_divider-lg_1-B {\n    margin-top: 30px;\n    margin-bottom: 30px\n}\n\n.Weather_divider-xl_2mL {\n    margin-top: 50px;\n    margin-bottom: 50px\n}\n\n.Weather_label_FDA {\n    padding: .5em .8em\n}\n\n.Weather_label-info-alt_33F {\n    background: #6A55C2\n}\n\n.Weather_list-group-item_19l {\n    padding: 15px;\n    border: 1px solid #f3f3f3\n}\n\n.Weather_list-info_2e1 li {\n    padding: 10px;\n    border-bottom: 1px solid #eee\n}\n\n.Weather_list-info_2e1 li:last-child {\n    border-bottom: none\n}\n\n.Weather_list-info_2e1 li .Weather_icon_r7B {\n    margin-right: 10px;\n    color: #1C7EBB\n}\n\n.Weather_list-info_2e1 li label {\n    width: 100px\n}\n\n.Weather_panel_AAd {\n    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n    background-color: white;\n}\n\n.Weather_panel-box_Hoy {\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    border: none\n}\n\n.Weather_panel-box_Hoy .Weather_panel-item_28D {\n    display: table-cell;\n    padding: 30px;\n    width: 1%;\n    vertical-align: top;\n    border-radius: 0\n}\n\n.Weather_panel-box_Hoy .Weather_panel-left_1F1 {\n    border-bottom-left-radius: 2px;\n    border-top-left-radius: 2px\n}\n\n.Weather_panel-box_Hoy .Weather_panel-right_2MO {\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px\n}\n\n.Weather_panel-box_Hoy.Weather_info-box_3lD i {\n    line-height: 70px\n}\n\n.Weather_panel-box_Hoy .Weather_panel-top_1Vj,\n.Weather_panel-box_Hoy .Weather_panel-bottom_1Yy {\n    display: block\n}\n\n.Weather_panel-box_Hoy .Weather_panel-top_1Vj {\n    padding: 5px 5px;\n    border-radius: 7px;\n    background-color: #2EC1CC;\n    color: #fff;\n    text-align:left;\n}\n\n.Weather_panel-box_Hoy .Weather_panel-middle_3fu {\n    padding: 0px 0px;\n    margin-top: 18px;\n    border-radius: 7px;\n     background-color: #2EC1CC;\n    color: #fff\n}\n\n.Weather_panel-box_Hoy .Weather_panel-bottom_1Yy {\n    padding: 10px;\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 2px\n}\n\n.Weather_panel-box_Hoy .Weather_panel-bottom_1Yy p {\n    margin: 0\n}\n\n.Weather_panel-box_Hoy .Weather_list-justified-container_2hA {\n    padding: 15px 0\n}\n\n.Weather_panel-box_Hoy ul.Weather_list-justified_1ve {\n    display: table;\n    width: 100%;\n    list-style: none;\n    padding: 0\n}\n\n.Weather_panel-box_Hoy ul.Weather_list-justified_1ve>li {\n    float: none;\n    display: table-cell;\n    padding: 10px;\n    width: 1%;\n    border-right: 1px solid #eee\n}\n\n.Weather_panel-box_Hoy ul.Weather_list-justified_1ve>li:last-child {\n    border: none\n}\n\n.Weather_panel-box_Hoy ul.Weather_list-justified_1ve>li p {\n    margin: 0\n}\n\n.Weather_panel-box_Hoy .Weather_panel-icon_2j3,\n.Weather_panel-box_Hoy .Weather_panel-img_3s5 {\n    display: block;\n    margin: -10px auto 2;\n    border-radius: 50%;\n    border: 10px solid #fff;\n    width: 10%;\n    height: 30px;\n    line-height: 20px;\n    margin-left: auto;\n    position:relative;\n    float:left;\n    font-size: 58px;\n    text-shadow: -6px 8px 5px rgba(0, 0, 0, 0.3)\n}\n\n.Weather_panel-box_Hoy .Weather_panel-icon_2j3 {\n    padding: 28px 35px 35px\n}\n\n.Weather_panel-box_Hoy .Weather_panel-img_3s5 {\n    padding: 0px\n}\n\n.Weather_panel-box_Hoy .Weather_panel-img_3s5 img {\n    width: 100%;\n    max-width: 100%\n}\n\n\n\n\n\n", "", {"version":3,"sources":["/./components/LiveTabComponents/Weather/Weather.css"],"names":[],"mappings":";AACA;EACE,4HAA4H;EAC5H,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,cAAc;CACf;;AAED;IACI,8CAA8C;IAC9C,+CAA+C;IAC/C,6CAA6C;CAChD;;AAED;IACI,WAAW;IACX,eAAe;EACjB;;AAEF;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;CAClB;;AACD;IACI,gBAAgB;CACnB;;AACD;IACI,gBAAgB;CACnB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,cAAc;CACjB;;AACD;IACI,WAAW;CACd;;AACD;IACI,WAAW;CACd;;AACD;IACI,WAAW;CACd;;AACD;IACI,WAAW;CACd;;AACD;IACI,WAAW;CACd;;AACD;IACI,WAAW;CACd;;AAED;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;CACtB;;AACD;IACI,0BAA0B;CAC7B;;AACD;IACI,0BAA0B;CAC7B;;AACD;IACI,iBAAiB;IACjB,mBAAmB;CACtB;;AACD;IACI,iBAAiB;IACjB,mBAAmB;CACtB;;AACD;IACI,iBAAiB;IACjB,mBAAmB;CACtB;;AACD;IACI,kBAAkB;CACrB;;AACD;IACI,mBAAmB;CACtB;;AACD;IACI,cAAc;IACd,yBAAyB;CAC5B;;AACD;IACI,cAAc;IACd,6BAA6B;CAChC;;AACD;IACI,mBAAmB;CACtB;;AACD;IACI,mBAAmB;IACnB,cAAc;CACjB;;AACD;IACI,YAAY;CACf;;AACD;IACI,+CAAuC;YAAvC,uCAAuC;IACvC,wBAAwB;CAC3B;;AAED;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,YAAY;CACf;;AACD;IACI,oBAAoB;IACpB,cAAc;IACd,UAAU;IACV,oBAAoB;IACpB,gBAAgB;CACnB;;AACD;IACI,+BAA+B;IAC/B,2BAA2B;CAC9B;;AACD;IACI,gCAAgC;IAChC,4BAA4B;CAC/B;;AACD;IACI,iBAAiB;CACpB;;AACD;;IAEI,cAAc;CACjB;;AACD;IACI,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;CACnB;;AAED;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;KAClB,0BAA0B;IAC3B,WAAW;CACd;;AACD;IACI,cAAc;IACd,gCAAgC;IAChC,8BAA8B;CACjC;;AACD;IACI,SAAS;CACZ;;AACD;IACI,eAAe;CAClB;;AACD;IACI,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,UAAU;CACb;;AACD;IACI,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,UAAU;IACV,4BAA4B;CAC/B;;AACD;IACI,YAAY;CACf;;AACD;IACI,SAAS;CACZ;;AACD;;IAEI,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,4CAA4C;CAC/C;;AACD;IACI,uBAAuB;CAC1B;;AACD;IACI,YAAY;CACf;;AACD;IACI,YAAY;IACZ,eAAe;CAClB","file":"Weather.css","sourcesContent":["\n.panelColour {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding: 10px;\n  color: #73879C;\n  border-radius: 5px;\n  margin: 7.5px;    \n}\n\nbody {\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    -moz-osx-font-smoothing: grayscale !important\n}\n\n.text-muted{\n    color:#777;\n    font-size: 10px\n }\n\n.text-small {\n    font-size: 12px\n}\n.text-normal {\n    font-size: 14px\n}\n.text-huge {\n    font-size: 72px\n}\n.text-large {\n    font-size: 50px\n}\n.size-h1 {\n    font-size: 36px\n}\n.size-h2 {\n    font-size: 20px\n}\n.size-h3 {\n    font-size: 24px\n}\n.size-h4 {\n    font-size: 18px\n}\n.text-thin {\n    font-weight: 300\n}\n.text-ultralight {\n    font-weight: 100\n}\n.color-primary {\n    color: #1C7EBB\n}\n.color-success {\n    color: #23AE89\n}\n.color-info {\n    color: #2EC1CC\n}\n.color-info-alt {\n    color: #6A55C2\n}\n.color-warning {\n    color: #FFB61C\n}\n.color-danger {\n    color: #E94B3B\n}\n.color-dark {\n    color: #222533\n}\n.color-reverse {\n    color: #fff\n}\n.color-gray-darker {\n    color: #222\n}\n.color-gray-dark {\n    color: #333\n}\n.color-gray {\n    color: #555\n}\n.color-gray-light {\n    color: #777\n}\n.color-gray-lighter {\n    color: #eee\n}\n\n.divider {\n    display: block;\n    margin-top: 15px;\n    margin-bottom: 15px\n}\n.divider.divider-dashed {\n    border: 1px dashed #e9e9e9\n}\n.divider.divider-dotted {\n    border: 1px dotted #e9e9e9\n}\n.divider-sm {\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n.divider-lg {\n    margin-top: 30px;\n    margin-bottom: 30px\n}\n.divider-xl {\n    margin-top: 50px;\n    margin-bottom: 50px\n}\n.label {\n    padding: .5em .8em\n}\n.label-info-alt {\n    background: #6A55C2\n}\n.list-group-item {\n    padding: 15px;\n    border: 1px solid #f3f3f3\n}\n.list-info li {\n    padding: 10px;\n    border-bottom: 1px solid #eee\n}\n.list-info li:last-child {\n    border-bottom: none\n}\n.list-info li .icon {\n    margin-right: 10px;\n    color: #1C7EBB\n}\n.list-info li label {\n    width: 100px\n}\n.panel {\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n    background-color: white;\n}\n\n.panel-box {\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    border: none\n}\n.panel-box .panel-item {\n    display: table-cell;\n    padding: 30px;\n    width: 1%;\n    vertical-align: top;\n    border-radius: 0\n}\n.panel-box .panel-left {\n    border-bottom-left-radius: 2px;\n    border-top-left-radius: 2px\n}\n.panel-box .panel-right {\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px\n}\n.panel-box.info-box i {\n    line-height: 70px\n}\n.panel-box .panel-top,\n.panel-box .panel-bottom {\n    display: block\n}\n.panel-box .panel-top {\n    padding: 5px 5px;\n    border-radius: 7px;\n    background-color: #2EC1CC;\n    color: #fff;\n    text-align:left;\n}\n\n.panel-box .panel-middle {\n    padding: 0px 0px;\n    margin-top: 18px;\n    border-radius: 7px;\n     background-color: #2EC1CC;\n    color: #fff\n}\n.panel-box .panel-bottom {\n    padding: 10px;\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 2px\n}\n.panel-box .panel-bottom p {\n    margin: 0\n}\n.panel-box .list-justified-container {\n    padding: 15px 0\n}\n.panel-box ul.list-justified {\n    display: table;\n    width: 100%;\n    list-style: none;\n    padding: 0\n}\n.panel-box ul.list-justified>li {\n    float: none;\n    display: table-cell;\n    padding: 10px;\n    width: 1%;\n    border-right: 1px solid #eee\n}\n.panel-box ul.list-justified>li:last-child {\n    border: none\n}\n.panel-box ul.list-justified>li p {\n    margin: 0\n}\n.panel-box .panel-icon,\n.panel-box .panel-img {\n    display: block;\n    margin: -10px auto 2;\n    border-radius: 50%;\n    border: 10px solid #fff;\n    width: 10%;\n    height: 30px;\n    line-height: 20px;\n    margin-left: auto;\n    position:relative;\n    float:left;\n    font-size: 58px;\n    text-shadow: -6px 8px 5px rgba(0, 0, 0, 0.3)\n}\n.panel-box .panel-icon {\n    padding: 28px 35px 35px\n}\n.panel-box .panel-img {\n    padding: 0px\n}\n.panel-box .panel-img img {\n    width: 100%;\n    max-width: 100%\n}\n\n\n\n\n\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"panelColour": "Weather_panelColour_oBW",
  	"text-muted": "Weather_text-muted_UfZ",
  	"text-small": "Weather_text-small_1bl",
  	"text-normal": "Weather_text-normal_1zR",
  	"text-huge": "Weather_text-huge_3UK",
  	"text-large": "Weather_text-large_3gV",
  	"size-h1": "Weather_size-h1_350",
  	"size-h2": "Weather_size-h2_3hQ",
  	"size-h3": "Weather_size-h3_2yW",
  	"size-h4": "Weather_size-h4_2Ku",
  	"text-thin": "Weather_text-thin_1nc",
  	"text-ultralight": "Weather_text-ultralight_2X-",
  	"color-primary": "Weather_color-primary_2eC",
  	"color-success": "Weather_color-success_Pwa",
  	"color-info": "Weather_color-info_1tK",
  	"color-info-alt": "Weather_color-info-alt_2Lb",
  	"color-warning": "Weather_color-warning_3ve",
  	"color-danger": "Weather_color-danger_19x",
  	"color-dark": "Weather_color-dark_31e",
  	"color-reverse": "Weather_color-reverse_3m9",
  	"color-gray-darker": "Weather_color-gray-darker_rYc",
  	"color-gray-dark": "Weather_color-gray-dark_1VN",
  	"color-gray": "Weather_color-gray_2so",
  	"color-gray-light": "Weather_color-gray-light_2pJ",
  	"color-gray-lighter": "Weather_color-gray-lighter_1KC",
  	"divider": "Weather_divider_9dK",
  	"divider-dashed": "Weather_divider-dashed_1T1",
  	"divider-dotted": "Weather_divider-dotted_2OW",
  	"divider-sm": "Weather_divider-sm_1fo",
  	"divider-lg": "Weather_divider-lg_1-B",
  	"divider-xl": "Weather_divider-xl_2mL",
  	"label": "Weather_label_FDA",
  	"label-info-alt": "Weather_label-info-alt_33F",
  	"list-group-item": "Weather_list-group-item_19l",
  	"list-info": "Weather_list-info_2e1",
  	"icon": "Weather_icon_r7B",
  	"panel": "Weather_panel_AAd",
  	"panel-box": "Weather_panel-box_Hoy",
  	"panel-item": "Weather_panel-item_28D",
  	"panel-left": "Weather_panel-left_1F1",
  	"panel-right": "Weather_panel-right_2MO",
  	"info-box": "Weather_info-box_3lD",
  	"panel-top": "Weather_panel-top_1Vj",
  	"panel-bottom": "Weather_panel-bottom_1Yy",
  	"panel-middle": "Weather_panel-middle_3fu",
  	"list-justified-container": "Weather_list-justified-container_2hA",
  	"list-justified": "Weather_list-justified_1ve",
  	"panel-icon": "Weather_panel-icon_2j3",
  	"panel-img": "Weather_panel-img_3s5"
  };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _style = __webpack_require__(90);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _reactHtml5video = __webpack_require__(57);
  
  var _reactHtml5video2 = _interopRequireDefault(_reactHtml5video);
  
  var _cut = __webpack_require__(92);
  
  var _cut2 = _interopRequireDefault(_cut);
  
  var _global_consts = __webpack_require__(85);
  
  var _global_consts2 = _interopRequireDefault(_global_consts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Offset from the title - Hard coded 45 px
  
  var Camera = function (_Component) {
    (0, _inherits3.default)(Camera, _Component);
  
    function Camera(props) {
      (0, _classCallCheck3.default)(this, Camera);
      return (0, _possibleConstructorReturn3.default)(this, (Camera.__proto__ || (0, _getPrototypeOf2.default)(Camera)).call(this, props));
    }
  
    (0, _createClass3.default)(Camera, [{
      key: 'render',
      value: function render() {
        var withOffset = {
          paddingBottom: _global_consts2.default,
          height: "100%",
          width: "100%"
        };
        return _react2.default.createElement(
          'div',
          { style: withOffset },
          _react2.default.createElement(
            _reactHtml5video2.default,
            { autoPlay: true, loop: true, muted: true, ref: 'video', className: _style2.default.main__video },
            _react2.default.createElement('source', { src: _cut2.default, type: 'video/mp4' })
          )
        );
      }
    }]);
    return Camera;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(_style2.default)(Camera);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(91);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./style.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./style.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, ".style_main__video_i9S video{\n  width: 100%;\n  height:100%;\n}\n.style_main__video_i9S {\n  width: 100%;\n  height:100%;\n}\n", "", {"version":3,"sources":["/./components/LiveTabComponents/Camera/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,YAAY;CACb;AACD;EACE,YAAY;EACZ,YAAY;CACb","file":"style.css","sourcesContent":[".main__video video{\n  width: 100%;\n  height:100%;\n}\n.main__video {\n  width: 100%;\n  height:100%;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"main__video": "style_main__video_i9S"
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "cb5c87bae5f81f2f27b5ffaebd141a18.mp4";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _CommentLog = __webpack_require__(94);
  
  var _CommentLog2 = _interopRequireDefault(_CommentLog);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _lodash = __webpack_require__(76);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var CommentLog = function (_Component) {
    (0, _inherits3.default)(CommentLog, _Component);
  
    function CommentLog(props) {
      (0, _classCallCheck3.default)(this, CommentLog);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (CommentLog.__proto__ || (0, _getPrototypeOf2.default)(CommentLog)).call(this, props));
  
      _this.state = {
        id: "1",
        search: '',
        isModalOpen: false,
        messages: [{ names: "Alisdair",
          FeedGiven: "6kg",
          dates: "17/01/2019",
          texts: "Increased Temperature and more fish on surface hence more feed added" }]
      }; //change to messages: this.props.messages,
      return _this;
    }
  
    (0, _createClass3.default)(CommentLog, [{
      key: 'updateSearch',
      value: function updateSearch(event) {
        this.setState({ search: event.target.value });
      }
    }, {
      key: 'addNewEntry',
      value: function addNewEntry(event) {
        event.preventDefault();
        var names = this.refs.names.value;
        var FeedGiven = this.refs.FeedGiven.value;
        var dates = this.refs.dates.value;
        var texts = this.refs.texts.value;
        var id = Math.floor(Math.random() * 100 + 1);
        this.setState({
          messages: this.state.messages.concat({ names: names, FeedGiven: FeedGiven, dates: dates, texts: texts })
        });
        this.refs.names.value = '';
        this.refs.FeedGiven.value = '';
        this.refs.dates.value = '';
        this.refs.texts.value = '';
      }
    }, {
      key: 'createElement',
      value: function createElement(element) {
        return _react2.default.createElement(
          'div',
          { key: element.id },
          _react2.default.createElement(
            'li',
            { className: 'media event' },
            _react2.default.createElement(
              'a',
              { className: 'pull-left border-aero profile_thumb' },
              _react2.default.createElement('i', { className: 'fa fa-user aero' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'media-body' },
              _react2.default.createElement(
                'a',
                { className: 'title', href: '#' },
                element.names
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  element.FeedGiven
                ),
                ' Feed supplied '
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'small',
                  null,
                  element.dates
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                ' ',
                _react2.default.createElement(
                  'small',
                  null,
                  element.texts
                )
              )
            )
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var filteredMesssages = this.state.messages.filter(function (messages) {
  
          return messages.names.toLowerCase().indexOf(_this2.state.search.toLowerCase()) !== -1;
        });
        console.log(filteredMesssages.dates);
  
        return _react2.default.createElement(
          'div',
          { className: 'col-md-12 col-sm-12 col-xs-12' },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(_CommentLog2.default["x_panel"], _CommentLog2.default.tile, _CommentLog2.default.toMakeSame) },
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)(_CommentLog2.default["x_title"]) },
              _react2.default.createElement(
                'h2',
                null,
                'Feeding Observations'
              ),
              _react2.default.createElement('div', { className: 'clearfix' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'box' },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-search' })
              ),
              _react2.default.createElement('input', { type: 'Search',
                placeholder: 'Search',
                value: this.state.search,
                onChange: this.updateSearch.bind(this) }),
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-pencil-square-o' })
              )
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.addNewEntry.bind(this) },
              _react2.default.createElement('input', { type: 'text', placeholder: 'Name', ref: 'names' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Feed Amount', ref: 'FeedGiven' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Date & Time', ref: 'dates' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Comment', ref: 'texts' }),
              _react2.default.createElement(
                'button',
                { type: 'submit' },
                'Add Entry '
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'list-unstyled top_profiles scroll-view pre-scrollable' },
              _lodash2.default.map(filteredMesssages, this.createElement)
            )
          )
        );
      }
    }]);
    return CommentLog;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(_CommentLog2.default)(CommentLog);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(95);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./CommentLog.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./CommentLog.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, ".CommentLog_x_panel_1JV {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n    padding: 10px 17px;\n    display: inline-block;\n    background: #fff;\n    border: 1px solid #E6E9ED;\n    -webkit-column-break-inside: avoid;\n    -moz-column-break-inside: avoid;\n    column-break-inside: avoid;\n    opacity: 1;\n    -webkit-transition: all .2s ease;\n    -o-transition: all .2s ease;\n    transition: all .2s ease\n}\n.CommentLog_x_title_pCL {\n    border-bottom: 2px solid #E6E9ED;\n    padding: 1px 5px 6px;\n    margin-bottom: 10px\n}\n.CommentLog_x_title_pCL .CommentLog_filter_1Bw {\n    width: 40%;\n    float: right\n}\n.CommentLog_x_title_pCL h2 {\n    margin: 5px 0 6px;\n    float: left;\n    display: block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: wrap\n}\n.CommentLog_x_title_pCL h2 small {\n    margin-left: 10px\n}\n.CommentLog_x_title_pCL span {\n    color: #BDBDBD\n}\n.CommentLog_x_content_Sdt {\n    padding: 0 5px 6px;\n    position: relative;\n    width: 100%;\n    float: left;\n    clear: both;\n    margin-top: 5px\n}\n.CommentLog_x_content_Sdt h4 {\n    font-size: 16px;\n    font-weight: 500\n}", "", {"version":3,"sources":["/./components/LogTabComponents/CommentLog/CommentLog.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,0BAA0B;IAC1B,mCAAmC;IACnC,gCAAgC;IAChC,2BAA2B;IAC3B,WAAW;IACX,iCAAwB;IAAxB,4BAAwB;IAAxB,wBAAwB;CAC3B;AACD;IACI,iCAAiC;IACjC,qBAAqB;IACrB,mBAAmB;CACtB;AACD;IACI,WAAW;IACX,YAAY;CACf;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,wBAAwB;IACxB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;IACI,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;CAClB;AACD;IACI,gBAAgB;IAChB,gBAAgB;CACnB","file":"CommentLog.css","sourcesContent":[".x_panel {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n    padding: 10px 17px;\n    display: inline-block;\n    background: #fff;\n    border: 1px solid #E6E9ED;\n    -webkit-column-break-inside: avoid;\n    -moz-column-break-inside: avoid;\n    column-break-inside: avoid;\n    opacity: 1;\n    transition: all .2s ease\n}\n.x_title {\n    border-bottom: 2px solid #E6E9ED;\n    padding: 1px 5px 6px;\n    margin-bottom: 10px\n}\n.x_title .filter {\n    width: 40%;\n    float: right\n}\n.x_title h2 {\n    margin: 5px 0 6px;\n    float: left;\n    display: block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: wrap\n}\n.x_title h2 small {\n    margin-left: 10px\n}\n.x_title span {\n    color: #BDBDBD\n}\n.x_content {\n    padding: 0 5px 6px;\n    position: relative;\n    width: 100%;\n    float: left;\n    clear: both;\n    margin-top: 5px\n}\n.x_content h4 {\n    font-size: 16px;\n    font-weight: 500\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"x_panel": "CommentLog_x_panel_1JV",
  	"x_title": "CommentLog_x_title_pCL",
  	"filter": "CommentLog_filter_1Bw",
  	"x_content": "CommentLog_x_content_Sdt"
  };

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("react/lib/ReactComponentWithPureRenderMixin");

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _style = __webpack_require__(98);
  
  var _style2 = _interopRequireDefault(_style);
  
  var _lodash = __webpack_require__(76);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Store = function (_Component) {
    (0, _inherits3.default)(Store, _Component);
  
    function Store(props) {
      (0, _classCallCheck3.default)(this, Store);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Store.__proto__ || (0, _getPrototypeOf2.default)(Store)).call(this, props));
  
      _this.state = {
        modules: _this.props.modules
      };
      return _this;
    }
  
    (0, _createClass3.default)(Store, [{
      key: 'onClicker',
      value: function onClicker(moduleName) {
        this.props.selectedItem(moduleName);
      }
    }, {
      key: 'generateModules',
      value: function generateModules() {
        var _this2 = this;
  
        return this.state.modules.map(function (element, index) {
          return _react2.default.createElement(
            _reactBootstrap.NavItem,
            { style: { width: 300 }, className: _style2.default.linkbar, key: index, onClick: function onClick() {
                _this2.onClicker(element.moduleName);
              } },
            element.moduleName,
            _react2.default.createElement('i', { className: 'fa fa-eye', 'aria-hidden': 'true', style: { float: "right" } }),
            _react2.default.createElement('i', { className: 'fa fa-cogs', 'aria-hidden': 'true', style: { float: "right", marginRight: "10px" } })
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: { backgroundColor: "white" } },
            _react2.default.createElement(
              'b',
              null,
              'This is the modules store'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { bsStyle: 'pills', stacked: true, activeKey: 1 },
            this.generateModules()
          )
        );
      }
    }]);
    return Store;
  }(_react.Component);
  
  ;
  
  exports.default = (0, _withStyles2.default)(_style2.default)(Store);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(99);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./style.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./style.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, ".style_custom-sidebar-class_3_r {\n  background-color: white;\n}\n\n.style_linkbar_3AF {\n  background-color: white;\n}\n", "", {"version":3,"sources":["/./components/Store/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;CACzB;;AAED;EACE,wBAAwB;CACzB","file":"style.css","sourcesContent":[".custom-sidebar-class {\n  background-color: white;\n}\n\n.linkbar {\n  background-color: white;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"custom-sidebar-class": "style_custom-sidebar-class_3_r",
  	"linkbar": "style_linkbar_3AF"
  };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Finances = __webpack_require__(101);
  
  var _Finances2 = _interopRequireDefault(_Finances);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/finances',
    action: function action() {
      return _react2.default.createElement(_Finances2.default, null);
    }
  };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Finances = __webpack_require__(102);
  
  var _Finances2 = _interopRequireDefault(_Finances);
  
  var _lodash = __webpack_require__(76);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Navigation = __webpack_require__(58);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Draggable = __webpack_require__(73);
  
  var _Draggable2 = _interopRequireDefault(_Draggable);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  var title = 'Finances';
  
  function Finances(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Navigation2.default, null),
      _react2.default.createElement(_Draggable2.default, null)
    );
  }
  
  Finances.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Finances2.default)(Finances);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(103);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Finances.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Finances.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n.Finances_progress-bar_Gjm {\n    color: #333;\n}\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n* {\n    -webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n.Finances_form-control_3q4 {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box)\n\t}\n.Finances_form-control_3q4:focus {\n  z-index: 2;\n}\nbody {\n    -webkit-background-size: cover;\n    background-size: cover;\n}\n.Finances_login-form_1G0 {\n\tmargin-top: 60px;\n}\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\nform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\nform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\nform[role=login] > div {\n\t\ttext-align: center;\n\t}\n.Finances_form-links_39h {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n.Finances_form-links_39h a {\n\t\tcolor: #fff;\n\t}\n.Finances_root_3yS {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Finances_container_yaT {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Finances_lead_2Pz {\n  font-size: 1.25em;\n}\n.Finances_formGroup_3HV {\n  margin-bottom: 15px;\n}\n.Finances_label_3hx {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Finances_input_F_9 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Finances_input_F_9:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Finances_button_eeX {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Finances_button_eeX:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Finances_button_eeX:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Finances_facebook_3Iv {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Finances_facebook_3Iv:hover {\n  background: #2d4373;\n}\n.Finances_google_1sN {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Finances_google_1sN:hover {\n  background: #c23321;\n}\n.Finances_twitter_1WG {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Finances_twitter_1WG:hover {\n  background: #2795e9;\n}\n.Finances_icon_3JB {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Finances_lineThrough_1cn {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Finances_lineThrough_1cn::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Finances_lineThrough_1cn::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n/*Test*/\n.Finances_react-grid-layout_-qg {\n  position: relative;\n  -webkit-transition: height 200ms ease;\n  -o-transition: height 200ms ease;\n  transition: height 200ms ease;\n}\n.Finances_react-grid-item_2wD {\n  -webkit-transition: all 200ms ease;\n  -o-transition: all 200ms ease;\n  transition: all 200ms ease;\n  -webkit-transition-property: left, top;\n  -o-transition-property: left, top;\n  transition-property: left, top;\n}\n.Finances_react-grid-item_2wD.Finances_cssTransforms_29W {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: -o-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform, -o-transform;\n}\n.Finances_react-grid-item_2wD.Finances_resizing_1N4 {\n  z-index: 1;\n}\n.Finances_react-grid-item_2wD.Finances_react-draggable-dragging_10a {\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n  z-index: 3;\n}\n.Finances_react-grid-item_2wD.Finances_react-grid-placeholder_XUC {\n  background: red;\n  opacity: 0.2;\n  -webkit-transition-duration: 100ms;\n       -o-transition-duration: 100ms;\n          transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.Finances_react-grid-item_2wD > .Finances_react-resizable-handle_wkK {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  -webkit-background-origin: content-box;\n          background-origin: content-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: se-resize;\n}\n/*OTHER CSS*/\nbody {\n  background: white;\n  padding: 20px;\n  overflow: scroll;\n}\n#Finances_content_xHk {\n  width: 100%;\n}\n.Finances_react-grid-layout_-qg {\n  background: #eee;\n}\n.Finances_layoutJSON_2cn {\n  background: #ddd;\n  border: 1px solid black;\n  margin-top: 10px;\n  padding: 10px;\n}\n.Finances_columns_2So {\n  -moz-columns: 120px;\n  -webkit-columns: 120px;\n  columns: 120px;\n}\n.Finances_react-grid-item_2wD {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Finances_react-grid-item_2wD:not(.Finances_react-grid-placeholder_XUC) {\n  background: #ccc;\n  border: 1px solid black;\n}\n.Finances_react-grid-item_2wD.Finances_resizing_1N4 {\n  opacity: 0.9;\n}\n.Finances_react-grid-item_2wD.Finances_static_1gQ {\n  background: #cce;\n}\n.Finances_react-grid-item_2wD .Finances_text_3U_ {\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 24px;\n  background-color: red;\n}\n.Finances_react-grid-item_2wD .Finances_minMax_3ar {\n  font-size: 12px;\n}\n.Finances_react-grid-item_2wD .Finances_add_1P3 {\n  cursor: pointer;\n}\n.Finances_react-grid-dragHandleExample_3BX{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n", "", {"version":3,"sources":["/./routes/dashboardPages/finances/Finances.css","/./components/variables.css","/../<no source>"],"names":[],"mappings":"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","file":"Finances.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../../components/variables.css';\n\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n\n.progress-bar {\n    color: #333;\n}\n\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n\n* {\n    -webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n\n    .form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\nbody {\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n.login-form {\n\tmargin-top: 60px;\n}\n\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\n\tform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\n\tform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\n\tform[role=login] > div {\n\t\ttext-align: center;\n\t}\n\n.form-links {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n\t.form-links a {\n\t\tcolor: #fff;\n\t}\n\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n\n\n\n/*Test*/\n.react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n\n\n/*OTHER CSS*/\nbody {\n  background: white;\n  padding: 20px;\n  overflow: scroll;\n}\n#content {\n  width: 100%;\n}\n.react-grid-layout {\n  background: #eee;\n}\n.layoutJSON {\n  background: #ddd;\n  border: 1px solid black;\n  margin-top: 10px;\n  padding: 10px;\n}\n.columns {\n  -moz-columns: 120px;\n  -webkit-columns: 120px;\n  columns: 120px;\n}\n.react-grid-item {\n  box-sizing: border-box;\n}\n.react-grid-item:not(.react-grid-placeholder) {\n  background: #ccc;\n  border: 1px solid black;\n}\n.react-grid-item.resizing {\n  opacity: 0.9;\n}\n.react-grid-item.static {\n  background: #cce;\n}\n.react-grid-item .text {\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 24px;\n  background-color: red;\n}\n\n.react-grid-item .minMax {\n  font-size: 12px;\n}\n.react-grid-item .add {\n  cursor: pointer;\n}\n.react-grid-dragHandleExample{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n",null],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"progress-bar": "Finances_progress-bar_Gjm",
  	"form-control": "Finances_form-control_3q4",
  	"login-form": "Finances_login-form_1G0",
  	"form-links": "Finances_form-links_39h",
  	"root": "Finances_root_3yS",
  	"container": "Finances_container_yaT",
  	"lead": "Finances_lead_2Pz",
  	"formGroup": "Finances_formGroup_3HV",
  	"label": "Finances_label_3hx",
  	"input": "Finances_input_F_9",
  	"button": "Finances_button_eeX",
  	"facebook": "Finances_facebook_3Iv Finances_button_eeX",
  	"google": "Finances_google_1sN Finances_button_eeX",
  	"twitter": "Finances_twitter_1WG Finances_button_eeX",
  	"icon": "Finances_icon_3JB",
  	"lineThrough": "Finances_lineThrough_1cn",
  	"react-grid-layout": "Finances_react-grid-layout_-qg",
  	"react-grid-item": "Finances_react-grid-item_2wD",
  	"cssTransforms": "Finances_cssTransforms_29W",
  	"resizing": "Finances_resizing_1N4",
  	"react-draggable-dragging": "Finances_react-draggable-dragging_10a",
  	"react-grid-placeholder": "Finances_react-grid-placeholder_XUC",
  	"react-resizable-handle": "Finances_react-resizable-handle_wkK",
  	"content": "Finances_content_xHk",
  	"layoutJSON": "Finances_layoutJSON_2cn",
  	"columns": "Finances_columns_2So",
  	"static": "Finances_static_1gQ",
  	"text": "Finances_text_3U_",
  	"minMax": "Finances_minMax_3ar",
  	"add": "Finances_add_1P3",
  	"react-grid-dragHandleExample": "Finances_react-grid-dragHandleExample_3BX"
  };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Logs = __webpack_require__(105);
  
  var _Logs2 = _interopRequireDefault(_Logs);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/logs',
    action: function action() {
      return _react2.default.createElement(_Logs2.default, null);
    }
  };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(19);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Logs = __webpack_require__(106);
  
  var _Logs2 = _interopRequireDefault(_Logs);
  
  var _lodash = __webpack_require__(76);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Navigation = __webpack_require__(58);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Draggable = __webpack_require__(73);
  
  var _Draggable2 = _interopRequireDefault(_Draggable);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  var title = 'Logs';
  
  function Logs(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Navigation2.default, null),
      _react2.default.createElement(_Draggable2.default, null)
    );
  }
  
  Logs.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Logs2.default)(Logs);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(107);
      var insertCss = __webpack_require__(23);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Logs.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Logs.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(22)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n.Logs_progress-bar_2FZ {\n    color: #333;\n}\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n* {\n    -webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n.Logs_form-control_jq7 {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box)\n\t}\n.Logs_form-control_jq7:focus {\n  z-index: 2;\n}\nbody {\n    -webkit-background-size: cover;\n    background-size: cover;\n}\n.Logs_login-form_3Do {\n\tmargin-top: 60px;\n}\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\nform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\nform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\nform[role=login] > div {\n\t\ttext-align: center;\n\t}\n.Logs_form-links_3f6 {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n.Logs_form-links_3f6 a {\n\t\tcolor: #fff;\n\t}\n.Logs_root_1Yp {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Logs_container_3g_ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Logs_lead_10_ {\n  font-size: 1.25em;\n}\n.Logs_formGroup_2Qq {\n  margin-bottom: 15px;\n}\n.Logs_label_1BR {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Logs_input_3jz {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Logs_input_3jz:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Logs_button_1Gt {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Logs_button_1Gt:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Logs_button_1Gt:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Logs_facebook_1wP {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Logs_facebook_1wP:hover {\n  background: #2d4373;\n}\n.Logs_google_1iY {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Logs_google_1iY:hover {\n  background: #c23321;\n}\n.Logs_twitter_20N {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Logs_twitter_20N:hover {\n  background: #2795e9;\n}\n.Logs_icon_26e {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Logs_lineThrough_Zs7 {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Logs_lineThrough_Zs7::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Logs_lineThrough_Zs7::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n/*Test*/\n.Logs_react-grid-layout_3_B {\n  position: relative;\n  -webkit-transition: height 200ms ease;\n  -o-transition: height 200ms ease;\n  transition: height 200ms ease;\n}\n.Logs_react-grid-item_1MD {\n  -webkit-transition: all 200ms ease;\n  -o-transition: all 200ms ease;\n  transition: all 200ms ease;\n  -webkit-transition-property: left, top;\n  -o-transition-property: left, top;\n  transition-property: left, top;\n}\n.Logs_react-grid-item_1MD.Logs_cssTransforms_yk- {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: -o-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform, -o-transform;\n}\n.Logs_react-grid-item_1MD.Logs_resizing_1IA {\n  z-index: 1;\n}\n.Logs_react-grid-item_1MD.Logs_react-draggable-dragging_Nom {\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n  z-index: 3;\n}\n.Logs_react-grid-item_1MD.Logs_react-grid-placeholder_1c6 {\n  background: red;\n  opacity: 0.2;\n  -webkit-transition-duration: 100ms;\n       -o-transition-duration: 100ms;\n          transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.Logs_react-grid-item_1MD > .Logs_react-resizable-handle_3iq {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  -webkit-background-origin: content-box;\n          background-origin: content-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: se-resize;\n}\n/*OTHER CSS*/\nbody {\n  background: white;\n  padding: 20px;\n  overflow: scroll;\n}\n#Logs_content_1pg {\n  width: 100%;\n}\n.Logs_react-grid-layout_3_B {\n  background: #eee;\n}\n.Logs_layoutJSON_1Gm {\n  background: #ddd;\n  border: 1px solid black;\n  margin-top: 10px;\n  padding: 10px;\n}\n.Logs_columns_GXj {\n  -moz-columns: 120px;\n  -webkit-columns: 120px;\n  columns: 120px;\n}\n.Logs_react-grid-item_1MD {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Logs_react-grid-item_1MD:not(.Logs_react-grid-placeholder_1c6) {\n  background: #ccc;\n  border: 1px solid black;\n}\n.Logs_react-grid-item_1MD.Logs_resizing_1IA {\n  opacity: 0.9;\n}\n.Logs_react-grid-item_1MD.Logs_static_2mO {\n  background: #cce;\n}\n.Logs_react-grid-item_1MD .Logs_text_2PL {\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 24px;\n  background-color: red;\n}\n.Logs_react-grid-item_1MD .Logs_minMax_1oh {\n  font-size: 12px;\n}\n.Logs_react-grid-item_1MD .Logs_add_1gb {\n  cursor: pointer;\n}\n.Logs_react-grid-dragHandleExample_3u_{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n", "", {"version":3,"sources":["/./routes/dashboardPages/logs/Logs.css","/./components/variables.css","/../<no source>"],"names":[],"mappings":"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","file":"Logs.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../../components/variables.css';\n\n@CHARSET \"UTF-8\";\n/*\nover-ride \"Weak\" message, show font in dark grey\n*/\n\n.progress-bar {\n    color: #333;\n}\n\n/*\nReference:\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\n*/\n\n* {\n    -webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n\toutline: none;\n}\n\n    .form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\nbody {\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n.login-form {\n\tmargin-top: 60px;\n}\n\nform[role=login] {\n\tcolor: #5d5d5d;\n\tbackground: #f2f2f2;\n\tpadding: 26px;\n\tborder-radius: 10px;\n\t-moz-border-radius: 10px;\n\t-webkit-border-radius: 10px;\n}\n\tform[role=login] img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 35px;\n\t}\n\tform[role=login] input,\n\tform[role=login] button {\n\t\tfont-size: 18px;\n\t\tmargin: 16px 0;\n\t}\n\tform[role=login] > div {\n\t\ttext-align: center;\n\t}\n\n.form-links {\n\ttext-align: center;\n\tmargin-top: 1em;\n\tmargin-bottom: 50px;\n}\n\t.form-links a {\n\t\tcolor: #fff;\n\t}\n\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n\n\n\n/*Test*/\n.react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n\n\n/*OTHER CSS*/\nbody {\n  background: white;\n  padding: 20px;\n  overflow: scroll;\n}\n#content {\n  width: 100%;\n}\n.react-grid-layout {\n  background: #eee;\n}\n.layoutJSON {\n  background: #ddd;\n  border: 1px solid black;\n  margin-top: 10px;\n  padding: 10px;\n}\n.columns {\n  -moz-columns: 120px;\n  -webkit-columns: 120px;\n  columns: 120px;\n}\n.react-grid-item {\n  box-sizing: border-box;\n}\n.react-grid-item:not(.react-grid-placeholder) {\n  background: #ccc;\n  border: 1px solid black;\n}\n.react-grid-item.resizing {\n  opacity: 0.9;\n}\n.react-grid-item.static {\n  background: #cce;\n}\n.react-grid-item .text {\n  font-size: 24px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 24px;\n  background-color: red;\n}\n\n.react-grid-item .minMax {\n  font-size: 12px;\n}\n.react-grid-item .add {\n  cursor: pointer;\n}\n.react-grid-dragHandleExample{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n",null],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"progress-bar": "Logs_progress-bar_2FZ",
  	"form-control": "Logs_form-control_jq7",
  	"login-form": "Logs_login-form_3Do",
  	"form-links": "Logs_form-links_3f6",
  	"root": "Logs_root_1Yp",
  	"container": "Logs_container_3g_",
  	"lead": "Logs_lead_10_",
  	"formGroup": "Logs_formGroup_2Qq",
  	"label": "Logs_label_1BR",
  	"input": "Logs_input_3jz",
  	"button": "Logs_button_1Gt",
  	"facebook": "Logs_facebook_1wP Logs_button_1Gt",
  	"google": "Logs_google_1iY Logs_button_1Gt",
  	"twitter": "Logs_twitter_20N Logs_button_1Gt",
  	"icon": "Logs_icon_26e",
  	"lineThrough": "Logs_lineThrough_Zs7",
  	"react-grid-layout": "Logs_react-grid-layout_3_B",
  	"react-grid-item": "Logs_react-grid-item_1MD",
  	"cssTransforms": "Logs_cssTransforms_yk-",
  	"resizing": "Logs_resizing_1IA",
  	"react-draggable-dragging": "Logs_react-draggable-dragging_Nom",
  	"react-grid-placeholder": "Logs_react-grid-placeholder_1c6",
  	"react-resizable-handle": "Logs_react-resizable-handle_3iq",
  	"content": "Logs_content_1pg",
  	"layoutJSON": "Logs_layoutJSON_1Gm",
  	"columns": "Logs_columns_GXj",
  	"static": "Logs_static_2mO",
  	"text": "Logs_text_2PL",
  	"minMax": "Logs_minMax_1oh",
  	"add": "Logs_add_1gb",
  	"react-grid-dragHandleExample": "Logs_react-grid-dragHandleExample_3u_"
  };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _blank = __webpack_require__(109);
  
  var _blank2 = _interopRequireDefault(_blank);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/blank',
  
    action: function action() {
      return _react2.default.createElement(_blank2.default, null);
    }
  };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Blank';
  
  function displayBlank(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.PageHeader,
            null,
            'Blank'
          )
        )
      )
    );
  }
  
  displayBlank.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = displayBlank;

/***/ },
/* 110 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _passport = __webpack_require__(112);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportLocal = __webpack_require__(113);
  
  var _promiseMysql = __webpack_require__(114);
  
  var _promiseMysql2 = _interopRequireDefault(_promiseMysql);
  
  var _config_mysql = __webpack_require__(115);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // config/passport.js
  var connection;
  
  _promiseMysql2.default.createConnection(_config_mysql.auth).then(function (conn) {
    console.log("Connected to DB");
    connection = conn;
  }).catch(function () {
    console.error("MySQL failed");
  });
  
  // used to serialize the user for the session
  _passport2.default.serializeUser(function (user, done) {
    console.log("serialized");
    done(null, user.id);
  });
  
  // used to deserialize the user
  _passport2.default.deserializeUser(function (id, done) {
    console.log("deserialize");
    connection.query("SELECT * FROM `Users` WHERE `id` = '" + id + "'").then(function (rows) {
      done(null, rows[0]);
    }).catch(function (err) {
      done(err);
    });
  });
  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'
  _passport2.default.use(new _passportLocal.Strategy(function (username, password, done) {
    // callback with email and password from our form
    console.log("POOPS!");
    connection.query("SELECT * FROM `Users` WHERE `UserName` = '" + username + "'").then(function (rows) {
      console.log(rows);
      if (rows.length !== 1) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (rows[0].Password !== password) {
        return done(null, false, { message: 'Oops! Wrong password.' });
      }
      // all is well, return successful user
      console.log('Here');
      return done(null, rows[0]);
    }).catch(function (err) {
      return done(err);
    });
  }));
  
  exports.default = _passport2.default;

/***/ },
/* 112 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 113 */
/***/ function(module, exports) {

  module.exports = require("passport-local");

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("promise-mysql");

/***/ },
/* 115 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var auth = exports.auth = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '765b114215',
    database: 'Observe_local'
  };

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map